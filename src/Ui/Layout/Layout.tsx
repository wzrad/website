import React, { ReactNode } from "react"
import { css, Global } from "@emotion/core"
import * as S from "@/Ui/Styles"

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
          ${S.kResets}
          ${S.kTheme}
        `}
      />
      <main css={kStyles.main}>
        <header css={kStyles.header}>
          <h1>Ty's site</h1>
        </header>
        {children}
      </main>
    </>
  )
}

// -- styles --
const kStyles = {
  main: css`
    padding: ${S.kSpacing1};
  `,
  header: css`
    color: ${S.kColorPrimary};
    margin-bottom: ${S.kSpacing3};
  `
}
