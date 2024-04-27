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

const PortFolio = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Hero />
      </MainContainer>
      <br />
      <br />
      <br />
      <Container>
        <Skills />
        <Experiences />
        <br />
        <br />
        <br />
        <FooterWrapper>
          <Contact />
          <Footer />
        </FooterWrapper>
      </Container>
    </div>
  );
};

export default PortFolio;
