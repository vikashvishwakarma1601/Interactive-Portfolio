import React from "react";
import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";
import Link from "../../atoms/Link";

import { HeroContainer } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <Avatar src="https://framerusercontent.com/images/hcjBHIZgezWmanhKD6EDO43p3c.png" />
      <h1>Building digital products, brands, and experience.</h1>
      <Button variant="secondary" size="md">
        <Link> Latest Shots</Link>
      </Button>
    </HeroContainer>
  );
};

export default Hero;
