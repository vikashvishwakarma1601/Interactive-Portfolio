import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > h1 {
    width: max(300px, 35%);
    font-family: Ottreco-display-medium;
    font-size: 56px;
    font-weight: 400;
    line-height: 64px;
    text-align: center;
    color: rgb(42, 42, 42);
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
