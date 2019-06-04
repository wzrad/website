import { graphql } from "gatsby"

// -- impls --
import { ShowBlogPosts } from "@/Scenes/ShowBlogPosts"
export default ShowBlogPosts

// -- impls/graphql
export const query = graphql`
  query IndexPageQuery {
    ...ShowBlogPostsQuery
  }
`
