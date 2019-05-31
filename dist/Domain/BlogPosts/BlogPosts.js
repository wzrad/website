"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -- impls --
function getPosts(posts) {
    var connection = posts.allMarkdownRemark;
    if (connection == null) {
        return [];
    }
    return connection.nodes;
}
exports.getPosts = getPosts;
//# sourceMappingURL=BlogPosts.js.map