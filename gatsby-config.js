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
    title: "Website."
  },
  plugins: [
    plugins.posts,
    "gatsby-plugin-typescript",
    "gatsby-plugin-preact",
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark"
  ]
}
