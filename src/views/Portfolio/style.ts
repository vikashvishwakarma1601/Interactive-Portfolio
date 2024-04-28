import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 95vh;
  background-color: #efeeed;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${(props) => props.theme.backgroundColor.main};
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
