import styled, { DefaultTheme } from "styled-components";

const getListStyle = (theme: DefaultTheme) => ({
  padding: "4px 6px",
  color: theme.colors.default,
  fontSize: theme.fontSize.sm,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.hover.main,
    borderRadius: theme.borderRadius.main,
  },
});

export const Container = styled.div`
  width: 200px;
  min-width: 200px;
  color: ${(props) => props.theme.colors.default};
  padding: 4px 4px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: ${(props) => "1px solid" + props.theme.borderColor.main};
    border-radius: ${(props) => props.theme.borderRadius.main};
    backdrop-filter: blur(18px) saturate(200%);
    -webkit-backdrop-filter: blur(18px) saturate(200%);
    background-color: ${(props) => props.theme.backgroundColor.inActive};

    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.98em 0.98em, 1.3em 100%;
    z-index: 0;
  }
`;

export const Items = styled.ul(() => {
  return {
    padding: 0,
    margin: 0,
    listStyle: "none",
    position: "relative",
  };
});

export const Item = styled.li((props) => {
  return getListStyle(props.theme);
});

export const NestedItems = styled.li((props) => {
  return {
    ...getListStyle(props.theme),
    position: "relative",
    "&:hover > .nested__item__container": {
      display: "flex",
    },
  };
});

export const NestedLabel = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  };
});

export const NestedContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
`;

export const Icon = styled.div(() => {
  return {
    width: "10px",
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center",
    },
  };
});
