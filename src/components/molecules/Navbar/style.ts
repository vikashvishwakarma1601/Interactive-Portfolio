import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 25px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.backgroundColor.active};
  backdrop-filter: blur(18px) saturate(200%);
  -webkit-backdrop-filter: blur(18px) saturate(200%);
`;

export const NavContainer = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-inline: auto;
  list-style: none;
`;

export const NavWrapper = styled.ul<{ $flexDirection: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.$flexDirection || "$flexDirection"};
  align-items: center;
  margin-inline: auto;
  list-style: none;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.SourceSansProSemiBold};
  color: #ffffff;
  font-size: 13px;
  line-height: 1rem;
  padding: 0 1.2rem;
  background-color: ${(props) => props.theme.backgroundColor.active};
  border-radius: ${(props) => props.theme.borderRadius.main};
`;
