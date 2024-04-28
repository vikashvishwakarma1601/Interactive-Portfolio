import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 95%;
  padding: 20px;
  margin-inline: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1000px;
  padding: 2px 2px 2px 14px;

  & > span {
    font-size: 12px;
    color: ${(props) => props.theme.colors["info"]};
    font-family: "Ottreco-regular";
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
