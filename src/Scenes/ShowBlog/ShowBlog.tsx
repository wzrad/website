import React from "react"
import { css } from "@emotion/core"
import {
  BlogPosts as BPS,
  BlogPost as BP,
  useBlogPosts
} from "@/Domain/BlogPosts"

// -- impls --
export function ShowBlog() {
  // -- impls/model
  const model = useBlogPosts()

  // -- impls/view
  return (
    <main>
      <h1 css={title}>Look at all these blogs.</h1>
      <section>
        {BPS.getPosts(model).map((post) => (
          <article>
            <p>{BP.getTitle(post)}</p>
            <p>{BP.getDate(post)}</p>
            <p>{BP.getExcerpt(post)}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

// -- styles --
const title = css`
  color: gray;
`
