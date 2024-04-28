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
import OttrecoDisplayMedium from "./assets/fonts/OttercoDisplay-Medium.otf";

import Monterey from "./assets/wallpapers/Monterey Graphic.jpg";

export default createGlobalStyle`

  :root {
      // --primary-color: #000000;
      // --secondary-color: #FFFFFF;
      // --accent-color: #D9D9D9;
      // --heading-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      --body-font: Ottreco, sans-serif;
      font-family: Ottreco; 
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
      // --color: #e1e1e1;
      // background-color: #f3f3f3;
      // background-image: linear-gradient(
      //     0deg,
      //     transparent 24%,
      //     var(--color) 25%,
      //     var(--color) 26%,
      //     transparent 27%,
      //     transparent 74%,
      //     var(--color) 75%,
      //     var(--color) 76%,
      //     transparent 77%,
      //     transparent
      //   ),
      //   linear-gradient(
      //     90deg,
      //     transparent 24%,
      //     var(--color) 25%,
      //     var(--color) 26%,
      //     transparent 27%,
      //     transparent 74%,
      //     var(--color) 75%,
      //     var(--color) 76%,
      //     transparent 77%,
      //     transparent
      //   );
      // background-size: 55px 55px;
      height:100vh;
      background-image:url(${Monterey});
    }

    h1, h2, h3, h4, h5{
      font-family: Ottreco-display-medium;
      font-weight: 400;
      color: rgb(42, 42, 42);
    }

    h1{
      font-size: 46px;
      line-height: 64px;
    }

    h2{
      font-size: 40px;
      line-height: 64px;
    }

    h3{
      font-size: 36px;
      line-height: 54px;
    }

    h3{
      font-size: 36px;
      line-height: 54px;
    }

    @font-face {
    font-family: "Ottreco-bold";
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
    font-family: "Ottreco-light";
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
    font-family: "Ottreco-medium";
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
    font-family: "Ottreco-regular";
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
  @font-face {
    font-family: "Ottreco-display-medium";
    font-weight: normal;
    font-style: thin-italic;
    font-display: swap;
    src: url(${OttrecoDisplayMedium});
    src: url(${OttrecoDisplayMedium}) format("embedded-opentype"),
      url(${OttrecoDisplayMedium}) format("otf");
    }
`;
