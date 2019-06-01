import React from "react"
import {
  BlogPosts as BPS,
  BlogPost as BP,
  useBlogPosts
} from "@/Domain/BlogPosts"
import { Layout } from "@/Ui/Layout"

// -- impls --
export function ShowBlog() {
  // -- impls/model
  const model = useBlogPosts()

  // -- impls/view
  return (
    <Layout>
      <h1>Look at all these blogs.</h1>
      <section>
        {BPS.posts(model).map((post) => (
          <article key={BP.id(post)}>
            <p>{BP.title(post)}</p>
            <p>{BP.date(post)}</p>
            <p>{BP.excerpt(post)}</p>
          </article>
        ))}
      </section>
    </Layout>
  )
}
