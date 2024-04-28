import { createGlobalStyle } from "styled-components";

import SourceSansProBlack from "./assets/fonts/mac/SourceSansPro-Black.otf";
import SourceSansProBlackIt from "./assets/fonts/mac/SourceSansPro-BlackIt.otf";
import SourceSansProBold from "./assets/fonts/mac/SourceSansPro-Bold.otf";
import SourceSansProBoldIt from "./assets/fonts/mac/SourceSansPro-BoldIt.otf";
import SourceSansProExtraLight from "./assets/fonts/mac/SourceSansPro-ExtraLight.otf";
import SourceSansProExtraLightIt from "./assets/fonts/mac/SourceSansPro-ExtraLightIt.otf";
import SourceSansProIt from "./assets/fonts/mac/SourceSansPro-It.otf";
import SourceSansProLight from "./assets/fonts/mac/SourceSansPro-Light.otf";
import SourceSansProLightIt from "./assets/fonts/mac/SourceSansPro-LightIt.otf";
import SourceSansProRegular from "./assets/fonts/mac/SourceSansPro-Regular.otf";
import SourceSansProSemiBold from "./assets/fonts/mac/SourceSansPro-Semibold.otf";
import SourceSansProSemiBoldIt from "./assets/fonts/mac/SourceSansPro-SemiboldIt.otf";

import Monterey from "./assets/wallpapers/Monterey Graphic.jpg";

export default createGlobalStyle`

  :root {
      font-family: SourceSansProRegular; 
      color-scheme: light dark;
      color: rgb(55, 55, 55);
      background-color: #ffffff;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{
      height:100vh;
      background-image:url(${Monterey});
    }

    @font-face {
    font-family: "SourceSansProBlack";
    font-weight: normal;
    font-style: bold;
    font-display: swap;
    src: url(${SourceSansProBlack});
    src: url(${SourceSansProBlack}) format("embedded-opentype"),
      url(${SourceSansProBlack}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProBlackIt";
    font-weight: normal;
    font-style: bold-italic;
    font-display: swap;
    src: url(${SourceSansProBlackIt});
    src: url(${SourceSansProBlackIt}) format("embedded-opentype"),
      url(${SourceSansProBlackIt}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProBold";
    font-weight: normal;
    font-style: extra-bold;
    font-display: swap;
    src: url(${SourceSansProBold});
    src: url(${SourceSansProBold}) format("embedded-opentype"),
      url(${SourceSansProBold}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProBoldIt";
    font-weight: normal;
    font-style: extra-bold-italic;
    font-display: swap;
    src: url(${SourceSansProBoldIt});
    src: url(${SourceSansProBoldIt}) format("embedded-opentype"),
      url(${SourceSansProBoldIt}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProExtraLight";
    font-weight: normal;
    font-style: extra-light;
    font-display: swap;
    src: url(${SourceSansProExtraLight});
    src: url(${SourceSansProExtraLight}) format("embedded-opentype"),
      url(${SourceSansProExtraLight}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProExtraLightIt";
    font-weight: normal;
    font-style: extra-light-italic;
    font-display: swap;
    src: url(${SourceSansProExtraLightIt});
    src: url(${SourceSansProExtraLightIt}) format("embedded-opentype"),
      url(${SourceSansProExtraLightIt}) format("otf");
    }
  
  @font-face {
    font-family: "SourceSansProIt";
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src: url(${SourceSansProIt});
    src: url(${SourceSansProIt}) format("embedded-opentype"),
      url(${SourceSansProIt}) format("otf");
    }

  @font-face {
    font-family: SourceSansProLight";
    font-weight: normal;
    font-style: light;
    font-display: swap;
    src: url(${SourceSansProLight});
    src: url(${SourceSansProLight}) format("embedded-opentype"),
      url(${SourceSansProLight}) format("otf");
    }

  @font-face {
    font-family: "SourceSansProLightIt";
    font-weight: normal;
    font-style: light-italic;
    font-display: swap;
    src: url(${SourceSansProLightIt});
    src: url(${SourceSansProLightIt}) format("embedded-opentype"),
      url(${SourceSansProLightIt}) format("otf");
    }

  @font-face {
    font-family: "SourceSansProRegular";
    font-weight: normal;
    font-style: medium;
    font-display: swap;
    src: url(${SourceSansProRegular});
    src: url(${SourceSansProRegular}) format("embedded-opentype"),
      url(${SourceSansProRegular}) format("otf");
    }

  @font-face {
    font-family: "SourceSansProSemiBold";
    font-weight: normal;
    font-style: medium-italic;
    font-display: swap;
    src: url(${SourceSansProSemiBold});
    src: url(${SourceSansProSemiBold}) format("embedded-opentype"),
      url(${SourceSansProSemiBold}) format("otf");
    }

  @font-face {
    font-family: "SourceSansProSemiBoldIt";
    font-weight: normal;
    font-style: regular;
    font-display: swap;
    src: url(${SourceSansProSemiBoldIt});
    src: url(${SourceSansProSemiBoldIt}) format("embedded-opentype"),
      url(${SourceSansProSemiBoldIt}) format("otf");
    }
`;
