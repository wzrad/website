import React, { ReactNode } from "react"
import { css, Global } from "@emotion/core"
import { kResets, kTheme, kSpacing2 } from "@/Ui/Styles"

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
      <main css={kMain}>{children}</main>
    </>
  )
}

// -- styles --
const kMain = css`
  padding: ${kSpacing2};
`
