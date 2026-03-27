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
  h1 { font-size: clamp(22px, 4vw, 28px); }
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
  transition: background 0.2s ease;
  &:hover { background: var(--darkHighlight); }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BlogRow = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.2s;

  &:hover { border-color: rgba(255,255,255,0.12); }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const BlogThumb = styled.div`
  width: 72px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  flex-shrink: 0;

  img { width: 100%; height: 100%; object-fit: cover; }
`;

const BlogInfo = styled.div`
  flex: 1;
  min-width: 0;
  h3 {
    font-size: 16px;
    color: var(--white);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
  }
  p { font-size: 13px; color: #a0a0a0; }
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  a, button {
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }

  a {
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--white);
    &:hover { background: rgba(255,255,255,0.05); }
  }

  button {
    background: transparent;
    border: 1px solid rgba(255,77,77,0.5);
    color: #ff4d4d;
    &:hover { background: rgba(255,77,77,0.1); }
  }
`;

export default function BlogManager() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (data) setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this blog post?")) return;
    await supabase.from("blogs").delete().eq("id", id);
    fetchPosts();
  };

  return (
    <PageContainer>
      <HeaderRow>
        <h1>Manage Blog</h1>
        <AddButton href="/dashboard/blogs/new">+ New Post</AddButton>
      </HeaderRow>

      {error && <p style={{ color: "#ff4d4d", marginBottom: "24px" }}>{error}</p>}

      {loading ? (
        <p style={{ color: "#a0a0a0" }}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p style={{ color: "#a0a0a0", padding: "40px", textAlign: "center", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "16px" }}>
          No blog posts yet. Create your first one!
        </p>
      ) : (
        <BlogList>
          {posts.map((post) => (
            <BlogRow key={post.id}>
              <BlogThumb>
                {post.image_url ? <img src={post.image_url} alt={post.title} /> : null}
              </BlogThumb>
              <BlogInfo>
                <h3>{post.title}</h3>
                <p>{new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · {post.read_time ? `${post.read_time} min read` : ""}</p>
              </BlogInfo>
              <Actions>
                <Link href={`/dashboard/blogs/${post.id}`}>Edit</Link>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </Actions>
            </BlogRow>
          ))}
        </BlogList>
      )}
    </PageContainer>
  );
}
