"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@emotion/core");
var BlogPosts_1 = require("../../Domain/BlogPosts");
// -- impls --
function ShowBlog() {
    // -- impls/model
    var model = BlogPosts_1.useBlogPosts();
    // -- impls/view
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", { css: title }, "Look at all these blogs."),
        react_1.default.createElement("section", null, BlogPosts_1.BlogPosts.getPosts(model).map(function (post) { return (react_1.default.createElement("article", null,
            react_1.default.createElement("p", null, BlogPosts_1.BlogPost.getTitle(post)),
            react_1.default.createElement("p", null, BlogPosts_1.BlogPost.getDate(post)),
            react_1.default.createElement("p", null, BlogPosts_1.BlogPost.getExcerpt(post)))); }))));
}
exports.ShowBlog = ShowBlog;
// -- styles --
var title = core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: gray;\n"], ["\n  color: gray;\n"])));
var templateObject_1;
//# sourceMappingURL=ShowBlog.js.map