import styled, { DefaultTheme } from "styled-components";

type ControlType = "CLOSE" | "MINIMISE" | "FULLSCREEN";

interface ControlButtonProps {
  readonly $type: ControlType;
  readonly theme: DefaultTheme;
}

export const Container = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const getBgColor = (props: ControlButtonProps) => {
  switch (props.$type) {
    case "CLOSE":
      return props.theme.controlButtonColor.close;
    case "MINIMISE":
      return props.theme.controlButtonColor.minimize;
    case "FULLSCREEN":
      return props.theme.controlButtonColor.fullscreen;
  }
};

export const ControlButton = styled.span<ControlButtonProps>`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  & > span {
    position: absolute;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    // background-color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => getBgColor(props)};
    opacity: 0.8;
  }
`;
