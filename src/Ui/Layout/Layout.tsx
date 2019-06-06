import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { css, Global } from "@emotion/core"
import * as S from "@/Ui/Styles"
import { Link } from "gatsby"

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
        <header css={kStyles.header}>
          <h1>{isRoot ? title : <Link to="/">{title}</Link>}</h1>
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
