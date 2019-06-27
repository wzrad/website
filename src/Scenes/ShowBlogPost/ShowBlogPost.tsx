import React from "react"
import { graphql } from "gatsby"
import { Layout } from "@/Ui/Layout"
import { BlogPostView } from "@/Features/BlogPost"
import { RelatedPostLinksView } from "./RelatedPostLinksView"
import { ShowBlogPostQuery } from "./__generated__/ShowBlogPostQuery"

// -- types --
export interface IProps {
  data: ShowBlogPostQuery
  pageContext: IPageContext
}

export interface IPageContext {
  slug: string
  prev: IPageLink | null
  next: IPageLink | null
}

export interface IPageLink {
  slug: string
  title: string
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
      <RelatedPostLinksView prev={context.prev} next={context.next} />
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
