"use client";
import styled from "styled-components";
import { ProcessCard, ProcessGrid } from "../process/process.styles";

export const ValuesStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const ValueCard = styled(ProcessCard)`
  width: 100%;
  justify-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: 15px;
    color: #a0a0a0;
    line-height: 1.5;
    margin: 0;
  }

  span {
    font-size: 36px;
    font-weight: 700;
    color: var(--highlight);
    opacity: 0.9;
    background: linear-gradient(135deg, var(--highlight) 0%, rgba(0, 103, 221, 0.5) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 103, 221, 0.4);
    box-shadow: 0 16px 40px rgba(0, 103, 221, 0.15);
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const ValueGrid = styled(ProcessGrid)`
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;
