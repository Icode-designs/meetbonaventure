"use client";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../shared/sectionWrapper";
import {
  ProcessCard,
  ProcessGrid,
  ProcessHeader,
  ProcessStyles,
} from "./process.styles";

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const myProcess = [
    {
      title: "Discovery",
      description: `Understanding business goals,
        target audience, and technical
        requirements.`,
    },
    {
      title: "Design",
      description: `Creating wireframes,
        prototypes, and system
        architecture diagrams.`,
    },
    {
      title: "Build",
      description: `Agile development sprints with
        regular updates and feedback
        loops.`,
    },
    {
      title: "Launch",
      description: `Deployment, testing, final
        polish, and handover
        documentation.`,
    },
  ];

  return (
    <SectionWrapper id="process">
      <ProcessStyles>
        <ProcessHeader>
          <h2>My Process</h2>
        </ProcessHeader>
        <ProcessGrid>
          {myProcess.map((process, index) => (
            <ProcessCard
              key={index}
              className={index === activeIndex ? "active" : undefined}
            >
              <span>{index + 1}</span>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessStyles>
    </SectionWrapper>
  );
};

export default Process;
