import "styled-components";
import type { Size } from "./global";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      default: string;
    };
    colors: {
      main: string;
      secondary: string;
      info: string;
    };
    backgroundColor: {
      main: string;
      secondary: string;
    };
    padding: {
      sm: string;
      md: string;
      lg: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
