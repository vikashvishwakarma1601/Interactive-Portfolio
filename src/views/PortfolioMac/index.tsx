import React from "react";

import DropDown from "../../components/atoms/DropDown";
import Navbar from "../../components/molecules/Navbar";
import SpotlightSearch from "../../components/molecules/SpotlightSearch";
import { Container } from "./style";
import WindowControls from "../../components/atoms/WindowControls";

const Mac = () => {
  return (
    <Container>
      <DropDown />
      <br />
      <WindowControls />
      <br />
      <Navbar />
      <br />
      <SpotlightSearch />
    </Container>
  );
};

export default Mac;
