"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
// -- impls --
function useBlogPosts() {
    return gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query UseBlogPostsQuery {\n      allMarkdownRemark {\n        nodes {\n          frontmatter {\n            title\n            date\n          }\n          excerpt\n        }\n        totalCount\n      }\n    }\n  "], ["\n    query UseBlogPostsQuery {\n      allMarkdownRemark {\n        nodes {\n          frontmatter {\n            title\n            date\n          }\n          excerpt\n        }\n        totalCount\n      }\n    }\n  "]))));
}
exports.useBlogPosts = useBlogPosts;
var templateObject_1;
//# sourceMappingURL=UseBlogPosts.js.map