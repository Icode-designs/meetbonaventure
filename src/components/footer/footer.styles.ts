"use client";
import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: 40px 16px;

  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const FooterContentBox = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  gap: 32px;
  justify-items: center;

  article {
    display: grid;
    gap: 16px;
    justify-items: center;
    max-width: 400px;
    text-align: center;
  }

  ul {
    text-align: center;
    display: grid;
    gap: 16px;
    list-style: none;

    li {
      color: var(--grey);
      font-size: 14px;
      &:hover {
        color: var(--highlight);
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    article {
      display: flex;
      gap: 16px;
      justify-items: start;
      max-width: 400px;
      text-align: left;
      align-items: center;
    }
  }
`;

export const FooterAccreditation = styled.div`
  border-top: 1px var(--grey) solid;
  margin-top: 32px;
  padding: 20px 16px;
  padding-bottom: 0;
  text-align: center;
`;
