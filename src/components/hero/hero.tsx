"use client";
import React, { useEffect, useState } from "react";
import { HeroContent, StyledHero, StyledImage } from "./hero.styles";
import Button from "../button/cutomButton";

interface GithubProfile {
  bio: string;
  avatar_url: string;
  name: string;
}

const Hero = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/icode-designs")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  console.log(profile);

  if (!profile) return <p>Loading...</p>;
  return (
    <StyledHero>
      <HeroContent>
        <div>
          <article>
            <h1>i create tech solutions to real world problems</h1>
            <p>
              Hello i am {profile.name}, a website developer and {profile.bio}{" "}
              Contact me if you want to work together or just want to say hi. I
              am always open to new opportunities and collaborations.
            </p>
          </article>
          <div>
            <Button variant="filled" text="Let's get started" />
            <Button variant="outlined" text="see my work" />
          </div>
        </div>

        <div>
          <StyledImage
            src={profile.avatar_url}
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
      </HeroContent>
    </StyledHero>
  );
};

export default Hero;
