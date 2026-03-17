"use client";
import styled from "styled-components";

export const ExpertiseStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const ExpertiseHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 40px;

  article {
    max-width: 500px;
    h2 {
      margin-bottom: 16px;
    }
  }

  a {
    padding-bottom: 4px;
    border-bottom: 4px solid var(--highlight);
    width: fit-content;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      align-self: flex-end;
    }
  }
`;

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  justify-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    article {
      &:nth-of-type(3) {
        transform: translateX(50%);
      }
    }
  }
`;

export const ExpertiseCard = styled.article`
  position: relative;
  border-radius: 12px;
  background-color: var(--body-color);
  padding: 24px;
  display: grid;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  cursor: default;
  ul {
    li::marker {
      color: var(--highlight);
    }
  }

  &::after {
    content: "";
    display: block;
    background-color: var(--highlight);
    opacity: 0.3;
    position: absolute;
    height: 0px;
    width: 0px;
    border-radius: 50%;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-50%);
    transition: all ease-in-out 0.3s;
  }

  &.active {
    &::after {
      transform: translateX(50%) translateY(-50%);
      height: 150px;
      width: 150px;
    }
  }
`;

export const ExpertiseIcon = styled.div`
  background-color: var(--col-200);
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
    color: var(--highlight);
  }
`;
