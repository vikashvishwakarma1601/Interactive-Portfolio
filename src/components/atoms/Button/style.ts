import styled, { DefaultTheme } from "styled-components";
import type { Size } from "../../../global";

interface ButtonProps {
  readonly $variant: "main" | "secondary";
  readonly $size: Size;
  readonly $borderRadius: Size | string | number | boolean;
  readonly theme: DefaultTheme;
}

function isSize(value: any): value is Size {
  return ["xs", "sm", "md", "lg", "xl"].includes(value);
}

const getBorderRadius = (props: ButtonProps) => {
  if (typeof props.$borderRadius === "boolean") {
    return;
  } else if (props.$borderRadius) {
    if (typeof props.$borderRadius === "number") {
      return `${props.$borderRadius}px`;
    } else if (!isSize(props.$variant)) {
      return props.$borderRadius;
    } else {
      const size = props.$borderRadius as Size;
      return props.theme.borderRadius[size];
    }
  } else {
    return props.theme.borderRadius["default"];
  }
};

export const BasicButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: ${(props) => {
    console.log({ props });
    return props.theme.padding[props.$size];
  }};
  font-size: ${(props) => props.theme.fontSize[props.$size]};
  border-radius: ${(props) => getBorderRadius(props)};
  color: ${(props) => props.theme.colors[props.$variant]};
  background-color: ${(props) => props.theme.backgroundColor[props.$variant]};
`;
