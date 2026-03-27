"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  CaseStudyStyles, 
  CaseStudyTitleBox, 
  CaseStudyGrid, 
  ProjectCard, 
  MediaBox, 
  ContentBox, 
  AchievementList,
  StackBox,
  ProblemList
} from "@/components/caseStudies/caseStudies.styles";
import { supabase } from "@/utils/supabase";

export default function AllCaseStudiesPage() {
  const [studies, setStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      const { data } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false });
        
      if (data) setStudies(data);
      setLoading(false);
    };
    fetchStudies();
  }, []);

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <CaseStudyStyles>
        <CaseStudyTitleBox>
          <h2 style={{ fontSize: "40px" }}>Archive</h2>
          <p style={{ marginTop: "16px", color: "var(--highlight)", fontSize: "16px" }}>A complete catalogue of my past case studies.</p>
        </CaseStudyTitleBox>

        {loading ? (
          <p style={{ textAlign: "center", color: "#a0a0a0" }}>Loading projects...</p>
        ) : studies.length === 0 ? (
          <p style={{ textAlign: "center", color: "#a0a0a0" }}>No case studies published yet.</p>
        ) : (
          <CaseStudyGrid>
            {studies.map((study) => (
              <ProjectCard key={study.id}>
                <MediaBox>
                  {study.video_url ? (
                    <video src={study.video_url} poster={study.image_url || undefined} controls muted preload="metadata" />
                  ) : study.image_url ? (
                    <img src={study.image_url} alt={`${study.company} screenshot`} />
                  ) : (
                    <div className="fallback">No Media Provided</div>
                  )}
                </MediaBox>
                <ContentBox>
                  <div className="header">
                    <div>
                      <h3>{study.company}</h3>
                      <span className="role">{study.role}</span>
                    </div>
                    {study.url && (
                      <a href={study.url} target="_blank" rel="noopener noreferrer">
                        Visit Site ↗
                      </a>
                    )}
                  </div>
                  <p className="description">{study.description}</p>
                  
                  {study.stack && study.stack.length > 0 && (
                    <StackBox>
                      {study.stack.map((tech: string, i: number) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </StackBox>
                  )}

                  {study.problems && study.problems.length > 0 && (
                    <ProblemList>
                      <h4>Problems Solved:</h4>
                      {study.problems.map((prob: string, i: number) => (
                        <li key={i}>{prob}</li>
                      ))}
                    </ProblemList>
                  )}
                  
                  {study.achievements && study.achievements.length > 0 && (
                    <AchievementList>
                      {study.achievements.map((ach: string, i: number) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </AchievementList>
                  )}

                  <div className="meta">
                    {study.location} • {study.duration}
                  </div>
                  <Link
                    href={`/case-studies/${study.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--highlight)",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      marginTop: "4px"
                    }}
                  >
                    View Details →
                  </Link>
                </ContentBox>
              </ProjectCard>
            ))}
          </CaseStudyGrid>
        )}
      </CaseStudyStyles>
    </div>
  );
}
