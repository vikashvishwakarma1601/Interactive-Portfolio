import styled from "styled-components";

export const BasicLink = styled.a`
  font-family: Ottreco-regular;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5rem;
  color: rgb(55, 55, 55);
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;
