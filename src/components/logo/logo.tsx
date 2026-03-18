import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  font-family: var(--font-italianno);
  font-size: clamp(32px, 3vw, 40px);
  color: var(--col-100);
  text-transform: lowercase;
`;

const Logo = () => {
  return <StyledLogo href="/">Meet Bonaventure</StyledLogo>;
};

export default Logo;
