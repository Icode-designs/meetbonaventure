"use client";
import styled from "styled-components";

export const CtaStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const CtaArticle = styled.article`
  max-width: 672px;
  text-align: center;
  display: grid;
  gap: 32px;
  justify-items: center;

  span {
    svg {
      color: var(--highlight);
      font-size: 48px;
    }
  }
`;
