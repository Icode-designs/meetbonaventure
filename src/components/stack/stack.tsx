"use client";
import React from "react";
import { MarqueeContainer, MarqueeContent, StackStyles } from "./stack.styles";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3, FaJs } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import SectionWrapper from "../shared/sectionWrapper";

const TechStack = () => {
  const techStack = [
    <FaReact key={"react"} />,
    <RiNextjsFill key={"nextjs"} />,
    <BiLogoTypescript key={"typescript"} />,
    <IoLogoHtml5 key={"html5"} />,
    <FaCss3 key={"css3"} />,
    <FaJs key={"javascript"} />,
    <SiStyledcomponents key={"styled-components"} />,
    <FaPython key={"python"} />,
    <DiDjango key={"django"} />,
    <FaReact key={"react"} />,
    <RiNextjsFill key={"nextjs"} />,
    <BiLogoTypescript key={"typescript"} />,
    <IoLogoHtml5 key={"html5"} />,
    <FaCss3 key={"css3"} />,
    <FaJs key={"javascript"} />,
    <SiStyledcomponents key={"styled-components"} />,
    <FaPython key={"python"} />,
    <DiDjango key={"django"} />,
  ];
  return (
    <SectionWrapper>
      <StackStyles>
        <div>
          <h2>
            Tech <span>Stack</span>
          </h2>
        </div>

        <MarqueeContainer>
          <MarqueeContent>
            {techStack.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </MarqueeContent>
          <MarqueeContent>
            {techStack.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </MarqueeContent>
        </MarqueeContainer>
      </StackStyles>
    </SectionWrapper>
  );
};

export default TechStack;
