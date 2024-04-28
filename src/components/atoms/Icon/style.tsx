import styled, { DefaultTheme } from "styled-components";
import { Size } from "../../../global";

interface IconProps {
  readonly $size: Size;
  readonly theme: DefaultTheme;
}

interface SizeDimensions {
  width: string;
  height: string;
}

const sizeDimensionsMap: Record<Size, SizeDimensions> = {
  xs: { width: "13px", height: "13px" },
  sm: { width: "20px", height: "20px" },
  md: { width: "30px", height: "30px" },
  lg: { width: "40px", height: "40px" },
};

export const IconWrapper = styled.div<IconProps>`
  width: ${(props) => sizeDimensionsMap[props.$size]["width"]};
  height: ${(props) => sizeDimensionsMap[props.$size]["height"]};
  border-radius: ${(props) => props.theme.borderRadius.main};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  svg {
    width: ${(props) => sizeDimensionsMap[props.$size]["width"]};
    height: ${(props) => sizeDimensionsMap[props.$size]["height"]};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  image-rendering: auto;
`;
