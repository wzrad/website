import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import * as S from "@/Ui/Styles"
import { Link } from "gatsby"
import { useSessionFlag } from "@/Core/Storage"

// -- types --
interface IProps {
  title: string
  isRoot?: boolean
}

// -- impls --
export function Header({ title, isRoot }: IProps) {
  // -- impls/model
  const hasSeenPeek = useSessionFlag("has-seen-peek")

  // -- impls/view
  return (
    <header css={kStyles.header}>
      <h1 css={kStyles.title}>
        {isRoot ? title : <Link to="/">{title}</Link>}
      </h1>
      <div css={kStyles.menu}>
        <input type="checkbox" id="menu" />
        <label css={kStyles.menuButton} htmlFor="menu">
          <a>⌘</a>
        </label>
        <nav
          css={[kStyles.menuNav, hasSeenPeek === false && kStyles.menuNavPeek]}
        >
          <Link to="/">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}

// -- styles --
const kStyles = (() => {
  const hidden = css`
    left: 0;
    opacity: 0;
    pointer-events: none;
  `

  const visible = css`
    left: ${S.kSpacing4};
    opacity: 1;
    pointer-events: auto;
  `

  return {
    header: css`
      display: flex;
      align-items: center;
      margin-bottom: ${S.kSpacing3};
      background-color: ${S.kColorWhite};
    `,
    title: css`
      ${S.kTextTitle};
      color: ${S.kColorPrimary};
    `,
    menu: css`
      position: relative;
      display: flex;
      align-items: center;
      margin-left: ${S.kSpacing4};

      input[id="menu"] {
        display: none;
      }

      input[id="menu"]:checked ~ label {
        color: ${S.kColorPrimary};
      }

      nav {
        ${hidden}
      }

      input[id="menu"]:checked ~ nav,
      &:hover > nav {
        ${visible}
        animation-iteration-count: 0;
      }
    `,
    menuButton: css`
      ${S.kTextSection};
      z-index: 1;
      user-select: none;

      > a {
        display: block;
      }
    `,
    menuNav: css`
      ${S.kTextNav}
      position: absolute;
      padding-left: ${S.kFontSize3};
      transition: opacity 0.2s, left 0.2s;

      > a + a {
        margin-left: ${S.kSpacing4};
      }
    `,
    menuNavPeek: css`
      animation: a-menu-nav-peek 1s 0.5s;

      @keyframes a-menu-nav-peek {
        33% {
          left: ${S.kSpacing4};
          opacity: 1;
        }
        66% {
          left: ${S.kSpacing4};
          opacity: 1;
        }
        100% {
          left: 0;
          opacity: 0;
        }
      }
    `
  }
})()
