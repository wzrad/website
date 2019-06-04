const plugins = {
  posts: {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/content/posts/`
    }
  }
}

module.exports = {
  siteMetadata: {
    title: "Ty's Site"
  },
  plugins: [
    plugins.posts,
    "gatsby-plugin-typescript",
    "gatsby-plugin-preact",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark"
  ]
}
