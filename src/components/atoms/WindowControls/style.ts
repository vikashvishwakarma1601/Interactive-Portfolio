import styled, { DefaultTheme } from "styled-components";

type ControlType = "CLOSE" | "MINIMISE" | "FULLSCREEN";

interface ControlButtonProps {
  readonly $type: ControlType;
  readonly theme: DefaultTheme;
}

export const Container = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  & > span {
    position: absolute;
    visibility: hidden;
  }

  &.active:hover > span {
    visibility: visible;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.tertiary};
    opacity: 0.8;
  }

  &.active:hover::before {
    background-color: ${(props) => getBgColor(props)};
  }

  &:hover:not(.active)::before {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
