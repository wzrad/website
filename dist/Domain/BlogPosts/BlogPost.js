"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -- impls --
function getTitle(post) {
    return post.frontmatter && post.frontmatter.title;
}
exports.getTitle = getTitle;
function getDate(post) {
    return post.frontmatter && post.frontmatter.date;
}
exports.getDate = getDate;
function getExcerpt(post) {
    return post.excerpt;
}
exports.getExcerpt = getExcerpt;
//# sourceMappingURL=BlogPost.js.map