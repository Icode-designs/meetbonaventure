import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: string;
}) => {
  return <ButtonStyles $variant={variant}>{children}</ButtonStyles>;
};

const LinkButton = ({
  children,
  variant,
  href,
}: {
  children: React.ReactNode;
  variant?: string;
  href: string;
}) => {
  return (
    <LinkButtonStyles as={Link} href={href} $variant={variant}>
      {children}
    </LinkButtonStyles>
  );
};

export { LinkButton };
export default Button;

const ButtonStyles = styled.button<{ $variant?: string }>`
  background-color: ${(props) =>
    props.$variant === "primary" ? "var(--highlight)" : "transparent"};
  color: white;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$variant === "primary" ? "var(--highlight)" : "var(--col-100)"};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary" ? "var(--darkHighlight)" : "var(--col-100)"};
    color: ${(props) =>
      props.$variant === "primary" ? "white" : "var(--col-000)"};
  }
`;

const LinkButtonStyles = styled(ButtonStyles)<{ $variant?: string }>``;
