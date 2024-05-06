import styled from "styled-components";

interface IconProps {
  readonly $invert: boolean;
  readonly $width?: string | number;
  readonly $height?: string | number;
}

const getCssValue = (value: string | number | undefined) => {
  if (!value) {
    return "100%";
  } else if (typeof value === "string") {
    return value;
  }
  return `${value}px`;
};

export const IconContainer = styled.span<IconProps>(
  ({ $invert, $width, $height }) => {
    return {
      width: getCssValue($width),
      height: getCssValue($height),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }
);
