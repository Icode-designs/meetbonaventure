"use client";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../shared/sectionWrapper";
import {
  ExpertiseCard,
  ExpertiseGrid,
  ExpertiseHeaderBox,
  ExpertiseIcon,
  ExpertiseStyles,
} from "./expertise.styles";
import { GoLightBulb, GoRocket } from "react-icons/go";
import { MdOutlineTerminal } from "react-icons/md";

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 10000); // runs every 2s

    return () => clearInterval(interval);
  }, []);
  const expertise = [
    {
      icon: <GoLightBulb />,
      title: "Strategy & Product",
      description: `Technical feasibility audits, MVP roadmap
        planning, and system architecture design
        for scalable growth.`,
      deliverables: ["Technical Discovery", "Architecture Planning"],
    },
    {
      icon: <MdOutlineTerminal />,
      title: "Full-Stack Development",
      description: `End-to-end development using modern
        frameworks. I build secure, fast, and SEO-
        friendly applications.`,
      deliverables: ["React / Next.js", "Django / Firebase / Supabase"],
    },
    {
      icon: <GoRocket />,
      title: "Performance & DevOps",
      description: `Ensuring your application runs smoothly
        with CI/CD pipelines, cloud infrastructure
        setup, and optimization.`,
      deliverables: ["AWS / Vercel / Docker", "Performance Audits"],
    },
  ];
  return (
    <SectionWrapper variant="primary" id="expertise">
      <ExpertiseStyles>
        <ExpertiseHeaderBox>
          <article>
            <h2>core expertise</h2>
            <p>
              Comprehensive digital solutions from initial concept to deployment
              and scaling.
            </p>
          </article>
          <a href="/Bonaventure Osakwe - frontend engineer CV.pdf" download>
            Download Resume
          </a>
        </ExpertiseHeaderBox>
        <ExpertiseGrid>
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={index}
              className={index === activeIndex ? "active" : undefined}
            >
              <ExpertiseIcon>{item.icon}</ExpertiseIcon>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.deliverables.map((del, i) => (
                  <li key={i}>
                    <p>{del}</p>
                  </li>
                ))}
              </ul>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </ExpertiseStyles>
    </SectionWrapper>
  );
};

export default Expertise;
