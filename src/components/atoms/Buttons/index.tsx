import React from "react";
import { Container, ControlButton } from "./style";
import FontIcon from "../FontIcon";
import Close from "../../../assets/icons/close.svg?react";
import Minimize from "../../../assets/icons/minimize.svg?react";
import FullScreen from "../../../assets/icons/fullscreen.svg?react";
const WindowControls = () => {
  return (
    <Container>
      <ControlButton $type="CLOSE">
        <FontIcon width={10} height={10} icon={Close} />
      </ControlButton>
      <ControlButton $type="MINIMISE">
        <FontIcon width={10} height={10} icon={Minimize} />
      </ControlButton>
      <ControlButton $type="FULLSCREEN">
        <FontIcon width={10} height={10} icon={FullScreen} />
      </ControlButton>
    </Container>
  );
};

export default WindowControls;
