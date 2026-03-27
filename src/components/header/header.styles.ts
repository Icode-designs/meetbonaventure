"use client";
import styled from "styled-components";

export const HeaderStyles = styled.header<{ $isScrolled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "var(--body-color)" : "transparent"};
  transition: all ease-in-out 0.3s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1010;
  max-width: var(--max-width);
`;

export const Menubtn = styled.button`
  svg {
    font-size: 24px;
    color: var(--col-100);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavStyles = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  top: 96px;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 100%;
  height: calc(100vh - 96px);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: end;
  align-items: start;
  transition: right 0.3s ease-in-out;
  z-index: -1;

  ul {
    display: grid;
    gap: 24px;
    padding: 40px 24px;
    justify-items: start;
    align-content: center;
    width: 80%;
    z-index: 990;
    height: 100%;
    background-color: var(--body-color);
    list-style: none;
    color: var(--col-100);
    font-size: 24px;
    font-weight: 400;

    li:last-of-type {
      margin-top: 24px;
    }
  }

  @media (min-width: 1024px) {
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: none;
    right: unset;
    top: unset;

    ul {
      display: flex;
      gap: 32px;
      padding: 0;
      width: auto;
      height: auto;
      background-color: transparent;
      z-index: 1010;
      font-size: 18px;

      li:last-of-type {
        margin-top: unset;
      }
    }
  }
`;
