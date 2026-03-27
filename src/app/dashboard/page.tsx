"use client";
import React from "react";
import styled from "styled-components";
import { PageContainer } from "./dashboard.styles";

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
    color: #4CAF50;
    display: flex;
    align-items: center;
    gap: 4px;
  }
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

export default function DashboardAnalytics() {
  return (
    <PageContainer>
      <WelcomeBanner>
        <h1>Welcome to your Dashboard</h1>
        <p>Here is what's happening with your portfolio today.</p>
      </WelcomeBanner>

      <StatsGrid>
        <StatCard>
          <h3>Total Profile Views</h3>
          <div className="value">1,248</div>
          <div className="trend">↑ 12% from last week</div>
        </StatCard>
        <StatCard>
          <h3>Case Study Clicks</h3>
          <div className="value">342</div>
          <div className="trend">↑ 8% from last week</div>
        </StatCard>
        <StatCard>
          <h3>Resume Downloads</h3>
          <div className="value">45</div>
          <div className="trend">↑ 2% from last week</div>
        </StatCard>
        <StatCard>
          <h3>Contact Form Submissions</h3>
          <div className="value">12</div>
          <div className="trend">↓ 1% from last week</div>
        </StatCard>
      </StatsGrid>

      <div style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <h3 style={{ marginBottom: "16px" }}>Detailed Analytics Activity</h3>
        <p style={{ color: "#a0a0a0" }}>Detailed charts and tracking data will appear here once connected to an analytics provider.</p>
      </div>
    </PageContainer>
  );
}
