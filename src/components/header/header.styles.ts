import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 8px;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  border-radius: ${({ $scrolled }) => ($scrolled ? "8px" : "0")};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ $scrolled }) =>
    $scrolled ? undefined : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  transition:
    background-color 0.3s ease-in-out,
    width 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;

  border: 1px solid transparent;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background:
        linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
          padding-box,
        linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.4)
          )
          border-box;
    `}

  @media (min-width: 768px) {
    width: ${({ $scrolled }) => ($scrolled ? "70%" : "100%")};
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--max-width);
  gap: 50px;

  button {
    border: none;
    background: none;
    svg {
      font-size: 24px;
      color: var(--col-100);
    }
  }
`;

export const StyledNav = styled.nav<{ $isMenuOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1001;
  transform: translateX(${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "150%")});
  transition: transform 0.5s ease-in-out;
  background-color: var(--col-100);
  padding: 40px 24px;
  ul {
    list-style: none;
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
    color: var(--col-000);

    li {
      font-size: 28px;
      text-align: center;
      text-transform: capitalize;
      font-weight: 600;

      &:last-of-type {
        background-color: var(--highlight);
        border-radius: 8px;
        padding: 16px 24px;
        width: fit-content;
        margin: 0 auto;
        color: var(--col-100);
      }
    }
  }

  @media (min-width: 1024px) {
    position: static;
    background-color: transparent;
    padding: 0;
    width: fit-content;
    transform: none;
    ul {
      display: flex;
      align-items: center;
      gap: 32px;
      color: var(--col-100);
      li {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;
