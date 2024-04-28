import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 95%;
  padding: 20px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-family: "Ottreco-regular";
    font-size: 12px;
    color: ${(props) => props.theme.colors["info"]};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ListItem = styled.li`
  font-style: normal;
  font-family: "Ottreco-regular", sans-serif;

  & > span {
    font-family: sans-serif;
  }
`;
