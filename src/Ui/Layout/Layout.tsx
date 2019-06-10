import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { css, Global } from "@emotion/core"
import * as S from "@/Ui/Styles"
import { Header } from "./Header"

// -- types --
interface IProps {
  isRoot?: boolean
  children: ReactNode
}

// -- impls --
export function Layout({ isRoot, children }: IProps) {
  // -- impls/locals
  const title = "Ty's Site"

  // -- impls/view
  return (
    <>
      <Global
        styles={css`
          ${S.kResets}
          ${S.kTheme}
        `}
      />
      <Helmet>
        <title>{title}</title>
        <link
          rel="preload"
          as="font"
          href={S.EczarMedium}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <main css={kStyles.main}>
        <Header title={title} isRoot={isRoot} />
        {children}
      </main>
    </>
  )
}

// -- styles --
const kStyles = {
  main: css`
    padding: ${S.kSpacing1};
  `
}
