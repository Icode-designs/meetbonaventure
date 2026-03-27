"use client";
import styled from "styled-components";

export const CaseStudyStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 80px 24px;
  }
`;

export const CaseStudyTitleBox = styled.div`
  margin-bottom: 48px;
  text-align: center;

  h2 {
    font-size: 32px;
    background: linear-gradient(90deg, #fff, #a0a0a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const CaseStudyGrid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled.article`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 103, 221, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const MediaBox = styled.div`
  width: 100%;
  height: 250px;
  background: #111;
  position: relative;

  video, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(0, 103, 221, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    color: #a0a0a0;
  }
`;

export const ContentBox = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      font-size: 24px;
      color: var(--white);
      margin-bottom: 4px;
    }

    span.role {
      font-size: 14px;
      color: var(--highlight);
      font-weight: 500;
    }

    a {
      color: var(--white);
      background: rgba(255, 255, 255, 0.1);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        background: var(--highlight);
      }
    }
  }

  p.description {
    color: #a0a0a0;
    font-size: 15px;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    font-size: 13px;
    color: #666;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
`;

export const StackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: -4px;

  span {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cccccc;
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 103, 221, 0.2);
      border-color: var(--highlight);
      color: var(--white);
    }
  }
`;

export const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  h4 {
    color: var(--white);
    font-size: 15px;
    margin-bottom: 4px;
  }

  li {
    font-size: 14px;
    color: #cccccc;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    &::before {
      content: "↳";
      color: #ff4d4d;
      font-weight: bold;
    }
  }
`;

export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  li {
    font-size: 14px;
    color: #cccccc;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    &::before {
      content: "✓";
      color: var(--highlight);
      font-weight: bold;
    }
  }
`;
