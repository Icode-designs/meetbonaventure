"use client";
import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderStyles,
  Menubtn,
  NavStyles,
} from "./header.styles";
import Logo from "../logo/logo";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button, { LinkButton } from "../button/button";
import useMediaQuery from "@/hooks/useMediaquery";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <HeaderStyles>
      <HeaderContainer>
        <Logo />

        <Menubtn onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <FaBars />}
        </Menubtn>

        <NavStyles $isOpen={isMenuOpen}>
          <ul>
            <li>
              <Link href="#work">work</Link>
            </li>
            <li>
              <Link href="#expertise">expertise</Link>
            </li>
            <li>
              <Link href="#process">process</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            {!isDesktop && (
              <li>
                <LinkButton href="/contact" variant="primary">
                  Get in touch
                </LinkButton>
              </li>
            )}
          </ul>
        </NavStyles>
        {isDesktop && (
          <LinkButton href="/contact" variant="primary">
            Get in touch
          </LinkButton>
        )}
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;
