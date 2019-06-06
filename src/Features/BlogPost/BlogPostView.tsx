import React from "react"
import { Link } from "gatsby"
import css from "@emotion/css"
import * as S from "@/Ui/Styles"
import * as BP from "./BlogPost"

// -- types --
interface IProps {
  post: BP.IBlogPost
  slug?: string | null
}

// -- impls --
export function BlogPostView({ post, slug }: IProps) {
  return (
    <article css={kStyles.post}>
      <h1>
        {slug == null ? (
          BP.title(post)
        ) : (
          <Link to={slug}>{BP.title(post)}</Link>
        )}
      </h1>
      <div
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

    h1 {
      font-size: 32px;
      margin-bottom: ${S.kSpacing4};
    }

    p {
      margin-bottom: ${S.kSpacing4};
    }

    em {
      ${S.kFontRegularItalic}
    }

    blockquote {
      padding-left: ${S.kSpacing4};
      border-left: 2px solid ${S.kColorPrimary};
    }

    aside {
      padding: ${S.kSpacing4};
      background-color: ${S.kColorGray3};

      h6 {
        color: ${S.kColorGray1};
      }

      p {
        margin-bottom: 0;
      }
    }
  `,
  body: css`
    margin-bottom: ${S.kSpacing4};
  `,
  date: css`
    color: ${S.kColorGray2};
  `
}
