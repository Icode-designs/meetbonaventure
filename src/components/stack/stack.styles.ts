"use client";
import styled from "styled-components";

export const StackStyles = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
  gap: 16px;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 40px 16px;

  h2 {
    color: var(--col-100);
    span {
      color: var(--highlight);
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 60px 24px;
  }
`;

export const MarqueeContainer = styled.div`
  display: flex;
  border-left: 4px solid var(--highlight);
  height: 100%;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
`;

export const MarqueeContent = styled.div`
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  display: flex;
  animation: marquee 20s linear infinite;
  gap: 16px;
  padding: 0 8px;
  span {
    svg {
      font-size: 40px;
      color: var(--col-100);
    }
  }
`;
