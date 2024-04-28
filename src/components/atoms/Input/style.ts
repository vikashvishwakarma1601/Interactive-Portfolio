import styled from "styled-components";

export const BasicInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 24px;
  border: none;
  outline: 0;
  box-sizing: border-box;
  background: transparent;
  caret-color: ${(props) => props.theme.colors.quaternary};
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }
  position: relative;
  caret-width: 2px;
  caret-shape: bar;
  div::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: caret-blink 1s infinite;
  }

  @keyframes caret-blink {
    50% {
      opacity: 0;
    }
  }
`;
