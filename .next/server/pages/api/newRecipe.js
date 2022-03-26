"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/newRecipe";
exports.ids = ["pages/api/newRecipe"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELHdEQUFZO0FBQy9CLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/newRecipe.js":
/*!********************************!*\
  !*** ./pages/api/newRecipe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\n// GET /api/filterPosts?searchString=:searchString\nasync function handle(req, res) {\n    const { likes , count  } = req.body;\n    const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likes.create({\n        data: {\n            likes: likes,\n            tokenID: count,\n            likedBy: []\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3UmVjaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBRXJDLEVBQWtEO0FBQ25DLGVBQWVDLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLEtBQUssRUFBQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNqQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNQLGdFQUFtQixDQUFDLENBQUM7UUFDeENTLElBQUksRUFBRSxDQUFDO1lBQ0xMLEtBQUssRUFBRUEsS0FBSztZQUNaTSxPQUFPLEVBQUVMLEtBQUs7WUFDZE0sT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBQ0RSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDTCxNQUFNO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9wYWdlcy9hcGkvbmV3UmVjaXBlLmpzP2NjOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xyXG5cclxuLy8gR0VUIC9hcGkvZmlsdGVyUG9zdHM/c2VhcmNoU3RyaW5nPTpzZWFyY2hTdHJpbmdcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBsaWtlcywgY291bnQgfSA9IHJlcS5ib2R5XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLmxpa2VzLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxpa2VzOiBsaWtlcyxcclxuICAgICAgdG9rZW5JRDogY291bnQsXHJcbiAgICAgIGxpa2VkQnk6IFtdXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgcmVzLmpzb24ocmVzdWx0KVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsImxpa2VzIiwiY291bnQiLCJib2R5IiwicmVzdWx0IiwiY3JlYXRlIiwiZGF0YSIsInRva2VuSUQiLCJsaWtlZEJ5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/newRecipe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/newRecipe.js"));
module.exports = __webpack_exports__;

})();