import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@/Ui/Layout"
import { BlogPostView } from "@/Ui/Views/BlogPost"
import { ShowBlogPostQuery } from "./__generated__/ShowBlogPostQuery"

// -- types --
interface IProps {
  data: ShowBlogPostQuery
}

// -- impls --
export function ShowBlogPost({ data }: IProps) {
  // -- impls/view
  if (data.post == null) {
    return null
  }

  return (
    <Layout>
      <BlogPostView post={data.post} />
    </Layout>
  )
}

// -- impls/graphql
export const _ = graphql`
  fragment ShowBlogPostQuery on Query {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...BlogPost
    }
  }
`
