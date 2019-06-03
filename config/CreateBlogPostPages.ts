import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { resolve } from "path"

// -- impls --
export const CreateBlogPostPages: GatsbyNode = {
  // add a url slug to every blog post data node
  onCreateNode({ node, getNode, actions }) {
    // if this is a blog post
    if (node.internal.type === "MarkdownRemark") {
      // generate a url slug for the post
      const slug = createFilePath({
        node,
        getNode,
        basePath: "content/posts"
      })

      // add that slug to the data node as a field
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
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `)

    // create a page from each one
    for (const node of result.data.allMarkdownRemark.nodes) {
      actions.createPage({
        path: node.fields.slug,
        component: resolve("./src/Scenes/ShowBlogPost/PageTemplate.tsx"),
        context: {
          slug: node.fields.slug
        }
      })
    }
  }
}