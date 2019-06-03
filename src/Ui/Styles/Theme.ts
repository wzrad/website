import css from "@emotion/css"
import { kFontRegular, kFontMediumSerif } from "./Fonts"

// -- resources --
import EczarMedium from "@R/Fonts/Eczar-Medium.woff2"
import OpenSansRegular from "@R/Fonts/OpenSans-Regular.woff2"
import { kColorRainbow } from "./Constants"

// -- impls --
// prettier-ignore
export const kTheme = css`
  /* -- impls/type */
  body {
    ${kFontRegular}
    font-size: 14px;
    line-height: 1.3;
  }

  h1 {
    ${kFontMediumSerif};
    font-size: 42px;
    line-height: 1;
  }

  h2 {
    ${kFontMediumSerif};
    font-size: 32px;
    line-height: 1;
  }

  /* -- impls/links */
  a:hover {
    animation: a-rainbow 2.0s infinite forwards;
  }

  @keyframes a-rainbow {
    ${kColorRainbow.reduce((steps, color, i, colors) => {
      return steps + `${100.0 / colors.length * i}% { color: ${color}; }`
    }, "")}

    100% { color: ${kColorRainbow[0]}; }
  }

  /* -- impls/fonts */
  @font-face {
    ${kFontMediumSerif}
    font-style: normal;
    font-display: swap;
    src: local("Eczar Medium"), local("Eczar-Medium"), url(${EczarMedium}) format("woff2");
  }

  @font-face {
    ${kFontRegular}
    font-style: normal;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"), url(${OpenSansRegular}) format("woff2");
  }
`
