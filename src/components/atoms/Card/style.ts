import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const CardHeader = styled.div`
  font-family: Ottreco-regular;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: rgb(42, 42, 42);
  text-transform: capitalize;
`;

export const CardContent = styled.div`
  & > h4 {
    font-family: Ottreco-regular;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const CardFooter = styled.div`
  font-family: Ottreco-light;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: rgb(42, 42, 42);
  & > * {
    font-family: Ottreco-light;
  }
`;
