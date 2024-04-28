import styled from "styled-components";

export const SpoltlighContainer = styled.div`
  width: 595px;
  height: 400px;
  box-sizing: border-box;
  border: ${(props) => "1px solid" + props.theme.borderColor.main};
  border-radius: ${(props) => props.theme.borderRadius.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  overflow: hidden;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  border-top: ${(props) => "1px solid" + props.theme.borderColor.main};
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.secondary};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.secondary};
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 6px;
    height: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li<{ $active: boolean }>`
  width: 100%;
  height: 30px;
  color: ${(props) => props.theme.colors.default};
  margin: 0.5rem 0;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.6;
    background-color: ${(props) => props.$active && props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.main};
  }

  & .item__label {
    width: 100%;
    height: 100%;
  }
`;

export const ItemLabel = styled.div`
  width: 100%;
  padding: 0 0.4rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(3px, -50%);
  z-index: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const GroupedItem = styled.li`
  width: 100%;
  color: ${(props) => props.theme.colors.default};
  position: relative;
  overflow: hidden;
`;

export const GroupedItemLabel = styled.h5`
  width: 100%;
  height: 25px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    margin-top: 6px;
    background-color: ${(props) => props.theme.borderColor.main};
  }
`;
