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
      main: string;
      secondary: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    boxShadow: {
      primary: string;
    };
  }
}
