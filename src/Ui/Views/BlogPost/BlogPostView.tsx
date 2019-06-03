import React from "react"
import { IBlogPost, BlogPost as BP } from "@/Domain/BlogPost"

// -- types --
interface IProps {
  post: IBlogPost
}

// -- impls --
export function BlogPostView({ post }: IProps) {
  return (
    <article>
      <h2>{BP.title(post)}</h2>
      <p dangerouslySetInnerHTML={{ __html: BP.body(post) || "" }} />
      <p>{BP.date(post)}</p>
    </article>
  )
}
