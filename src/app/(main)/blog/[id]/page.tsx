"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase";
import { trackEvent } from "@/utils/analytics";

/* ─── Layout ─────────────────────────────────────────── */
const Page = styled.div`
  min-height: 100vh;
  padding: 120px 24px 80px;
  max-width: 760px;
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

const CoverImage = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 48px;
  max-height: 440px;
  background: #111;

  img {
    width: 100%;
    max-height: 440px;
    object-fit: cover;
    display: block;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  font-size: 13px;
  color: #666;
`;

const Tag = styled.span`
  background: rgba(0,103,221,0.12);
  border: 1px solid rgba(0,103,221,0.25);
  color: #6eb4ff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 44px);
  line-height: 1.2;
  background: linear-gradient(90deg, #fff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  line-height: 1.7;
  margin-bottom: 48px;
  border-left: 3px solid var(--highlight);
  padding-left: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin: 40px 0;
`;

const Content = styled.div`
  color: #d0d0d0;
  font-size: 16px;
  line-height: 1.85;
  white-space: pre-wrap;
  word-break: break-word;

  /* Basic markdown-like styling for line breaks and paragraphs */
  p { margin-bottom: 20px; }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 80px 0;
  color: #a0a0a0;
  h2 { color: var(--white); margin-bottom: 16px; }
`;

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      const { data } = await supabase.from("blogs").select("*").eq("id", id).single();
      setPost(data ?? null);
      setLoading(false);
    };
    fetch();
    trackEvent("profile_view", { page: `/blog/${id}` });
  }, [id]);

  if (loading) {
    return (
      <Page>
        <p style={{ color: "#a0a0a0" }}>Loading...</p>
      </Page>
    );
  }

  if (!post) {
    return (
      <Page>
        <NotFound>
          <h2>Post Not Found</h2>
          <p>This post may have been removed or the link is invalid.</p>
          <Link href="/blog" style={{ color: "var(--highlight)", marginTop: "24px", display: "inline-block" }}>
            ← Back to Blog
          </Link>
        </NotFound>
      </Page>
    );
  }

  return (
    <Page>
      <BackLink href="/blog">← Back to Blog</BackLink>

      {post.image_url && (
        <CoverImage>
          <img src={post.image_url} alt={post.title} />
        </CoverImage>
      )}

      <Meta>
        <span>{new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
        {post.read_time && <span>· {post.read_time} min read</span>}
        {post.tags?.map((tag: string, i: number) => <Tag key={i}>{tag}</Tag>)}
      </Meta>

      <Title>{post.title}</Title>

      {post.description && (
        <Description>{post.description}</Description>
      )}

      <Divider />

      <Content>{post.content}</Content>

      <Divider />

      <BackLink href="/blog">← Back to Blog</BackLink>
    </Page>
  );
}
