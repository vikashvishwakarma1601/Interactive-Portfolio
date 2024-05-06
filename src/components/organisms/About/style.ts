import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  height: 500px;
  padding: 0.5rem;
  border: ${(props) => "1px solid" + props.theme.borderColor.main};
  border-radius: ${(props) => props.theme.borderRadius.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  overflow: hidden;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-inline: auto;
`;

export const AvatarWrapper = styled.div`
  margin-top: 2rem;
`;

export const Head = styled.div`
  margin-top: 0.5rem;
  h1 {
    // font-family: ${(props) => props.theme.fontFamily.SourceSansProRegular};
    font-size: 22px;
    color: ${(props) => props.theme.colors.default};
    text-align: center;
  }
  h5 {
    font-family: ${(props) => props.theme.fontFamily.SourceSansProRegular};
    font-size: 11px;
    color: ${(props) => props.theme.colors.tertiary};
    text-align: center;
    margin-top: 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.default};
  gap: 1px;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    & > div:nth-child(odd) {
      text-align: right;
      font-family: ${(props) => props.theme.fontFamily.SourceSansProSemiBold};
      font-size: 12px;
    }

    & > div:nth-child(even) {
      text-align: left;
      color: ${(props) => props.theme.colors.primary};
      font-family: ${(props) => props.theme.fontFamily.SourceSansProRegular};
    }
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.tertiary};
`;
