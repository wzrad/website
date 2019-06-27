import React from "react"
import css from "@emotion/css"
import { Link } from "gatsby"
import * as S from "@/Ui/Styles"

// -- types --
interface IProps {
  prev: IBlogPostLink | null
  next: IBlogPostLink | null
}

interface IBlogPostLink {
  slug: string
  title: string
}

// -- impls --
export function BlogPostLinksView({ prev, next }: IProps) {
  return (
    <nav css={kStyles.links}>
      <h2>Related Posts</h2>
      <ul>
        {next && (
          <li>
            <p>Next Post</p>
            <Link to={next.slug}>{next.title}</Link>
          </li>
        )}
        {prev && (
          <li>
            <p>Previous Post</p>
            <Link to={prev.slug}>{prev.title}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

// -- styles --
export const kStyles = {
  links: css`
    max-width: 700px;
    margin-top: ${S.kSpacing3};
  `
}
