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
// -- impls --
function Show404() {
    return (react_1.default.createElement("div", { css: error }, "Not found."));
}
exports.Show404 = Show404;
// -- styles --
var error = core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
var templateObject_1;
//# sourceMappingURL=Show404.js.map