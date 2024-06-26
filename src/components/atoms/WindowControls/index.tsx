import { Container, ControlButton } from "./style";
import FontIcon from "../FontIcon";
import Close from "../../../assets/icons/close.svg?react";
import Minimize from "../../../assets/icons/minimize.svg?react";
import FullScreen from "../../../assets/icons/fullscreen.svg?react";

const WindowControls = () => {
  return (
    <Container>
      <ControlButton className="active" $type="CLOSE">
        <FontIcon width={8} height={8} icon={Close} className="" />
      </ControlButton>
      <ControlButton $type="MINIMISE">
        <FontIcon width={8} height={8} icon={Minimize} />
      </ControlButton>
      <ControlButton $type="FULLSCREEN">
        <FontIcon width={8} height={8} icon={FullScreen} />
      </ControlButton>
    </Container>
  );
};

export default WindowControls;
