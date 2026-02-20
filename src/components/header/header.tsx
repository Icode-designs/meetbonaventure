"use client";
import React, { useEffect, useState } from "react";
import Logo from "../logo/logo";
import { StyledHeader, StyledHeaderContent, StyledNav } from "./header.styles";
import useMediaQuery from "@/hooks/useMediaquery";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isdesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <StyledHeader $scrolled={scrolled}>
      <StyledHeaderContent>
        <Logo />{" "}
        {!isdesktop && (
          <button onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <FaBars />}
          </button>
        )}
        <StyledNav $isMenuOpen={isMenuOpen}>
          <ul>
            <li>projects</li>
            <li>about me</li>
            <li>blog</li>
            <li>contact me!!</li>
          </ul>
        </StyledNav>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
