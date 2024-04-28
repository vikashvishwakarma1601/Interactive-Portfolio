import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > h1 {
    width: max(300px, 70%);
    text-align: center;
    margin-inline: auto;
    background-image: linear-gradient(
      97.0286deg,
      rgb(11, 11, 11) 0%,
      rgba(12, 12, 12, 0.55) 100%,
      rgba(12, 12, 12, 0.55) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
