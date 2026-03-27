"use client";
import styled from "styled-components";

export const BackgroundStyles = styled.div`
  padding: 80px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 80px 24px;
  }
`;

export const BackgroundArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: 3fr 2fr;
    gap: 64px;
    align-items: start;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 32px;
    background: linear-gradient(90deg, #fff, #a0a0a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    line-height: 1.8;
    color: #cccccc;
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: rgba(255, 255, 255, 0.02);
  padding: 40px 32px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: var(--white);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 12px;
    font-weight: 600;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
