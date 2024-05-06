import styled from "styled-components";

interface ContainerProps {
  readonly $width: string | number;
  readonly $height: string | number;
  readonly $isFocused: string;
}

const getComputatedVal = (val: string | number) => {
  if (typeof val === "string" && val.slice(-2) === "px") {
    return val;
  } else if (typeof val === "number") {
    return `${val}px`;
  }
  return val;
};

export const Container = styled.div<ContainerProps>`
  width: ${(props) => getComputatedVal(props.$width)};
  height: ${(props) => getComputatedVal(props.$height)};
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${(props) =>
    props.$isFocused
      ? props.theme.BOX_SHADOW_SECONDARY
      : props.theme.BOX_SHADOW_PRIMARY};

  & > div:first-child {
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.borderColor.main};

    backdrop-filter: blur(18px) saturate(200%);
    -webkit-backdrop-filter: blur(18px) saturate(200%);
    background-color: ${(props) =>
      props.theme.backgroundColor[props.$isFocused]};
    border-radius: 12px;
  }
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
