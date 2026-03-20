"use client";
import styled from "styled-components";

export const BackgroundStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const BackgroundArticle = styled.article`
  display: grid;
  gap: 16px;

  h2 {
    margin-bottom: 16px;
  }

  ul {
    list-style: disc;
    padding: 24px;

    li {
      font-size: 14px;
      color: var(--grey);
    }

    &::marker {
      color: var(--highlight);
    }
  }
`;
