import React from "react"
import css from "@emotion/css"
import { Link } from "gatsby"
import * as S from "@/Ui/Styles"
import { RelatedPostView, IRelatedPost } from "./RelatedPostView"

// -- types --
export interface IProps {
  posts: IRelatedPostSets
}

export interface IRelatedPostSets {
  global: IRelatedPosts
  series: IRelatedPosts
}

export interface IRelatedPosts {
  prev: IRelatedPost | null
  next: IRelatedPost | null
}

// -- impls --
export function RelatedPostsView({ posts: { global, series } }: IProps) {
  return (
    <nav css={kStyles.posts}>
      <h2>Related Posts</h2>
      <ul css={kStyles.links}>
        {global.next && <RelatedPostView hint="Next Post" post={global.next} />}
        {global.prev && (
          <RelatedPostView hint="Previous Post" post={global.prev} />
        )}
        {series.next && (
          <RelatedPostView hint="Next Post in Series" post={series.next} />
        )}
        {series.prev && (
          <RelatedPostView hint="Previous Post in Series" post={series.prev} />
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
