import React from "react"
import css from "@emotion/css"
import { Link } from "gatsby"
import * as S from "@/Ui/Styles"

// -- types --
export interface IProps {
  hint: string
  post: IRelatedPost
}

export interface IRelatedPost {
  slug: string
  title: string
}

// -- impls --
export function RelatedPostView({ hint: title, post }: IProps) {
  return (
    <li css={kStyles.link}>
      <p>{title}</p>
      <Link to={post.slug}>{post.title}</Link>
    </li>
  )
}

// -- styles --
export const kStyles = {
  link: css`
    > p {
      ${S.kTextHint};
    }
  `
}
