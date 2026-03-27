"use client";
import styled, { keyframes } from "styled-components";
import { HeroIllustration } from "../homeHero/homeHero.styles";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const AboutHeroImgBox = styled(HeroIllustration)`
  width: 100%;
  height: auto;
  overflow: hidden;
  max-width: 450px;
  max-height: 550px;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 103, 221, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${float} 6s ease-in-out infinite;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
