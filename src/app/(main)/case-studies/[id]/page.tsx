"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase";

/* ─── Layout ──────────────────────────────────────────────────── */
const Page = styled.div`
  min-height: 100vh;
  padding: 140px 24px 80px;
  max-width: 900px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #a0a0a0;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 40px;
  transition: color 0.2s;
  &:hover { color: var(--white); }
`;

const Hero = styled.div`
  border-radius: 20px;
  overflow: hidden;
  background: #111;
  width: 100%;
  max-height: 500px;
  margin-bottom: 48px;

  video, img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    display: block;
  }

  .fallback {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(0,103,221,0.2) 0%, rgba(0,0,0,0) 100%);
    color: #a0a0a0;
    font-size: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;

  h1 {
    font-size: clamp(28px, 5vw, 42px);
    background: linear-gradient(90deg, #fff, #a0a0a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 6px;
  }

  .role {
    font-size: 15px;
    color: var(--highlight);
    font-weight: 500;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;

  span {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 13px;
    color: #a0a0a0;
  }
`;

const LiveButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--highlight);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;
  white-space: nowrap;
  &:hover { background: var(--darkHighlight); }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin: 40px 0;
`;

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 20px;
    color: var(--white);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 20px;
      background: var(--highlight);
      border-radius: 2px;
    }
  }

  p {
    color: #a0a0a0;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const StackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #cccccc;
    font-size: 13px;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.2s ease;
    &:hover {
      background: rgba(0,103,221,0.2);
      border-color: var(--highlight);
      color: var(--white);
    }
  }
`;

const ItemList = styled.ul<{ accent?: string }>`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    font-size: 15px;
    color: #cccccc;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 12px;

    &::before {
      content: "${({ accent }) => accent ?? "✓"}";
      color: ${({ accent }) => accent === "↳" ? "#ff4d4d" : "var(--highlight)"};
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 80px 24px;
  color: #a0a0a0;
  h2 { color: var(--white); margin-bottom: 16px; }
`;

/* ─── Component ───────────────────────────────────────────────── */
export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const [study, setStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      const { data } = await supabase.from("case_studies").select("*").eq("id", id).single();
      setStudy(data ?? null);
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) {
    return (
      <Page>
        <p style={{ color: "#a0a0a0" }}>Loading...</p>
      </Page>
    );
  }

  if (!study) {
    return (
      <Page>
        <NotFound>
          <h2>Case Study Not Found</h2>
          <p>This project may have been removed or the link is invalid.</p>
          <Link href="/case-studies" style={{ color: "var(--highlight)", marginTop: "24px", display: "inline-block" }}>
            ← Back to all projects
          </Link>
        </NotFound>
      </Page>
    );
  }

  return (
    <Page>
      <BackLink href="/case-studies">← All Case Studies</BackLink>

      {/* Media Hero */}
      <Hero>
        {study.video_url ? (
          <video src={study.video_url} poster={study.image_url || undefined} controls muted />
        ) : study.image_url ? (
          <img src={study.image_url} alt={`${study.company} screenshot`} />
        ) : (
          <div className="fallback">No media provided</div>
        )}
      </Hero>

      {/* Title & CTA */}
      <Header>
        <div>
          <h1>{study.company}</h1>
          <span className="role">{study.role}</span>
        </div>
        {study.url && (
          <LiveButton href={study.url} target="_blank" rel="noopener noreferrer">
            Visit Live Site ↗
          </LiveButton>
        )}
      </Header>

      {/* Meta tags */}
      <MetaRow>
        {study.location && <span>📍 {study.location}</span>}
        {study.duration && <span>🗓 {study.duration}</span>}
      </MetaRow>

      {/* Description */}
      <Section>
        <h2>Overview</h2>
        <p>{study.description}</p>
      </Section>

      {/* Tech Stack */}
      {study.stack && study.stack.length > 0 && (
        <>
          <Divider />
          <Section>
            <h2>Tech Stack</h2>
            <StackBox>
              {study.stack.map((tech: string, i: number) => (
                <span key={i}>{tech}</span>
              ))}
            </StackBox>
          </Section>
        </>
      )}

      {/* Problems Solved */}
      {study.problems && study.problems.length > 0 && (
        <>
          <Divider />
          <Section>
            <h2>Problems Solved</h2>
            <ItemList accent="↳">
              {study.problems.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ItemList>
          </Section>
        </>
      )}

      {/* Achievements */}
      {study.achievements && study.achievements.length > 0 && (
        <>
          <Divider />
          <Section>
            <h2>Key Achievements</h2>
            <ItemList>
              {study.achievements.map((a: string, i: number) => (
                <li key={i}>{a}</li>
              ))}
            </ItemList>
          </Section>
        </>
      )}

      <Divider />

      {/* Footer nav */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <BackLink href="/case-studies">← All Case Studies</BackLink>
        {study.url && (
          <LiveButton href={study.url} target="_blank" rel="noopener noreferrer">
            Visit Live Site ↗
          </LiveButton>
        )}
      </div>
    </Page>
  );
}
