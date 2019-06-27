import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@/Ui/Layout"
import { BlogPostView } from "@/Features/BlogPost"
import { RelatedPostsView, IRelatedPostSets } from "./RelatedPostsView"
import { ShowBlogPostQuery } from "./__generated__/ShowBlogPostQuery"

// -- types --
export interface IProps {
  data: ShowBlogPostQuery
  pageContext: IPageContext
}

export interface IPageContext {
  slug: string
  posts: IRelatedPostSets
}

// -- impls --
export function ShowBlogPost({ data, pageContext: context }: IProps) {
  // -- impls/view
  if (data.post == null) {
    return null
  }

  return (
    <Layout>
      <BlogPostView post={data.post} />
      <RelatedPostsView posts={context.posts} />
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
