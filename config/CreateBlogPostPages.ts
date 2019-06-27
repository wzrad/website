import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { resolve } from "path"
import { IPageContext } from "../src/Scenes/ShowBlogPost/ShowBlogPost"

// -- types --
interface BlogPost {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
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
            }
            fields {
              slug
            }
          }
        }
      }
    `)

    // create a page from each one
    const nodes: [BlogPost] = result.data.allMarkdownRemark.nodes

    for (const [index, node] of nodes.entries()) {
      const prev: BlogPost | null = nodes[index - 1]
      const next: BlogPost | null = nodes[index + 1]

      const context: IPageContext = {
        slug: node.fields.slug,
        prev: createPageLink(prev),
        next: createPageLink(next)
      }

      actions.createPage({
        path: node.fields.slug,
        component: resolve("./src/Scenes/ShowBlogPost/PageTemplate.tsx"),
        context: (context as unknown) as Record<string, unknown>
      })
    }
  }
}

// -- impls/context
function createPageLink(post: BlogPost | null) {
  if (post == null) {
    return null
  }

  return {
    slug: post.fields.slug,
    title: post.frontmatter.title
  }
}
