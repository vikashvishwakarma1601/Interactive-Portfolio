import { createGlobalStyle } from "styled-components";

import OttrecoBold from "./assets/fonts/Otterco-Bold.otf";
import OttrecoBoldItalic from "./assets/fonts/Otterco-BoldItalic.otf";
import OttrecoExtraBold from "./assets/fonts//Otterco-ExtraBold.otf";
import OttrecoExtraBoldItalic from "./assets/fonts/Otterco-ExtraBoldItalic.otf";
import OttrecoExtraLight from "./assets/fonts/Otterco-ExtraLight.otf";
import OttrecoExtraLightItalic from "./assets/fonts/Otterco-ExtraLightItalic.otf";
import OttrecoItalic from "./assets/fonts/Otterco-Italic.otf";
import OttrecoLight from "./assets/fonts/Otterco-Light.otf";
import OttrecoLightItalic from "./assets/fonts/Otterco-LightItalic.otf";
import OttrecoMedium from "./assets/fonts/Otterco-Medium.otf";
import OttrecoMediumItalic from "./assets/fonts/Otterco-MediumItalic.otf";
import OttrecoRegular from "./assets/fonts/Otterco-Regular.otf";
import OttrecoSemiBold from "./assets/fonts/Otterco-SemiBold.otf";
import OttrecoSemiBoldItalic from "./assets/fonts/Otterco-SemiBoldItalic.otf";
import OttrecoThin from "./assets/fonts/Otterco-Thin.otf";
import OttrecoThinItalic from "./assets/fonts/Otterco-ThinItalic.otf";

import FilmGrain from "./assets/images/film_grain.png";

export default createGlobalStyle`

  :root {
      --primary-color: #000000;
      --secondary-color: #FFFFFF;
      --accent-color: #D9D9D9;
      --heading-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      --body-font: Ottreco, sans-serif;
      font-family: Ottreco; 

      line-height: 1.5;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;

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

    body::after{
      content:'';
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:99;
      background-image:url(${FilmGrain})
    }

    @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: bold;
    font-display: swap;
    src: url(${OttrecoBold});
    src: url(${OttrecoBold}) format("embedded-opentype"),
      url(${OttrecoBold}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: bold-italic;
    font-display: swap;
    src: url(${OttrecoBoldItalic});
    src: url(${OttrecoBoldItalic}) format("embedded-opentype"),
      url(${OttrecoBoldItalic}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: extra-bold;
    font-display: swap;
    src: url(${OttrecoExtraBold});
    src: url(${OttrecoExtraBold}) format("embedded-opentype"),
      url(${OttrecoExtraBold}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: extra-bold-italic;
    font-display: swap;
    src: url(${OttrecoExtraBoldItalic});
    src: url(${OttrecoExtraBoldItalic}) format("embedded-opentype"),
      url(${OttrecoExtraBoldItalic}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: extra-light;
    font-display: swap;
    src: url(${OttrecoExtraLight});
    src: url(${OttrecoExtraLight}) format("embedded-opentype"),
      url(${OttrecoExtraLight}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: extra-light-italic;
    font-display: swap;
    src: url(${OttrecoExtraLightItalic});
    src: url(${OttrecoExtraLightItalic}) format("embedded-opentype"),
      url(${OttrecoExtraLightItalic}) format("otf");
    }
  
  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src: url(${OttrecoItalic});
    src: url(${OttrecoItalic}) format("embedded-opentype"),
      url(${OttrecoItalic}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: light;
    font-display: swap;
    src: url(${OttrecoLight});
    src: url(${OttrecoLight}) format("embedded-opentype"),
      url(${OttrecoLight}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: light-italic;
    font-display: swap;
    src: url(${OttrecoLightItalic});
    src: url(${OttrecoLightItalic}) format("embedded-opentype"),
      url(${OttrecoLightItalic}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: medium;
    font-display: swap;
    src: url(${OttrecoMedium});
    src: url(${OttrecoMedium}) format("embedded-opentype"),
      url(${OttrecoMedium}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: medium-italic;
    font-display: swap;
    src: url(${OttrecoMediumItalic});
    src: url(${OttrecoMediumItalic}) format("embedded-opentype"),
      url(${OttrecoMediumItalic}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: regular;
    font-display: swap;
    src: url(${OttrecoRegular});
    src: url(${OttrecoRegular}) format("embedded-opentype"),
      url(${OttrecoRegular}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: semi-bold;
    font-display: swap;
    src: url(${OttrecoSemiBold});
    src: url(${OttrecoSemiBold}) format("embedded-opentype"),
      url(${OttrecoSemiBold}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: semi-bold-italic;
    font-display: swap;
    src: url(${OttrecoSemiBoldItalic});
    src: url(${OttrecoSemiBoldItalic}) format("embedded-opentype"),
      url(${OttrecoSemiBoldItalic}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: thin;
    font-display: swap;
    src: url(${OttrecoThin});
    src: url(${OttrecoThin}) format("embedded-opentype"),
      url(${OttrecoThin}) format("otf");
    }

  @font-face {
    font-family: "Ottreco";
    font-weight: normal;
    font-style: thin-italic;
    font-display: swap;
    src: url(${OttrecoThinItalic});
    src: url(${OttrecoThinItalic}) format("embedded-opentype"),
      url(${OttrecoThinItalic}) format("otf");
    }
`;
