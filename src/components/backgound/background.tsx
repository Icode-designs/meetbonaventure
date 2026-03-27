import React from "react";
import { BackgroundArticle, BackgroundStyles, SkillsSection, SkillsContainer } from "./background.styles";
import SectionWrapper from "../shared/sectionWrapper";
import { SpanText, StyledTag } from "../shared/shared.styles";

const Background = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", 
    "React.js", "Next.js", "Supabase", "Firebase", 
    "CRUD", "System design", "React Testing libraries"
  ];
  
  const softSkills = [
    "Leadership", "Effective Communication", "Empathy", 
    "Consistency", "Logical Reasoning", "Problem Solving"
  ];

  return (
    <SectionWrapper variant="primary">
      <BackgroundStyles>
        <BackgroundArticle>
          <div>
            <h2>My Story</h2>
            <p>
              <SpanText>My journey</SpanText> into technology didn’t start with
              code—it <SpanText>started with curiosity</SpanText>. As a kid, I was
              fascinated by gadgets, always wondering how they worked and what
              made them possible. That curiosity took a defining turn when I
              watched the first Iron Man movie. It wasn’t just entertainment; it
              was a realization. For the first time, I saw how powerful an
              innovative mind could be, and how technology could turn imagination
              into reality.
            </p>
            <p>
              That moment stayed with me. In school, I became more deliberate,
              focusing on computer-related subjects and consistently excelling in
              them. But I quickly realized that the classroom alone wasn’t enough.
              I wanted to understand how technology was actually applied in the
              real world. So I sought out additional training, attending multiple
              learning centers to go beyond theory. It was during this time,
              around 2013, that I was introduced to web development.
            </p>
            <p>
              After graduating from secondary school in 2017, I made a conscious
              decision to take things further. In 2018, I enrolled in a one-on-one
              mentorship where I learned HTML, CSS, and the fundamentals of
              JavaScript. It was my first real step into building for the web.
              Shortly after, I gained admission into the{" "}
              <SpanText>
                Federal University of Technology Owerri (FUTO)
              </SpanText>
              , to study{" "}
              <SpanText>Electrical and Electronics Engineering</SpanText>
              , which required me to pause my development journey and focus on my
              academic path.
            </p>
            <p>
              But the interest never left. Years later, in my third year at
              university, I returned to coding, this time with a clearer sense of
              direction and purpose. What started as curiosity had evolved into
              commitment. Since then, writing code has become a daily practice,
              something I rarely go a day without.
            </p>
            <p>
              Today, I approach development with the same mindset that first
              inspired me: there are no limits to what can be built with the right
              blend of creativity, logic, and consistency.
            </p>
          </div>

          <SkillsSection>
            <div>
              <h3>Technical Stack</h3>
              <SkillsContainer>
                {technicalSkills.map((skill, index) => (
                  <StyledTag key={index}>{skill}</StyledTag>
                ))}
              </SkillsContainer>
            </div>
            
            <div>
              <h3>Core Qualities</h3>
              <SkillsContainer>
                {softSkills.map((skill, index) => (
                  <StyledTag key={index}>{skill}</StyledTag>
                ))}
              </SkillsContainer>
            </div>
          </SkillsSection>
        </BackgroundArticle>
      </BackgroundStyles>
    </SectionWrapper>
  );
};

export default Background;
