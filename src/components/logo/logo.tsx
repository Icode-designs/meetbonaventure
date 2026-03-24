import Link from "next/link";
import React from "react";
import styled from "styled-components";
import logo from "@/assets/logo white.png";
import Image from "next/image";

const StyledLogo = styled(Link)<{ $size: string | undefined }>`
  font-family: var(--font-italianno);
  height: ${({ $size }) => $size || "50px"};
  width: auto;
  color: var(--col-100);
  text-transform: lowercase;
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: center;
  }
`;

const Logo = ({ size }: { size?: string }) => {
  return (
    <StyledLogo href="/" $size={size}>
      <Image src={logo.src} alt="brand logo" height={500} width={300} />
      <div></div>
    </StyledLogo>
  );
};

export default Logo;
