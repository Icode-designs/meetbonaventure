"use client";
import { HeroArticle, HeroIllustration, HeroStyles } from "./hero.styles";
import Lottie from "lottie-react";
import heroimg from "@/assets/heroimg.json";
import { LinkButton } from "../button/button";
import { BtnFlexContainer, SpanText } from "../shared/shared.styles";
import SectionWrapper from "../shared/sectionWrapper";
import useIncrementCount from "@/hooks/useIncrementCount";

const Hero = () => {
  const repository = 34;
  const clientProjects = 10;
  const hours = 6000;

  const repoCount = useIncrementCount(repository);
  const clientProjectCount = useIncrementCount(clientProjects);
  const hourCount = useIncrementCount(hours);

  return (
    <SectionWrapper>
      <HeroStyles>
        <HeroArticle>
          <h1>
            Engineering Digital Excellence for{" "}
            <SpanText>Global Agencies</SpanText>
          </h1>
          <p>
            Hi, my name is <SpanText> Bonaventure</SpanText>, i am a software
            engineer.{" "}
            <SpanText>I build high-performance web applications</SpanText> and
            bespoke digital experiences for leading agencies and
            forward-thinking international brands.
          </p>
          <BtnFlexContainer>
            <LinkButton href="/#contact" variant="primary">
              Get in Touch
            </LinkButton>
            <LinkButton href="/work" variant="secondary">
              View Work
            </LinkButton>
          </BtnFlexContainer>

          <BtnFlexContainer>
            <div>
              <h2>
                <SpanText>{repoCount}</SpanText>+
              </h2>
              <h3>Repositories</h3>
            </div>
            <div>
              <h2>
                <SpanText>{clientProjectCount}</SpanText>+
              </h2>
              <h3>client projects</h3>
            </div>
            <div>
              <h2>
                <SpanText>{hourCount}</SpanText>+
              </h2>
              <h3>hours of experience</h3>
            </div>
          </BtnFlexContainer>
        </HeroArticle>
        <HeroIllustration>
          <Lottie animationData={heroimg} loop autoplay />
        </HeroIllustration>
      </HeroStyles>
    </SectionWrapper>
  );
};

export default Hero;
