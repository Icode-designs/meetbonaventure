"use client";
import React, { useEffect } from "react";
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
import { LinkButton } from "../button/button";
import useMediaQuery from "@/hooks/useMediaquery";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      const scrolled = window.scrollY > 100;

      // prevent unnecessary re-renders
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScrollState(); // run once on mount

    window.addEventListener("scroll", handleScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollState);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <HeaderStyles $isScrolled={isScrolled || isMenuOpen}>
      <HeaderContainer>
        <Logo />

        <Menubtn onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <FaBars />}
        </Menubtn>

        <NavStyles $isOpen={isMenuOpen}>
          <ul>
            <li>
              <Link href="/#work" onClick={toggleMenu}>
                work
              </Link>
            </li>
            <li>
              <Link href="/#expertise" onClick={toggleMenu}>
                expertise
              </Link>
            </li>
            <li>
              <Link href="/#process" onClick={toggleMenu}>
                process
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                about
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMenu}>
                blog
              </Link>
            </li>
            {!isDesktop && (
              <li>
                <LinkButton
                  href="/contact"
                  variant="primary"
                  onClick={toggleMenu}
                >
                  Get in touch
                </LinkButton>
              </li>
            )}
          </ul>
        </NavStyles>
        {isDesktop && (
          <LinkButton href="/#contact" variant="primary">
            Get in touch
          </LinkButton>
        )}
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;
