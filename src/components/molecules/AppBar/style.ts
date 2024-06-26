import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: fit-content;
  height: 55px;
  padding: 8px;
  border: ${(props) => "1px solid" + props.theme.borderColor.main};
  border-radius: ${(props) => props.theme.borderRadius.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.backgroundColor.active};
  backdrop-filter: blur(18px) saturate(200%);
  -webkit-backdrop-filter: blur(18px) saturate(200%);

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
