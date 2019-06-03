import React, { ReactNode } from "react"
import { css, Global } from "@emotion/core"
import { kResets, kTheme, kSpacing2, kColorPrimary } from "@/Ui/Styles"

// -- types --
interface IProps {
  children: ReactNode
}

// -- impls --
export function Layout({ children }: IProps) {
  return (
    <>
      <Global
        styles={css`
          ${kResets}
          ${kTheme}
        `}
      />
      <main css={kMain}>
        <h1 css={kTitle}>Ty's site</h1>
        {children}
      </main>
    </>
  )
}

// -- styles --
const kMain = css`
  padding: ${kSpacing2};
`

const kTitle = css`
  color: ${kColorPrimary};
`
