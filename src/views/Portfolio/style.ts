import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 90vh;
  background-color: #efeeed;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: #efeeed;
  //   position: relative;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  //   position: absolute;
  //   top: calc(400px - 100px);
  //   left: 0;
  background-color: ${(props) => props.theme.backgroundColor.main};
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
`;
