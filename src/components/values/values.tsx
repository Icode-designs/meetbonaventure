"use client";
import React from "react";
import SectionWrapper from "../shared/sectionWrapper";
import {
  ProcessHeader,
  ProcessStyles,
} from "../process/process.styles";
import { ValueCard, ValueGrid } from "./values.styles";

const Values = () => {
  const myValues = [
    {
      title: "Trustworthy",
      description: "Building reliable relationships based on transparency and consistent accountability.",
    },
    {
      title: "Results Driven",
      description: "Focused on delivering tangible, high-performance outcomes that solve real problems.",
    },
    {
      title: "Satisfaction Prioritized",
      description: "Dedicated to ensuring every project not only meets but exceeds user expectations.",
    },
  ];

  return (
    <SectionWrapper>
      <ProcessStyles>
        <ProcessHeader>
          <h2>My Values</h2>
        </ProcessHeader>
        <ValueGrid>
          {myValues.map((value, index) => (
            <ValueCard key={index} className="value-card">
              <span>{`0${index + 1}`}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValueGrid>
      </ProcessStyles>
    </SectionWrapper>
  );
};

export default Values;
