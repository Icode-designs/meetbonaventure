import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ $variant: "filled" | "outlined" }>`
  color: var(--col-100);
  padding: 16px 24px;
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }

  ${({ $variant }) =>
    $variant === "filled"
      ? css`
          background-color: var(--highlight);
          border: var(--highlight) 1px solid;
          &:hover {
            background-color: var(--darkHighlight);
            border: var(--darkHighlight) 1px solid;
          }
        `
      : $variant === "outlined" &&
        css`
          background-color: transparent;
          border: var(--highlight) 1px solid;
          &:hover {
            background-color: var(--highlight);
            border: var(--highlight) 1px solid;
          }
        `};
`;

const Button = ({
  variant,
  text,
  as,
  href,
}: {
  variant: "filled" | "outlined";
  text: string;
  as?: React.ElementType;
  href?: string;
}) => {
  return (
    <StyledButton
      as={as || undefined}
      $variant={variant}
      href={href || undefined}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
