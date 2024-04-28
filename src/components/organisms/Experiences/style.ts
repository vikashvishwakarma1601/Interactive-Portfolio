import styled from "styled-components";

export const ExperiencesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-inline: auto;
  padding: 100px 60px;
  background-color: #f3f2f1;
`;

export const SubHeader = styled.h3`
  width: min(100%, 650px);
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

export const CardWrapper = styled.section`
  width: 80%;
  display: grid;
  justify-items: start;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.5rem;
  margin-top: 1rem;
`;
