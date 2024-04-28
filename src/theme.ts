import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: {
    main: ".3em",
    secondary: ".8em",
  },
  borderColor: {
    main: "#c8c8c861",
  },
  colors: {
    primary: "#b2b2b2",
    secondary: "#575757",
    tertiary: "#4ed4b3",
    quaternary: "#51b0d7",
    quinary: "#000000",
    default: "#ffffff",
  },
  controlButtonColor: {
    close: "#ff6254",
    minimize: "#ffc360",
    fullscreen: "#5caf4c",
  },
  hover: {
    main: "#4a75f6ab",
  },
  backgroundColor: {
    main: "#575757",
    secondary: "#000000",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
  },
  boxShadow: {
    primary: "#0000005e 0px 14px 30px, #00000045 0px 10px 25px",
  },
};

export { theme };
