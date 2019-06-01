import { UseBlogPostsQuery_allMarkdownRemark_nodes } from "./__generated__/UseBlogPostsQuery"

// -- types --
export interface IBlogPost extends UseBlogPostsQuery_allMarkdownRemark_nodes {}

// -- impls --
export function id(post: IBlogPost) {
  return post.id
}

export function title(post: IBlogPost) {
  return post.frontmatter && post.frontmatter.title
}

export function date(post: IBlogPost) {
  return post.frontmatter && post.frontmatter.date
}

export function excerpt(post: IBlogPost) {
  return post.excerpt
}
