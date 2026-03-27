import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant,
  ...rest
}: {
  children: React.ReactNode;
  variant?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyles $variant={variant} {...rest}>{children}</ButtonStyles>;
};

const LinkButton = ({
  children,
  variant,
  href,
  onClick,
}: {
  children: React.ReactNode;
  variant?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <LinkButtonStyles
      as={Link}
      href={href}
      $variant={variant}
      onClick={onClick}
    >
      {children}
    </LinkButtonStyles>
  );
};

export { LinkButton };
export default Button;

export const ButtonStyles = styled.button<{ $variant?: string }>`
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
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary" ? "var(--darkHighlight)" : "var(--col-100)"};
    color: ${(props) =>
      props.$variant === "primary" ? "white" : "var(--col-000)"};
  }
`;

const LinkButtonStyles = styled(ButtonStyles)<{ $variant?: string }>``;
