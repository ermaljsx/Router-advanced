"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/layout/MainNavigation */ \"./src/components/layout/MainNavigation.js\");\n/* harmony import */ var _components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _products_ProductDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/ProductDetail */ \"./src/pages/products/ProductDetail.js\");\n/* harmony import */ var _products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/Products */ \"./src/pages/products/Products.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/* App Components */ \n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n                            path: \"/\",\n                            exact: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {\n                                to: \"/welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n                            path: \"/allproducts\",\n                            exact: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n                            path: \"/allproducts/:productId\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_products_ProductDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n                            path: \"/allmeetups/:meetupId\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Franci\\\\Desktop\\\\starting-projects-Udemy\\\\meetups-nextjs\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App); // our-domain.com/ -> Component A\n // our-domain.com/products -> Component B\n // our-domain.com/products/:productId -> inside Component B\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSXlCO0FBQ3pCLEVBQW9CLG1CQUM4QztBQUNkO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWpDTSxHQUFHLENBQUcsS0FBd0IsRUFBRyxDQUFDO1FBQTFCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNETiwwRUFBYzs7Ozs7d0ZBRWRPLENBQUk7c0dBQ0ZULG9EQUFNOztvR0FDSkQsbURBQUs7NEJBQUNXLElBQUksRUFBRyxDQUFHOzRCQUFDQyxLQUFLO2tIQUNwQlYsc0RBQVE7Z0NBQUNXLEVBQUUsRUFBRyxDQUFVOzs7Ozs7Ozs7OztvR0FFMUJiLG1EQUFLOzRCQUFDVyxJQUFJLEVBQUcsQ0FBYzs0QkFBQ0MsS0FBSztrSEFDL0JQLDBEQUFROzs7Ozs7Ozs7O29HQUVWTCxtREFBSzs0QkFBQ1csSUFBSSxFQUFHLENBQXlCO2tIQUNwQ1AsK0RBQWE7Ozs7Ozs7Ozs7b0dBRWZKLG1EQUFLOzRCQUFDVyxJQUFJLEVBQUcsQ0FBdUI7Ozs7OztvR0FHcENKLFNBQVMsb0JBQU1DLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMsQ0FBQztLQXhCUUYsR0FBRztBQTBCWiwrREFBZUEsR0FBRyxFQUVsQixDQUFpQztBQUNqQyxDQUF5QztBQUN6QyxDQUEyRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBSb3V0ZSxcclxuICAgIFN3aXRjaCxcclxuICAgIFJlZGlyZWN0XHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLyogQXBwIENvbXBvbmVudHMgKi9cclxuaW1wb3J0IE1haW5OYXZpZ2F0aW9uIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gXCIuL3Byb2R1Y3RzL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuL3Byb2R1Y3RzL1Byb2R1Y3RzXCI7O1xyXG5cclxuZnVuY3Rpb24gQXBwICggeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ICkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWFpbk5hdmlnYXRpb24gLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aCA9IFwiL1wiIGV4YWN0PlxyXG4gICAgICAgICAgICA8UmVkaXJlY3QgdG8gPSBcIi93ZWxjb21lXCIgLz5cclxuICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aCA9IFwiL2FsbHByb2R1Y3RzXCIgZXhhY3Q+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoID0gXCIvYWxscHJvZHVjdHMvOnByb2R1Y3RJZFwiPlxyXG4gICAgICAgICAgICA8UHJvZHVjdERldGFpbCAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoID0gXCIvYWxsbWVldHVwcy86bWVldHVwSWRcIj5cclxuICAgICAgICAgICAgey8qIDxNZWV0dXBEZSAvPiAqL31cclxuICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG4vLyBvdXItZG9tYWluLmNvbS8gLT4gQ29tcG9uZW50IEFcclxuLy8gb3VyLWRvbWFpbi5jb20vcHJvZHVjdHMgLT4gQ29tcG9uZW50IEJcclxuLy8gb3VyLWRvbWFpbi5jb20vcHJvZHVjdHMvOnByb2R1Y3RJZCAtPiBpbnNpZGUgQ29tcG9uZW50IEIiXSwibmFtZXMiOlsiUm91dGUiLCJTd2l0Y2giLCJSZWRpcmVjdCIsIk1haW5OYXZpZ2F0aW9uIiwiUHJvZHVjdERldGFpbCIsIlByb2R1Y3RzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwibWFpbiIsInBhdGgiLCJleGFjdCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});