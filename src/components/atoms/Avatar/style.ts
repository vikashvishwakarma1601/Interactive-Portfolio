import styled from "styled-components";

export const AvatarContainer = styled.div<{
  $hideBG: boolean;
  $borderRadius: number | string;
}>`
  width: 150px;
  height: 100%;
  border-radius: ${(props) =>
    typeof props.$borderRadius === "number"
      ? props.$borderRadius + "%"
      : props.$borderRadius};
  margin-inline: auto;
  overflow: hidden;
  & > div {
    width: 100%;
    height: 100%;
    padding: 3px;
    background-color: ${(props) => (props.$hideBG ? "transparent" : "#ffffff")};
    filter: drop-shadow(${(props) => props.theme.BOX_SHADOW_PRIMARY});
  }
`;
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  image-rendering: auto;
  border-width: 10px;
`;
