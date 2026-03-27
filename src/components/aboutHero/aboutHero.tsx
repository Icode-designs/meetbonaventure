import React from "react";
import {
  HeroArticle,
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
          Hi, my name is <SpanText> Bonaventure</SpanText>, and I am a Software
          Engineer.{" "}
        </h1>
        <p>
          <SpanText>I build high-performance web applications</SpanText> and
          bespoke digital experiences for leading agencies and forward-thinking
          brands worldwide. To achieve this, I leverage a versatile skill set—spanning both 
          cutting-edge technical architectures and strong interpersonal collaboration.
        </p>
        <LinkButton href="/#contact" variant="primary">
          Let's connect
        </LinkButton>
      </HeroArticle>
      <AboutHeroImgBox>
        <Image
          src={heroImg.src}
          alt="Professional portrait of Bonaventure"
          width={400}
          height={500}
          priority
        />
      </AboutHeroImgBox>
    </HeroStyles>
  );
};

export default AboutHero;
