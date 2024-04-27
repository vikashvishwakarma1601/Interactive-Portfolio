import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-inline: auto;
  overflow: hidden;
  & > div {
    padding: 3px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
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
