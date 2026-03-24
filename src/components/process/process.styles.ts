"use client";
import styled from "styled-components";

export const ProcessStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const ProcessHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 32px;
`;

export const ProcessCard = styled.article`
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--grey);
  display: grid;
  gap: 16px;
  transition: all ease-in-out 0.3s;

  span {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    background-color: var(--grey);
    color: var(--col-100);
    transition: all ease-in-out 0.3s;
  }

  &.active {
    span {
      background-color: var(--highlight);
      box-shadow: 0 6px 10px rgba(5, 122, 255, 0.5);
    }
  }
`;
