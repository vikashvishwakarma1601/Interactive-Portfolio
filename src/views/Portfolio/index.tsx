import React from "react";
import {
  Header,
  Hero,
  Experiences,
  Skills,
  Contact,
  Footer,
} from "../../components/organisms";
import { MainContainer, Container, FooterWrapper } from "./style";
import Projects from "../../components/organisms/Projects";

const PortFolio = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Hero />
      </MainContainer>
      <Skills />
      <Experiences />
      <Projects />
      {/* <Container></Container> */}
      <FooterWrapper>
        <Contact />
        <Footer />
      </FooterWrapper>
    </div>
  );
};

export default PortFolio;
