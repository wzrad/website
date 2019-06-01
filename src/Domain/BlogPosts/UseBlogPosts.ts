import { useStaticQuery, graphql } from "gatsby"

// -- impls --
export function useBlogPosts() {
  return useStaticQuery(graphql`
    query UseBlogPostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt
          frontmatter {
            title
            date
          }
        }
        totalCount
      }
    }
  `)
}
