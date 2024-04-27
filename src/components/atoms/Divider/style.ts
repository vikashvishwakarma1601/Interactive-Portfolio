import styled from "styled-components";

interface DividerProps {
  $thickness: number;
}

export const Line = styled.div<DividerProps>`
  width: 100%;
  height: ${(props) => props?.$thickness || 1}px;
  background-color: #e6e5e4;
  margin-inline: auto;
`;
