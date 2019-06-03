import React from "react"
import { IBlogPost, BlogPost as BP } from "@/Domain/BlogPost"
import { Link } from "gatsby"

// -- types --
interface IProps {
  post: IBlogPost
  slug?: string | null
}

// -- impls --
export function BlogPostView({ post, slug }: IProps) {
  return (
    <article>
      <h2>
        {slug == null ? (
          BP.title(post)
        ) : (
          <Link to={slug}>{BP.title(post)}</Link>
        )}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: BP.body(post) || "" }} />
      <p>{BP.date(post)}</p>
    </article>
  )
}
