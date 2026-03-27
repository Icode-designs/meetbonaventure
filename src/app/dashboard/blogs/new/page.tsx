"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PageContainer } from "../../dashboard.styles";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

const FormCard = styled.form`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #cccccc;
  }

  input[type="text"], input[type="number"], input[type="file"], textarea {
    width: 100%;
    padding: 12px 16px;
    background: rgba(0,0,0,0.2);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    color: var(--white);
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
    &:focus { border-color: var(--highlight); background: rgba(0,0,0,0.4); }
  }

  textarea { min-height: 120px; resize: vertical; font-family: inherit; }
  textarea.content { min-height: 320px; }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Submit = styled.button`
  background: var(--highlight);
  color: white;
  padding: 16px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: var(--darkHighlight); }
  &:disabled { background: #555; cursor: not-allowed; }
`;

export default function NewBlogPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    tags: "",
    read_time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let image_url = null;

      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const name = `blog-${Date.now()}.${ext}`;
        const { error: upErr } = await supabase.storage.from("blog-images").upload(name, imageFile);
        if (upErr) throw new Error(`Image upload failed: ${upErr.message}`);
        const { data } = supabase.storage.from("blog-images").getPublicUrl(name);
        image_url = data.publicUrl;
      }

      const tagsArray = form.tags.split(",").map((t) => t.trim()).filter(Boolean);

      const { error: insErr } = await supabase.from("blogs").insert([{
        title: form.title,
        description: form.description,
        content: form.content,
        tags: tagsArray,
        read_time: form.read_time ? parseInt(form.read_time) : null,
        image_url,
      }]);

      if (insErr) throw new Error(insErr.message);
      router.push("/dashboard/blogs");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <h1 style={{ marginBottom: "32px", fontSize: "28px" }}>New Blog Post</h1>

      {error && (
        <div style={{ background: "rgba(255,77,77,0.1)", color: "#ff4d4d", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>
          {error}
        </div>
      )}

      <FormCard onSubmit={handleSubmit}>
        <Field>
          <label>Title *</label>
          <input type="text" name="title" required value={form.title} onChange={handleChange} placeholder="e.g. Building a CMS with Next.js and Supabase" />
        </Field>

        <Field>
          <label>Short Description *</label>
          <textarea name="description" required value={form.description} onChange={handleChange} placeholder="A brief summary shown in the blog listing..." />
        </Field>

        <Field>
          <label>Full Content * (Markdown supported)</label>
          <textarea className="content" name="content" required value={form.content} onChange={handleChange} placeholder="Write your full blog post here..." />
        </Field>

        <Row>
          <Field>
            <label>Tags (comma separated)</label>
            <input type="text" name="tags" value={form.tags} onChange={handleChange} placeholder="Next.js, Supabase, CMS" />
          </Field>
          <Field>
            <label>Estimated Read Time (minutes)</label>
            <input type="number" name="read_time" value={form.read_time} onChange={handleChange} placeholder="5" min="1" />
          </Field>
        </Row>

        <Field>
          <label>Cover Image *</label>
          <input type="file" accept="image/*" required onChange={(e) => e.target.files && setImageFile(e.target.files[0])} style={{ padding: "10px" }} />
        </Field>

        <Submit type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish Post"}
        </Submit>
      </FormCard>
    </PageContainer>
  );
}
