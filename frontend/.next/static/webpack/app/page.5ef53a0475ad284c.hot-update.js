"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/ThemeContext */ \"(app-pages-browser)/./src/app/context/ThemeContext.tsx\");\n/* harmony import */ var _components_StartScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/StartScreen */ \"(app-pages-browser)/./src/app/components/StartScreen.tsx\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Game */ \"(app-pages-browser)/./src/app/components/Game.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/LanguageContext */ \"(app-pages-browser)/./src/app/context/LanguageContext.tsx\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_CustomSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CustomSelect */ \"(app-pages-browser)/./src/app/components/CustomSelect.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(\"http://localhost:3001\");\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__.config.autoAddCss = false;\nfunction Home() {\n    _s();\n    const [gameStarted, setGameStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme, toggleTheme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const { setLanguage } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__.useLanguage)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(theme, \" w-full h-full\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col p-6 items-center w-full h-full bg-[url('/assets/bgShapes/home.webp')] dark:bg-[url('/assets/bgShapes/darkHome.webp')] bg-cover relative transition-transform duration-300\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute outline-none w-10 h-10 flex justify-center items-center rounded top-0 left-[95%] m-4 dark:bg-white dark:text-white bg-black text-black z-10 ml-auto self-start transition-all duration-300\",\n                    onClick: toggleTheme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {\n                        icon: theme === \"light\" ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMoon : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSun,\n                        className: \"text-white dark:text-violet-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-24 font-bold absolute w-10 h-10 flex justify-center text-center items-center rounded top-0 left-[90%] z-10 m-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomSelect__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        id: \"language-select\",\n                        defaultValue: \"en\",\n                        values: [\n                            \"en\",\n                            \"kz\",\n                            \"ru\"\n                        ],\n                        ref: null,\n                        setLanguage: setLanguage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                !gameStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StartScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    socket: socket,\n                    setGameStarted: setGameStarted\n                }, void 0, false, {\n                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    socket: socket,\n                    setGameStarted: setGameStarted\n                }, void 0, false, {\n                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"m0EKfuQy+M4UVi1gdkOf9FjpL0Q=\", false, function() {\n    return [\n        _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme,\n        _context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__.useLanguage\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNNO0FBQ0M7QUFDZDtBQUNDO0FBRXRDLE1BQU1LLFNBQVNELG9EQUFFQSxDQUFDO0FBRXNDO0FBRUY7QUFFSztBQUVPO0FBQ0Q7QUFDWjtBQUNyREcscUVBQU1BLENBQUNLLFVBQVUsR0FBRztBQUNMLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxFQUFFZ0IsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR2hCLCtEQUFRQTtJQUN2QyxNQUFNLEVBQUVpQixXQUFXLEVBQUUsR0FBR1oscUVBQVdBO0lBRW5DLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFXLEdBQVMsT0FBTkosT0FBTTtrQkFDdkIsNEVBQUNHO1lBQ0NDLFdBQVk7OzhCQUVaLDhEQUFDQztvQkFDQ0QsV0FBVTtvQkFDVkUsU0FBU0w7OEJBR1AsNEVBQUNQLDJFQUFlQTt3QkFDZGEsTUFBTVAsVUFBVSxVQUFVUCxzRUFBTUEsR0FBR0QscUVBQUtBO3dCQUN4Q1ksV0FBVTs7Ozs7Ozs7Ozs7OEJBSWhCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFPYiw0RUFBQ1QsaUVBQVlBO3dCQUNYYSxJQUFHO3dCQUNIQyxjQUFhO3dCQUNiQyxRQUFROzRCQUFDOzRCQUFNOzRCQUFNO3lCQUFLO3dCQUMxQkMsS0FBSzt3QkFDTFQsYUFBYUE7Ozs7Ozs7Ozs7O2dCQUdoQixDQUFDSiw0QkFDQSw4REFBQ1osK0RBQVdBO29CQUFDRyxRQUFRQTtvQkFBUVUsZ0JBQWdCQTs7Ozs7eUNBRTdDLDhEQUFDWix3REFBSUE7b0JBQUNFLFFBQVFBO29CQUFRVSxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQTVDd0JGOztRQUVTWiwyREFBUUE7UUFDZkssaUVBQVdBOzs7S0FIYk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gXCIuL2NvbXBvbmVudHMvU3RhcnRTY3JlZW5cIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvR2FtZVwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5jb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiKTtcblxuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tIFwiLi9jb250ZXh0L0xhbmd1YWdlQ29udGV4dFwiO1xuXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XG5cbmltcG9ydCB7IGZhU3VuLCBmYU1vb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0XCI7XG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2dhbWVTdGFydGVkLCBzZXRHYW1lU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdGhlbWUsIHRvZ2dsZVRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCB7IHNldExhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoZW1lfSB3LWZ1bGwgaC1mdWxsYH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgcC02IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLVt1cmwoJy9hc3NldHMvYmdTaGFwZXMvaG9tZS53ZWJwJyldIGRhcms6YmctW3VybCgnL2Fzc2V0cy9iZ1NoYXBlcy9kYXJrSG9tZS53ZWJwJyldIGJnLWNvdmVyIHJlbGF0aXZlIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMGB9XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvdXRsaW5lLW5vbmUgdy0xMCBoLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQgdG9wLTAgbGVmdC1bOTUlXSBtLTQgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtd2hpdGUgYmctYmxhY2sgdGV4dC1ibGFjayB6LTEwIG1sLWF1dG8gc2VsZi1zdGFydCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gZmFNb29uIDogZmFTdW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LXZpb2xldC01MDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTI0IGZvbnQtYm9sZCBhYnNvbHV0ZSB3LTEwIGgtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZCB0b3AtMCBsZWZ0LVs5MCVdIHotMTAgbS00XCI+XG4gICAgICAgICAgey8qXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEwIGgtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZCB0b3AtMCBsZWZ0LVs5NSVdIG0tNCBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1ibGFjayB0ZXh0LWJsYWNrIHotMTAgbWwtYXV0byBzZWxmLXN0YXJ0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgPEN1c3RvbVNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJsYW5ndWFnZS1zZWxlY3RcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiZW5cIlxuICAgICAgICAgICAgdmFsdWVzPXtbXCJlblwiLCBcImt6XCIsIFwicnVcIl19XG4gICAgICAgICAgICByZWY9e251bGx9XG4gICAgICAgICAgICBzZXRMYW5ndWFnZT17c2V0TGFuZ3VhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshZ2FtZVN0YXJ0ZWQgPyAoXG4gICAgICAgICAgPFN0YXJ0U2NyZWVuIHNvY2tldD17c29ja2V0fSBzZXRHYW1lU3RhcnRlZD17c2V0R2FtZVN0YXJ0ZWR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdhbWUgc29ja2V0PXtzb2NrZXR9IHNldEdhbWVTdGFydGVkPXtzZXRHYW1lU3RhcnRlZH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlVGhlbWUiLCJTdGFydFNjcmVlbiIsIkdhbWUiLCJpbyIsInNvY2tldCIsInVzZUxhbmd1YWdlIiwiY29uZmlnIiwiZmFTdW4iLCJmYU1vb24iLCJGb250QXdlc29tZUljb24iLCJDdXN0b21TZWxlY3QiLCJhdXRvQWRkQ3NzIiwiSG9tZSIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJ0aGVtZSIsInRvZ2dsZVRoZW1lIiwic2V0TGFuZ3VhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsImlkIiwiZGVmYXVsdFZhbHVlIiwidmFsdWVzIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});