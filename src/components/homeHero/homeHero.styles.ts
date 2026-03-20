"use client";
import styled from "styled-components";
import heroBg from "@/assets/heroBg.jpg";

export const HeroStyles = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 50px;
  padding: 0 16px;
  padding-top: 150px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 40px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    padding-top: 150px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    padding-top: 150px;
    padding-bottom: 100px;
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
  height: 100%;
  width: auto;
  border-radius: 12px;
  padding: 0 16px;
  img {
    height: 100%;
    width: auto;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
  }
`;

export const HeroBgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${heroBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.5);
`;

export const HeroSectionBox = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
`;
