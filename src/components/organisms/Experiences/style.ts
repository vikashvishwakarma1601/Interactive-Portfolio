import styled from "styled-components";

export const ExperiencesContainer = styled.section`
  width: max(300px, 80%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-inline: auto;
`;

export const SubHeader = styled.h3`
  width: min(100%, 650px);
  font-family: Ottreco-display-medium;
  font-size: 36px;
  font-weight: 400;
  line-height: 54px;
  color: rgb(0, 0, 0);
  margin-inline: auto;
  text-align: center;
  background-image: linear-gradient(
    97.0286deg,
    rgb(11, 11, 11) 0%,
    rgba(12, 12, 12, 0.55) 100%,
    rgba(12, 12, 12, 0.55) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
