import React from "react"
import { graphql } from "gatsby"
import css from "@emotion/css"
import { Layout } from "@/Ui/Layout"
import * as S from "@/Ui/Styles"
import { BlogPostView } from "@/Features/BlogPost"
import {
  ShowBlogPostsQuery,
  ShowBlogPostsQuery_posts_nodes
} from "./__generated__/ShowBlogPostsQuery"

// -- types --
type IBlogPost = ShowBlogPostsQuery_posts_nodes

interface IProps {
  data: ShowBlogPostsQuery
}

// -- impls --
export function ShowBlogPosts({ data }: IProps) {
  // -- impls/model
  function getKey(post: IBlogPost) {
    return post.id
  }

  function getSlug(post: IBlogPost) {
    return post.fields && post.fields.slug
  }

  // -- impls/view
  if (data.posts == null) {
    return null
  }

  return (
    <Layout isRoot>
      <section css={kStyles.posts}>
        {data.posts.nodes.map((post) => (
          <BlogPostView key={getKey(post)} post={post} slug={getSlug(post)} />
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

// -- styles --
const kStyles = {
  posts: css`
    article + article {
      margin-top: ${S.kSpacing2};
    }
  `
}
