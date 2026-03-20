"use client";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../shared/sectionWrapper";
import {
  ProcessCard,
  ProcessGrid,
  ProcessHeader,
  ProcessStyles,
} from "../process/process.styles";
import { ValueCard, ValueGrid } from "./values.styles";

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const myValues = [
    {
      title: "Trust Worthy",
    },
    {
      title: "Results Driven",
    },
    {
      title: "Satisfaction Prioritized",
    },
  ];

  return (
    <SectionWrapper>
      <ProcessStyles>
        <ProcessHeader>
          <h2>My Values</h2>
        </ProcessHeader>
        <ValueGrid>
          {myValues.map((values, index) => (
            <ValueCard
              key={index}
              className={index === activeIndex ? "active" : undefined}
            >
              <span>{index + 1}</span>
              <h3>{values.title}</h3>
            </ValueCard>
          ))}
        </ValueGrid>
      </ProcessStyles>
    </SectionWrapper>
  );
};

export default Values;
