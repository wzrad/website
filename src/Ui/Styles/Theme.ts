import css from "@emotion/css"
import { kColorRainbow, kColorPrimary } from "./Constants"
import { kFontRegular, kFontMediumSerif } from "./Fonts"

// -- resources --
import EczarMedium from "@R/Fonts/Eczar-Medium.woff2"

// -- impls --
// prettier-ignore
export const kTheme = css`
  /* -- impls/type */
  body {
    ${kFontRegular}
    font-size: 14px;
    line-height: 1.5;
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
  a {
    text-decoration-color: ${kColorPrimary};
  }

  a:hover {
    text-decoration-color: initial;
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
    font-family: Eczar;
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: local("Eczar Medium"), local("Eczar-Medium"), url(${EczarMedium}) format("woff2");
  }
`

export { EczarMedium }
