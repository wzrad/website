import { UseBlogPostsQuery_allMarkdownRemark_nodes } from "./__generated__/UseBlogPostsQuery"

// -- types --
export interface IBlogPost extends UseBlogPostsQuery_allMarkdownRemark_nodes {}

// -- impls --
export function getTitle(post: IBlogPost) {
  return post.frontmatter && post.frontmatter.title
}

export function getDate(post: IBlogPost) {
  return post.frontmatter && post.frontmatter.date
}

export function getExcerpt(post: IBlogPost) {
  return post.excerpt
}
