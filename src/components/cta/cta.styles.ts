"use client";
import styled from "styled-components";
import { ButtonStyles } from "../button/button";

export const CtaStyles = styled.div`
  padding: 40px 16px;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 32px;

  @media (min-width: 1024px) {
    padding: 40px 24px;
  }
`;

export const CtaArticle = styled.article`
  max-width: 672px;
  text-align: center;
  display: grid;
  gap: 32px;
  justify-items: center;

  span {
    svg {
      color: var(--highlight);
      font-size: 48px;
    }
  }
`;

export const FormStyles = styled.form`
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  border: none;
  padding: 24px;
  background-color: var(--col-100);
  display: grid;
  gap: 16px;
  max-width: 750px;

  > div {
    display: grid;
    gap: 8px;
  }

  @media (min-width: 768px) {
    > div {
      display: flex;
    }
  }
`;
export const InputContainerStyles = styled.div`
  position: relative;
  padding: 8px;
  width: 100%;

  label {
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 400;
    color: var(--grey);
    position: absolute;
    top: 28px;
    left: 16px;
    transform: translateY(-50%);
    pointer-events: none;

    transition: all 0.3s ease;
  }

  input,
  textarea {
    padding: 12px 8px;
    border: var(--grey) solid 1px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }

  textarea {
    min-height: 300px;
  }

  &.active label {
    top: 0;
    transform: translateY(-50%);
    font-size: 12px;
    color: black;
  }
`;
export const FormBtn = styled(ButtonStyles)`
  width: 100%;
`;
