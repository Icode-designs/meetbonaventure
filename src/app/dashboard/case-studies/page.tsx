"use client";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../dashboard.styles";
import styled from "styled-components";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 16px;

  h1 {
    font-size: clamp(22px, 4vw, 28px);
  }
`;

const AddButton = styled(Link)`
  background: var(--highlight);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: var(--darkHighlight);
  }
`;

const CaseStudyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CaseStudyRow = styled.div<{ $featured: boolean }>`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ $featured }) => ($featured ? "var(--highlight)" : "rgba(255, 255, 255, 0.05)")};
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s ease;
  flex-wrap: wrap;
  gap: 16px;

  .info {
    flex: 1;
    min-width: 0;
    h3 {
      font-size: 18px;
      margin-bottom: 4px;
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    p {
      color: #a0a0a0;
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
      background: transparent;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 13px;
    }

    button.delete {
      border: 1px solid rgba(255, 77, 77, 0.5);
      color: #ff4d4d;
      &:hover {
        background: rgba(255, 77, 77, 0.1);
      }
    }

    button.toggle {
      border: 1px solid rgba(255, 255, 255, 0.2);
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default function CaseStudiesManager() {
  const [studies, setStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudies();
  }, []);

  const fetchStudies = async () => {
    try {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      if (data) setStudies(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch case studies");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFeature = async (id: string, currentStatus: boolean) => {
    await supabase.from("case_studies").update({ is_featured: !currentStatus }).eq("id", id);
    fetchStudies();
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this case study?");
    if (!confirm) return;

    await supabase.from("case_studies").delete().eq("id", id);
    fetchStudies();
  };

  return (
    <PageContainer>
      <HeaderRow>
        <h1>Manage Case Studies</h1>
        <AddButton href="/dashboard/case-studies/new">Add New Case Study</AddButton>
      </HeaderRow>

      {error && <p style={{ color: "#ff4d4d", marginBottom: "24px" }}>{error}</p>}

      {loading ? (
        <p>Loading case studies...</p>
      ) : studies.length === 0 ? (
        <p style={{ color: "#a0a0a0", padding: "40px", textAlign: "center", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "16px" }}>No case studies found. Add your first one!</p>
      ) : (
        <CaseStudyList>
          {studies.map((study) => (
            <CaseStudyRow key={study.id} $featured={study.is_featured}>
              <div className="info">
                <h3>{study.company}</h3>
                <p>{study.role} • {study.duration}</p>
              </div>
              <div className="actions">
                <button 
                  className="toggle"
                  onClick={() => handleToggleFeature(study.id, study.is_featured)} 
                  style={{ color: study.is_featured ? "#4CAF50" : "#a0a0a0" }}
                >
                  {study.is_featured ? "★ Featured" : "☆ Feature"}
                </button>
                <Link href={`/dashboard/case-studies/${study.id}`} style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "var(--white)",
                  textDecoration: "none",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center"
                }}>Edit</Link>
                <button className="delete" onClick={() => handleDelete(study.id)}>Delete</button>
              </div>
            </CaseStudyRow>
          ))}
        </CaseStudyList>
      )}
    </PageContainer>
  );
}
