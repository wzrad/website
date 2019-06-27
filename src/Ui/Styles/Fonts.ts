import { css } from "@emotion/core"

// -- impls --
// -- impls/sizes
export const kFontSize1 = "42px"
export const kFontSize2 = "32px"
export const kFontSize3 = "24px"
export const kFontSize4 = "16px"
export const kFontSize5 = "14px"
export const kFontSize6 = "12px"

// -- impls/fonts
export const kFontRegular = css`
  font-family: system-ui, sans-serif;
  font-weight: 400;
`

export const kFontRegularItalic = css`
  font-family: system-ui, sans-serif;
  font-weight: 400;
  font-style: italic;
`

export const kFontMediumSerif = css`
  font-family: Eczar, Georgia, serif;
  font-weight: 500;
`

// -- impls/text
export const kTextTitle = css`
  ${kFontMediumSerif};
  font-size: ${kFontSize1};
  line-height: 1;
`

export const kTextArticle = css`
  ${kFontMediumSerif};
  font-size: ${kFontSize2};
  line-height: 1;
`

export const kTextSection = css`
  ${kFontMediumSerif};
  font-size: ${kFontSize3};
  line-height: 1;
`

export const kTextNav = css`
  ${kFontRegular};
  font-size: ${kFontSize4};
  line-height: 1;
`

export const kTextBody = css`
  ${kFontRegular};
  font-size: ${kFontSize5};
  line-height: 1.5;
`

export const kTextHint = css`
  ${kFontRegular};
  font-size: ${kFontSize6};
  line-height: 1;
`
