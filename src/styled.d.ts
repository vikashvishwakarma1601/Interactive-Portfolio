import "styled-components";
import type { Size } from "./global";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      default: string;
    };
    colors: {
      main: string;
      secondary: string;
    };
    backgroundColor: {
      main: string;
      secondary: string;
    };
    padding: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
