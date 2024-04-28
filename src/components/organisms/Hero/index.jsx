import React from "react";
import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";
import Link from "../../atoms/Link";

import { HeroContainer } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <Avatar src="https://framerusercontent.com/images/hcjBHIZgezWmanhKD6EDO43p3c.png" />
      <h1>
        Driving Website Performance & Engagement <br />
        Experienced Frontend Engineer Specialising in React
      </h1>
      <Button variant="secondary" size="lg">
        <Link> Latest Shots</Link>
      </Button>
    </HeroContainer>
  );
};

export default Hero;
