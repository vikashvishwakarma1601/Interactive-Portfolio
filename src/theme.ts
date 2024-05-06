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
    secondary: "#4F4553",
    tertiary: "#666666",
    quaternary: "#51b0d7",
    quinary: "#000000",
    default: "#eeeeee",
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
    inActive: "rgb(48 40 55 / 90%)",
    active: "rgba(17, 25, 40, 0.5)",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
  },
  fontFamily: {
    SourceSansProBlack: "SourceSansProBlack",
    SourceSansProBlackIt: "SourceSansProBlackIt",
    SourceSansProBold: "SourceSansProBold",
    SourceSansProBoldIt: "SourceSansProBoldIt",
    SourceSansProExtraLight: "SourceSansProExtraLight",
    SourceSansProExtraLightIt: "SourceSansProExtraLightIt",
    SourceSansProIt: "SourceSansProIt",
    SourceSansProLight: "SourceSansProLight",
    SourceSansProLightIt: "SourceSansProLightIt",
    SourceSansProRegular: "SourceSansProRegular",
    SourceSansProSemiBold: "SourceSansProSemiBold",
    SourceSansProSemiBoldIt: "SourceSansProSemiBoldIt",
  },
  BOX_SHADOW_PRIMARY: "#0000005e 0px 14px 30px, #00000045 0px 10px 25px",
  BOX_SHADOW_SECONDARY:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
};

export { theme };
