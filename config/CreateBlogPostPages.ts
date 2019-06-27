import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { resolve } from "path"
import { IPageContext } from "../src/Scenes/ShowBlogPost/ShowBlogPost"

// -- types --
export interface IBlogPost {
  frontmatter: {
    title: string
    series: string | null
  }
  fields: {
    slug: string
  }
}

export interface IBlogPostSeries {
  posts: IBlogPost[]
  index: number
}

export interface IBlogPostSeriesRepo {
  [key: string]: IBlogPostSeries | null
}

// -- impls --
// -- impls/plugin
export const CreateBlogPostPages: GatsbyNode = {
  // add a url slug to every blog post data node
  onCreateNode({ node, getNode, actions }) {
    // if this is a blog post
    if (node.internal.type === "MarkdownRemark") {
      // generate a url slug for the post
      const path = createFilePath({
        node,
        getNode,
        basePath: "content/posts"
      })

      const slug = resolve(
        "/blog",
        path.slice(1, 3), // year
        path.slice(4, 6), // month
        path.slice(10, -6) // name
      )

      // add a field for the slug to the remark node
      actions.createNodeField({
        node,
        name: "slug",
        value: slug
      })
    }
  },

  // create pages from each blog post
  async createPages({ graphql, actions }) {
    // fetch all the posts
    const result = await graphql(`
      query CreatePagesQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          nodes {
            frontmatter {
              title
              series
            }
            fields {
              slug
            }
          }
        }
      }
    `)

    // grab all the posts
    const posts: [IBlogPost] = result.data.allMarkdownRemark.nodes

    // collect posts into series
    const seriesRepo: IBlogPostSeriesRepo = {}
    for (const post of posts) {
      addPostToSeries(seriesRepo, post)
    }

    // create a page from each one
    for (const [index, post] of posts.entries()) {
      // create context
      const context: IPageContext = {
        slug: post.fields.slug,
        posts: {
          global: {
            prev: createPostLink(posts[index - 1]),
            next: createPostLink(posts[index + 1])
          },
          series: {
            prev: createPostLink(findPrevPostInSeries(seriesRepo, post)),
            next: createPostLink(findNextPostInSeries(seriesRepo, post))
          }
        }
      }

      // advance series
      advanceSeriesByPost(seriesRepo, post)

      // create page
      actions.createPage({
        path: post.fields.slug,
        component: resolve("./src/Scenes/ShowBlogPost/PageTemplate.tsx"),
        context: (context as unknown) as Record<string, unknown>
      })
    }
  }
}

// -- impls/context
function createPostLink(post: IBlogPost | null) {
  if (post == null) {
    return null
  }

  return {
    slug: post.fields.slug,
    title: post.frontmatter.title
  }
}

// -- impls/series/commands
function addPostToSeries(repo: IBlogPostSeriesRepo, post: IBlogPost) {
  const key = getKeyFromPost(post)
  if (key == null) {
    return
  }

  const series = repo[key]
  if (series != null) {
    series.posts.push(post)
  } else {
    repo[key] = {
      posts: [post],
      index: 0
    }
  }
}

function advanceSeriesByPost(repo: IBlogPostSeriesRepo, post: IBlogPost) {
  const series = findSeriesByPost(repo, post)
  if (series != null) {
    series.index += 1
  }
}

// -- impls/series/queries
function findSeriesByPost(
  repo: IBlogPostSeriesRepo,
  post: IBlogPost
): IBlogPostSeries | null {
  const key = getKeyFromPost(post)
  if (key == null) {
    return null
  }

  return repo[key]
}

function findPrevPostInSeries(
  repo: IBlogPostSeriesRepo,
  post: IBlogPost
): IBlogPost | null {
  const series = findSeriesByPost(repo, post)
  return series && series.posts[series.index - 1]
}

function findNextPostInSeries(
  repo: IBlogPostSeriesRepo,
  post: IBlogPost
): IBlogPost | null {
  const series = findSeriesByPost(repo, post)
  return series && series.posts[series.index + 1]
}

function getKeyFromPost(post: IBlogPost): string | null {
  return post.frontmatter.series
}
