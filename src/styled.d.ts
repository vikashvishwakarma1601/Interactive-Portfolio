import "styled-components";
import type { Size } from "./global";

interface ColorNamespace {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  default: string;
}

type FontFamily = {
  SourceSansProBlack: "SourceSansProBlack";
  SourceSansProBlackIt: "SourceSansProBlackIt";
  SourceSansProBold: "SourceSansProBold";
  SourceSansProBoldIt: "SourceSansProBoldIt";
  SourceSansProExtraLight: "SourceSansProExtraLight";
  SourceSansProExtraLightIt: "SourceSansProExtraLightIt";
  SourceSansProIt: "SourceSansProIt";
  SourceSansProLight: "SourceSansProLight";
  SourceSansProLightIt: "SourceSansProLightIt";
  SourceSansProRegular: "SourceSansProRegular";
  SourceSansProSemiBold: "SourceSansProSemiBold";
  SourceSansProSemiBoldIt: "SourceSansProSemiBoldIt";
};

export default colors;

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      main: string;
      secondary: string;
    };
    borderColor: {
      main: string;
    };
    colors: ColorNamespace;
    controlButtonColor: {
      close: string;
      minimize: string;
      fullscreen: string;
    };
    backgroundColor: {
      [key: string]: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontFamily: FontFamily;
    BOX_SHADOW_PRIMARY: string;
    BOX_SHADOW_SECONDARY: string;
    // boxShadow: {
    //   primary: string;
    // };
  }
}
