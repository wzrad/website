import React from "react"
import { Link } from "gatsby"
import css from "@emotion/css"
import { IBlogPost, BlogPost as BP } from "@/Domain/BlogPost"
import * as S from "@/Ui/Styles"

// -- types --
interface IProps {
  post: IBlogPost
  slug?: string | null
}

// -- impls --
export function BlogPostView({ post, slug }: IProps) {
  return (
    <article css={kStyles.post}>
      <h2 css={kStyles.title}>
        {slug == null ? (
          BP.title(post)
        ) : (
          <Link to={slug}>{BP.title(post)}</Link>
        )}
      </h2>
      <p
        css={kStyles.body}
        dangerouslySetInnerHTML={{ __html: BP.body(post) || "" }}
      />
      <p css={kStyles.date}>{BP.date(post)}</p>
    </article>
  )
}

// -- styles --
const kStyles = {
  post: css`
    max-width: 700px;
  `,
  title: css`
    margin-bottom: ${S.kSpacing4};
  `,
  body: css`
    margin-bottom: ${S.kSpacing4};

    p {
      margin-bottom: 10px;
    }
  `,
  date: css`
    color: ${S.kColorGray1};
  `
}
