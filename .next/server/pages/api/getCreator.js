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
exports.id = "pages/api/getCreator";
exports.ids = ["pages/api/getCreator"];
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

/***/ "./pages/api/getCreator.js":
/*!*********************************!*\
  !*** ./pages/api/getCreator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n\n// GET /api/filterPosts?searchString=:searchString\nasync function handle(req, res) {\n    const address = req.query.address;\n    try {\n        var creator = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Creator.findMany({\n            where: {\n                Address: address\n            }\n        });\n    } catch (err) {\n    }\n    res.json(creator);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0Q3JlYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUVyQyxFQUFrRDtBQUNuQyxlQUFlQyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxPQUFPO0lBRWpDLEdBQUcsQ0FBQyxDQUFDO1FBR0wsR0FBRyxDQUFDRSxPQUFPLEdBQUcsS0FBSyxDQUFDTixvRUFBdUIsQ0FBQyxDQUFDO1lBQzdDUyxLQUFLLEVBQUUsQ0FBQztnQkFDTkMsT0FBTyxFQUFFTixPQUFPO1lBQ2xCLENBQUM7UUFDSCxDQUFDO0lBRUQsQ0FBQyxDQUFDLEtBQUssRUFBRU8sR0FBRyxFQUFFLENBQUM7SUFFZixDQUFDO0lBR0NSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDTixPQUFPO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQvLi9wYWdlcy9hcGkvZ2V0Q3JlYXRvci5qcz9hODgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcclxuXHJcbi8vIEdFVCAvYXBpL2ZpbHRlclBvc3RzP3NlYXJjaFN0cmluZz06c2VhcmNoU3RyaW5nXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSByZXEucXVlcnkuYWRkcmVzc1xyXG4gIFxyXG4gIHRyeSB7XHJcblxyXG4gIFxyXG4gIHZhciBjcmVhdG9yID0gYXdhaXQgcHJpc21hLkNyZWF0b3IuZmluZE1hbnkoe1xyXG4gIHdoZXJlOiB7XHJcbiAgICBBZGRyZXNzOiBhZGRyZXNzXHJcbiAgfVxyXG59KVxyXG5cclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4gIHJlcy5qc29uKGNyZWF0b3IpXHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiY3JlYXRvciIsIkNyZWF0b3IiLCJmaW5kTWFueSIsIndoZXJlIiwiQWRkcmVzcyIsImVyciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/getCreator.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getCreator.js"));
module.exports = __webpack_exports__;

})();