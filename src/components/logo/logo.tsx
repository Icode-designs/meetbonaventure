import React from "react";
import styled from "styled-components";

const StyledLogo = styled.p`
  font-family: var(--font-italianno);
  font-size: 48px;
  color: var(--col-100);
`;

const Logo = () => {
  return <StyledLogo>bonaventure.dev</StyledLogo>;
};

export default Logo;
