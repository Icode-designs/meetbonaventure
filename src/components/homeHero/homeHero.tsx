"use client";
import {
  HeroArticle,
  HeroBgBox,
  HeroIllustration,
  HeroSectionBox,
  HeroStyles,
} from "./homeHero.styles";
import { LinkButton } from "../button/button";
import { BtnFlexContainer, SpanText } from "../shared/shared.styles";
import useIncrementCount from "@/hooks/useIncrementCount";

const Hero = () => {
  const repository = 34;
  const clientProjects = 10;
  const hours = 6000;

  const repoCount = useIncrementCount(repository);
  const clientProjectCount = useIncrementCount(clientProjects);
  const hourCount = useIncrementCount(hours);

  return (
    <HeroSectionBox>
      <HeroBgBox />
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
              <p>Repositories</p>
            </div>
            <div>
              <h2>
                <SpanText>{clientProjectCount}</SpanText>+
              </h2>
              <p>client projects</p>
            </div>
            <div>
              <h2>
                <SpanText>{hourCount}</SpanText>+
              </h2>
              <p>hours of experience</p>
            </div>
          </BtnFlexContainer>
        </HeroArticle>
        <HeroIllustration></HeroIllustration>
      </HeroStyles>
    </HeroSectionBox>
  );
};

export default Hero;
