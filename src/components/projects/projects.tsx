import { StyledSection } from "@/app/global.style";
import React from "react";
import {
  StyledProjectCard,
  StyledProjectContainer,
  StyledProjectsContents,
} from "./projects.styles";
import projects from "@/utils/projectData";
import Button from "../button/cutomButton";
import Link from "next/link";

const Projects = () => {
  return (
    <StyledSection $bgColor="transparent">
      <StyledProjectsContents>
        <h2>My Projects</h2>
        <StyledProjectContainer>
          {projects.map((project, index) => (
            <StyledProjectCard key={index} $index={index}>
              <iframe
                src={project.url}
                title={project.company}
                loading="lazy"
                scrolling="no"
              />
              <article>
                <div>
                  <h3>{project.company}</h3>
                  <p>Role: {project.role}</p>
                  <p>Location: {project.location}</p>
                  <p>Duration: {project.duration}</p>
                  <ul>
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button
                    as={Link}
                    href={project.url}
                    variant="filled"
                    text="View site"
                  />
                  <Button variant="outlined" text="About the project" />
                </div>
              </article>
            </StyledProjectCard>
          ))}
        </StyledProjectContainer>
      </StyledProjectsContents>
    </StyledSection>
  );
};

export default Projects;
