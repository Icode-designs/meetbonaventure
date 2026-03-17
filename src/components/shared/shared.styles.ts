"use client";
import styled from "styled-components";

export const StyledTag = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--highlight);
  background-color: rgba(0, 103, 221, 0.5);
  padding: 4px 8px;
  border-radius: 16px;
  width: fit-content;
`;

export const BtnFlexContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SpanText = styled.span`
  color: var(--highlight);
`;
