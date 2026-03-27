"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import {
  DashboardContainer,
  Sidebar,
  SidebarBackdrop,
  SidebarCloseBtn,
  SidebarLogo,
  SidebarNav,
  NavLink,
  MainContent,
  DashboardHeader,
  HeaderProfile,
  HamburgerBtn,
  LogoutButtonContainer,
} from "./dashboard.styles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUserEmail(session.user.email ?? "Admin");
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  // Close sidebar on route change (mobile nav)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <DashboardContainer style={{ alignItems: "center", justifyContent: "center" }}>
        <p>Loading Dashboard...</p>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      {/* Mobile overlay backdrop */}
      <SidebarBackdrop $open={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      {/* Sidebar */}
      <Sidebar $open={sidebarOpen}>
        <SidebarLogo>
          Admin Portal
          <SidebarCloseBtn onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            ✕
          </SidebarCloseBtn>
        </SidebarLogo>
        <SidebarNav>
          <NavLink href="/dashboard" $active={pathname === "/dashboard"}>
            📊 Analytics
          </NavLink>
          <NavLink
            href="/dashboard/case-studies"
            $active={pathname.startsWith("/dashboard/case-studies")}
          >
            💼 Case Studies
          </NavLink>
          <NavLink
            href="/dashboard/blogs"
            $active={pathname.startsWith("/dashboard/blogs")}
          >
            ✍️ Blog
          </NavLink>
        </SidebarNav>
        <LogoutButtonContainer style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link
            href="/"
            style={{
              fontSize: "14px",
              color: "#a0a0a0",
              textDecoration: "none",
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              textAlign: "center",
              display: "block",
              transition: "all 0.2s",
            }}
          >
            ← Back to Portfolio
          </Link>
          <button onClick={handleLogout}>Log out</button>
        </LogoutButtonContainer>
      </Sidebar>

      <MainContent>
        <DashboardHeader>
          {/* Hamburger — visible on mobile */}
          <HamburgerBtn
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </HamburgerBtn>

          <HeaderProfile>
            <div className="avatar">{userEmail?.charAt(0).toUpperCase() || "A"}</div>
            <div className="info">
              <span className="name">{userEmail}</span>
              <span className="role">Administrator</span>
            </div>
          </HeaderProfile>
        </DashboardHeader>
        {children}
      </MainContent>
    </DashboardContainer>
  );
}
