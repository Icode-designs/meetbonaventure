"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PageContainer } from "../../dashboard.styles";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #cccccc;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type="text"], input[type="url"], input[type="file"], textarea {
    width: 100%;
    padding: 12px 16px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--white);
    font-size: 15px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
      border-color: var(--highlight);
      background: rgba(0, 0, 0, 0.4);
    }
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  background: var(--highlight);
  color: white;
  padding: 16px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;

  &:hover {
    background: var(--darkHighlight);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

export default function NewCaseStudy() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    company: "",
    url: "",
    role: "",
    location: "",
    duration: "",
    description: "",
    problems: "", // will split by newline
    achievements: "", // will split by newline
    stack: "", // will split by comma
    is_featured: false,
  });

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let video_url = null;
      let image_url = null;

      // Upload video if present
      if (videoFile) {
        const fileExt = videoFile.name.split('.').pop();
        const fileName = `vid-${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("case-studies-media").upload(fileName, videoFile);
        if (uploadError) throw new Error(`Video upload failed: ${uploadError.message}`);
        const { data } = supabase.storage.from("case-studies-media").getPublicUrl(fileName);
        video_url = data.publicUrl;
      }

      // Upload image if present
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `img-${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("case-studies-media").upload(fileName, imageFile);
        if (uploadError) throw new Error(`Screenshot upload failed: ${uploadError.message}`);
        const { data } = supabase.storage.from("case-studies-media").getPublicUrl(fileName);
        image_url = data.publicUrl;
      }

      // Prepare arrays
      const problemsArray = formData.problems.split('\n').map((p) => p.trim()).filter((p) => p.length > 0);
      const achievementsArray = formData.achievements.split('\n').map((a) => a.trim()).filter((a) => a.length > 0);
      const stackArray = formData.stack.split(',').map((s) => s.trim()).filter((s) => s.length > 0);

      // Insert record
      const { error: insertError } = await supabase.from("case_studies").insert([
        {
          company: formData.company,
          url: formData.url,
          role: formData.role,
          location: formData.location,
          duration: formData.duration,
          description: formData.description,
          problems: problemsArray,
          achievements: achievementsArray,
          stack: stackArray,
          is_featured: formData.is_featured,
          video_url,
          image_url,
        },
      ]);

      if (insertError) throw new Error(`Failed to save case study: ${insertError.message}`);

      router.push("/dashboard/case-studies");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <h1 style={{ marginBottom: "32px", fontSize: "28px" }}>Add New Case Study</h1>
      
      {error && (
        <div style={{ background: "rgba(255,77,77,0.1)", color: "#ff4d4d", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>
          {error}
        </div>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <FormRow>
          <FieldGroup>
            <label>Project / Company Name *</label>
            <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. Acme Corp" />
          </FieldGroup>
          <FieldGroup>
            <label>Live URL *</label>
            <input type="url" name="url" required value={formData.url} onChange={handleChange} placeholder="https://..." />
          </FieldGroup>
        </FormRow>

        <FormRow>
          <FieldGroup>
            <label>Your Role *</label>
            <input type="text" name="role" required value={formData.role} onChange={handleChange} placeholder="e.g. Technical Lead" />
          </FieldGroup>
          <FieldGroup>
            <label>Duration</label>
            <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g. Jan 2024 - Mar 2024" />
          </FieldGroup>
        </FormRow>

        <FieldGroup>
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Remote, USA" />
        </FieldGroup>

        <FieldGroup>
          <label>Project Description *</label>
          <textarea name="description" required value={formData.description} onChange={handleChange} placeholder="Write a brief overview of the project..." />
        </FieldGroup>

        <FieldGroup>
          <label>Tech Stack Used (Comma separated) *</label>
          <input type="text" name="stack" required value={formData.stack} onChange={handleChange} placeholder="React, Next.js, Supabase, Tailwind CSS" />
        </FieldGroup>

        <FieldGroup>
          <label>Problems Solved (One per line)</label>
          <textarea name="problems" value={formData.problems} onChange={handleChange} placeholder="Reduced latency by shifting edge functions...&#10;Integrated robust authentication bounds..." />
        </FieldGroup>

        <FieldGroup>
          <label>Achievements / Key Features (One per line)</label>
          <textarea name="achievements" value={formData.achievements} onChange={handleChange} placeholder="Implemented scalable architecture...&#10;Increased performance by 40%..." />
        </FieldGroup>

        <FormRow>
          <FieldGroup>
            <label>Screenshot * (.jpg, .png)</label>
            <input type="file" required accept="image/*" onChange={handleImageChange} style={{ padding: "10px" }} />
          </FieldGroup>
          <FieldGroup>
            <label>Optional Video Description (.mp4, .webm)</label>
            <input type="file" accept="video/*" onChange={handleVideoChange} style={{ padding: "10px" }} />
          </FieldGroup>
        </FormRow>
        
        <FieldGroup>
          <label>
            <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleChange} />
            Feature this case study on the homepage
          </label>
        </FieldGroup>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Uploading & Saving..." : "Publish Case Study"}
        </SubmitButton>
      </FormContainer>
    </PageContainer>
  );
}
