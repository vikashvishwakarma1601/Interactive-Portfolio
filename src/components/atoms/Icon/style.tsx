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
  sm: { width: "22px", height: "22px" },
  md: { width: "44px", height: "44px" },
  lg: { width: "66px", height: "66px" },
};

export const IconWrapper = styled.div<IconProps>`
  width: ${(props) => sizeDimensionsMap[props.$size]["width"]};
  height: ${(props) => sizeDimensionsMap[props.$size]["height"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  image-rendering: auto;
`;
