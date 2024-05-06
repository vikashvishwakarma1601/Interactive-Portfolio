import React from "react";
import Icon from "../../atoms/Icon";
import { NavbarContainer } from "./style";

import Setting from "../../../assets/icons/setting.svg?react";

const AppBar = () => {
  return (
    <NavbarContainer>
      <Icon src={Setting} size="lg" />
      <Icon src={Setting} size="lg" />
      <Icon src={Setting} size="lg" />
      <Icon src={Setting} size="lg" />
      <Icon src={Setting} size="lg" />
    </NavbarContainer>
  );
};

export default AppBar;
