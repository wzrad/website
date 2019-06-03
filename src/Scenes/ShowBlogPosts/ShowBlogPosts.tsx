import React from "react"
import { graphql } from "gatsby"
import { BlogPost as BP } from "@/Domain/BlogPost"
import { Layout } from "@/Ui/Layout"
import { BlogPostView } from "@/Ui/Views/BlogPost"
import { ShowBlogPostsQuery } from "./__generated__/ShowBlogPostsQuery"

// -- types --
interface IProps {
  data: ShowBlogPostsQuery
}

// -- impls --
export function ShowBlogPosts({ data }: IProps) {
  // -- impls/view
  if (data.posts == null) {
    return null
  }

  return (
    <Layout>
      <section>
        {data.posts.nodes.map((post) => (
          <BlogPostView key={BP.id(post)} post={post} />
        ))}
      </section>
    </Layout>
  )
}

// -- impls/graphql
export const _ = graphql`
  fragment ShowBlogPostsQuery on Query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        ...BlogPost
      }
    }
  }
`
