"use client";
import styled from "styled-components";
import Link from "next/link";

/* ─── Shell ─────────────────────────────────────────────── */
export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--body-color);
  color: var(--col-100);
`;

/* ─── Backdrop (mobile) ─────────────────────────────────── */
export const SidebarBackdrop = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 40;
    backdrop-filter: blur(2px);
  }
`;

/* ─── Sidebar ───────────────────────────────────────────── */
export const Sidebar = styled.aside<{ $open?: boolean }>`
  width: 280px;
  background: rgba(255, 255, 255, 0.02);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 50;
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.4);
    background: var(--body-color);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

export const SidebarLogo = styled.div`
  padding: 0 32px 32px;
  font-size: 24px;
  font-weight: 700;
  color: var(--highlight);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Close button shown only on mobile */
export const SidebarCloseBtn = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #a0a0a0;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  &:hover { color: var(--white); }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
  flex: 1;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: 16px 24px;
  border-radius: 12px;
  color: ${({ $active }) => ($active ? "var(--white)" : "#a0a0a0")};
  background: ${({ $active }) => ($active ? "rgba(0, 103, 221, 0.15)" : "transparent")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    color: var(--white);
    background: rgba(0, 103, 221, 0.1);
  }
`;

export const LogoutButtonContainer = styled.div`
  padding: 0 16px;
  margin-top: auto;

  button {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 16px 24px;
    color: #ff4d4d;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 77, 77, 0.1);
    }
  }
`;

/* ─── Main content ──────────────────────────────────────── */
export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-width: 0;
`;

export const DashboardHeader = styled.header`
  height: 72px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 16px;

  @media (min-width: 769px) {
    justify-content: flex-end;
    padding: 0 40px;
  }
`;

/* Hamburger button shown only on mobile */
export const HamburgerBtn = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;
  padding: 8px 10px;
  font-size: 18px;
  line-height: 1;
  transition: background 0.2s;

  &:hover { background: rgba(255, 255, 255, 0.1); }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--highlight);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;

    span.name {
      font-size: 14px;
      font-weight: 600;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span.role {
      font-size: 12px;
      color: #a0a0a0;
    }
  }
`;

export const PageContainer = styled.div`
  padding: 24px 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;
