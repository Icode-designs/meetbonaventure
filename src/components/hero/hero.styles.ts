"use client";
import styled from "styled-components";

export const HeroStyles = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 50px;
  padding: 0 16px;
  padding-top: 108px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 40px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    padding-top: 150px;
    padding-bottom: 40px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    padding-top: 150px;
    padding-bottom: 40px;
  }
`;

export const HeroArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  text-align: center;
  justify-items: center;
  align-content: center;
  max-width: 536px;
  max-height: 536px;

  @media (min-width: 1024px) {
    text-align: left;
    justify-items: start;
    align-content: start;
  }
`;

export const HeroIllustration = styled.div`
  height: fit-content;
`;
