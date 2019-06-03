import { graphql } from "gatsby"

// -- impls --
export { ShowBlogPosts as default } from "@/Scenes/ShowBlogPosts"

// -- impls/graphql
export const query = graphql`
  query IndexPageQuery {
    ...ShowBlogPostsQuery
  }
`
