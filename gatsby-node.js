const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  console.log("it's hapenning!", path.resolve(__dirname, "src"))

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@R": path.resolve(__dirname, "resources")
      }
    }
  })
}
