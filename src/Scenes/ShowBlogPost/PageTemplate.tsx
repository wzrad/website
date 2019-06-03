import { graphql } from "gatsby"

// -- impls --
// -- impls/scene
export { ShowBlogPost as default } from "./ShowBlogPost"

// -- impls/graphql
export const query = graphql`
  query BlogPostPageQuery($slug: String!) {
    ...ShowBlogPostQuery
  }
`
