import { UseBlogPostsQuery } from "./__generated__/UseBlogPostsQuery"
import { IBlogPost } from "./BlogPost"

// -- types --
export interface IBlogPosts extends UseBlogPostsQuery {}

// -- impls --
export function posts(data: IBlogPosts): IBlogPost[] {
  const connection = data.allMarkdownRemark
  if (connection == null) {
    return []
  }

  return connection.nodes
}
