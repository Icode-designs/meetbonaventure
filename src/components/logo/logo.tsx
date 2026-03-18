import Link from "next/link";
import React from "react";
import styled from "styled-components";
import logo from "@/assets/logo white.png";
import Image from "next/image";

const StyledLogo = styled(Link)`
  font-family: var(--font-italianno);
  height: 50px;
  width: auto;
  color: var(--col-100);
  text-transform: lowercase;
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    text-transform: none;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: center;
  }
`;

const Logo = () => {
  return (
    <StyledLogo href="/">
      <Image src={logo.src} alt="brand logo" height={300} width={300} />
      <h3>Bonaventure da Dev</h3>
    </StyledLogo>
  );
};

export default Logo;
