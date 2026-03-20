import React from "react";
import {
  HeroArticle,
  HeroIllustration,
  HeroStyles,
} from "../homeHero/homeHero.styles";
import { SpanText } from "../shared/shared.styles";
import heroImg from "@/assets/bonaventure.png";
import Image from "next/image";
import { AboutHeroImgBox } from "./aboutHero.styles";
import { LinkButton } from "../button/button";

const AboutHero = () => {
  return (
    <HeroStyles>
      <HeroArticle>
        <h1>
          Hi, my name is <SpanText> Bonaventure</SpanText>, I am a software
          engineer.{" "}
        </h1>
        <p>
          <SpanText>I build high-performance web applications</SpanText> and
          bespoke digital experiences for leading agencies and forward-thinking
          international brands. To do this i leverage a number of skills both
          technical and relational which i have picked up over the years.
        </p>
        <LinkButton href="/#contact" variant="primary">
          contact me
        </LinkButton>
      </HeroArticle>
      <AboutHeroImgBox>
        <Image
          src={heroImg.src}
          alt="image of bonaventure"
          width={400}
          height={500}
        />
      </AboutHeroImgBox>
    </HeroStyles>
  );
};

export default AboutHero;
