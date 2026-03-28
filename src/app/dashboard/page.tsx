"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer } from "./dashboard.styles";
import { supabase } from "@/utils/supabase";

/* ─── Styled components ─────────────────────────────── */
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: 500;
  }

  .value {
    font-size: 32px;
    font-weight: 700;
    color: var(--white);
  }

  .trend {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .trend.up   { color: #4CAF50; }
  .trend.down { color: #ff4d4d; }
  .trend.flat { color: #a0a0a0; }
`;

const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, rgba(0, 103, 221, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
  border: 1px solid rgba(0, 103, 221, 0.3);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;

  h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }

  p {
    color: #a0a0a0;
  }
`;

const ContentOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;

const ContentCard = styled.div`
  padding: 32px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;

  .count {
    font-size: 40px;
    font-weight: 700;
    color: var(--highlight);
    margin-bottom: 8px;
  }

  h3 {
    font-size: 14px;
    color: #a0a0a0;
  }
`;

const SkeletonPulse = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(255, 255, 255, 0.03) 75%
  );
  background-size: 200% 100%;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 8px;
  height: 32px;
  width: 80px;

  @keyframes pulse {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

/* ─── Types ──────────────────────────────────────────── */
interface StatItem {
  label: string;
  value: number;
  trend: number; // percentage change
}

/* ─── Helpers ────────────────────────────────────────── */
function formatNumber(n: number): string {
  return n.toLocaleString();
}

function trendText(pct: number): string {
  if (pct === 0) return "No change from last week";
  const dir = pct > 0 ? "↑" : "↓";
  return `${dir} ${Math.abs(pct)}% from last week`;
}

function trendClass(pct: number): string {
  if (pct > 0) return "up";
  if (pct < 0) return "down";
  return "flat";
}

/* ─── Component ──────────────────────────────────────── */
export default function DashboardAnalytics() {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [blogCount, setBlogCount] = useState(0);
  const [caseStudyCount, setCaseStudyCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

        const eventTypes = [
          { key: "profile_view", label: "Total Profile Views" },
          { key: "case_study_click", label: "Case Study Clicks" },
          { key: "resume_download", label: "Resume Downloads" },
          { key: "contact_submission", label: "Contact Form Submissions" },
        ];

        // Fetch all events
        const { data: allEvents } = await supabase
          .from("analytics_events")
          .select("event_type, created_at");

        const events = allEvents || [];

        const results: StatItem[] = eventTypes.map(({ key, label }) => {
          const total = events.filter((e) => e.event_type === key).length;

          const thisWeek = events.filter(
            (e) =>
              e.event_type === key &&
              new Date(e.created_at) >= oneWeekAgo
          ).length;

          const lastWeek = events.filter(
            (e) =>
              e.event_type === key &&
              new Date(e.created_at) >= twoWeeksAgo &&
              new Date(e.created_at) < oneWeekAgo
          ).length;

          const trend =
            lastWeek === 0
              ? thisWeek > 0
                ? 100
                : 0
              : Math.round(((thisWeek - lastWeek) / lastWeek) * 100);

          return { label, value: total, trend };
        });

        setStats(results);

        // Content counts
        const { count: blogs } = await supabase
          .from("blogs")
          .select("*", { count: "exact", head: true });

        const { count: studies } = await supabase
          .from("case_studies")
          .select("*", { count: "exact", head: true });

        setBlogCount(blogs ?? 0);
        setCaseStudyCount(studies ?? 0);
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  return (
    <PageContainer>
      <WelcomeBanner>
        <h1>Welcome to your Dashboard</h1>
        <p>Here&apos;s what&apos;s happening with your portfolio today.</p>
      </WelcomeBanner>

      <StatsGrid>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <StatCard key={i}>
                <h3><SkeletonPulse style={{ width: "120px", height: "14px" }} /></h3>
                <SkeletonPulse />
                <SkeletonPulse style={{ width: "140px", height: "12px" }} />
              </StatCard>
            ))
          : stats.map((stat) => (
              <StatCard key={stat.label}>
                <h3>{stat.label}</h3>
                <div className="value">{formatNumber(stat.value)}</div>
                <div className={`trend ${trendClass(stat.trend)}`}>
                  {trendText(stat.trend)}
                </div>
              </StatCard>
            ))}
      </StatsGrid>

      <ContentOverview>
        <ContentCard>
          <div className="count">{loading ? <SkeletonPulse style={{ margin: "0 auto" }} /> : blogCount}</div>
          <h3>Blog Posts Published</h3>
        </ContentCard>
        <ContentCard>
          <div className="count">{loading ? <SkeletonPulse style={{ margin: "0 auto" }} /> : caseStudyCount}</div>
          <h3>Case Studies Published</h3>
        </ContentCard>
      </ContentOverview>
    </PageContainer>
  );
}
