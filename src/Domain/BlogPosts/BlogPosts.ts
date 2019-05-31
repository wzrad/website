import { UseBlogPostsQuery } from "./__generated__/UseBlogPostsQuery"
import { IBlogPost } from "./BlogPost"

// -- types --
export interface IBlogPosts extends UseBlogPostsQuery {}

// -- impls --
export function getPosts(posts: IBlogPosts): IBlogPost[] {
  const connection = posts.allMarkdownRemark
  if (connection == null) {
    return []
  }

  return connection.nodes
}
