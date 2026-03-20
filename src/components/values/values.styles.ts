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
`;

export const ValueGrid = styled(ProcessGrid)`
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;
