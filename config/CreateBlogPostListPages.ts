import { GatsbyNode } from "gatsby"
import { resolve } from "path"
import { IPageContext } from "../src/Scenes/ShowBlogPosts/ShowBlogPosts"

// -- constants --
const kTemplate = "./src/Scenes/ShowBlogPosts/__Template.tsx"

// -- impls --
// -- impls/plugin
export const CreateBlogPostListPages: GatsbyNode = {
  // create pages from each blog post
  async createPages({ graphql, actions }) {
    // fetch the post count on or before today
    const today = new Date().toISOString().slice(0, 10)
    const result = await graphql(`
      query CreateBlogPostPagesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { date: { lte: "${today}" } } }
        ) {
          totalCount
        }
      }
    `)

    // calculate number of pages
    const nPostsPerPage = 5
    const nPosts = result.data.allMarkdownRemark.totalCount
    const nPages = Math.ceil(nPosts / nPostsPerPage)

    // create paginated pages of posts
    for (let i = 0; i < nPages; i++) {
      // scope the page to the correct subset of posts and add prev/next links
      const context: IPageContext = {
        skip: i * nPostsPerPage,
        limit: nPostsPerPage,
        pagination: {
          prev: resolvePaginationUrl(i - 1, nPages),
          next: resolvePaginationUrl(i + 1, nPages)
        }
      }

      // create the page
      actions.createPage({
        path: resolvePaginationUrl(i, nPages)!,
        component: resolve(kTemplate),
        context: (context as unknown) as Record<string, unknown>
      })
    }
  }
}

// impls/pagination
function resolvePaginationUrl(i: number, n: number) {
  const root = "/"
  const blog = "blog"

  if (i < 0 || i >= n) {
    return null
  } else if (i !== 0 && i < n) {
    return resolve(root, blog, `${i + 1}`)
  } else {
    return resolve(root)
  }
}
