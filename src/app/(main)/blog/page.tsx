"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const Page = styled.div`
  min-height: 100vh;
  padding: 120px 24px 80px;
  max-width: 1100px;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 64px;

  h1 {
    font-size: clamp(32px, 6vw, 52px);
    background: linear-gradient(90deg, #fff, #a0a0a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
  }

  p {
    color: #a0a0a0;
    font-size: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(Link)`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0,103,221,0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: #111;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.04);
  }

  .fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(0,103,221,0.2), transparent);
    color: #555;
    font-size: 14px;
  }
`;

const CardBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  color: #666;
`;

const Tag = styled.span`
  background: rgba(0,103,221,0.12);
  border: 1px solid rgba(0,103,221,0.25);
  color: #6eb4ff;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: var(--white);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDesc = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const ReadMore = styled.span`
  font-size: 13px;
  color: var(--highlight);
  font-weight: 600;
  margin-top: auto;
`;

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <Page>
      <TitleBox>
        <h1>Blog</h1>
        <p>Thoughts on software, design, and everything in between.</p>
      </TitleBox>

      {loading ? (
        <p style={{ textAlign: "center", color: "#a0a0a0" }}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#a0a0a0" }}>No posts published yet. Check back soon!</p>
      ) : (
        <Grid>
          {posts.map((post) => (
            <Card key={post.id} href={`/blog/${post.id}`}>
              <CardImage>
                {post.image_url ? (
                  <img src={post.image_url} alt={post.title} />
                ) : (
                  <div className="fallback">No Image</div>
                )}
              </CardImage>
              <CardBody>
                <CardMeta>
                  <span>{new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  {post.read_time && <span>· {post.read_time} min read</span>}
                  {post.tags?.slice(0, 2).map((tag: string, i: number) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </CardMeta>
                <CardTitle>{post.title}</CardTitle>
                <CardDesc>{post.description}</CardDesc>
                <ReadMore>Read more →</ReadMore>
              </CardBody>
            </Card>
          ))}
        </Grid>
      )}
    </Page>
  );
}
