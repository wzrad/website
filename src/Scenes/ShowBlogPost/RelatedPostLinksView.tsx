import React from "react"
import css from "@emotion/css"
import { Link } from "gatsby"
import * as S from "@/Ui/Styles"

// -- types --
interface IProps {
  prev: IRelatedPostLink | null
  next: IRelatedPostLink | null
}

interface IRelatedPostLink {
  slug: string
  title: string
}

// -- impls --
export function RelatedPostLinksView({ prev, next }: IProps) {
  return (
    <nav css={kStyles.posts}>
      <h2>Related Posts</h2>
      <ul css={kStyles.links}>
        {next && (
          <li css={kStyles.link}>
            <p>Next Post</p>
            <Link to={next.slug}>{next.title}</Link>
          </li>
        )}
        {prev && (
          <li css={kStyles.link}>
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
  posts: css`
    max-width: 700px;
    margin-top: ${S.kSpacing3};
  `,
  links: css`
    margin-top: ${S.kSpacing4};

    > * + * {
      margin-top: ${S.kSpacing4};
    }
  `,
  link: css`
    > p {
      ${S.kTextHint};
    }
  `
}
