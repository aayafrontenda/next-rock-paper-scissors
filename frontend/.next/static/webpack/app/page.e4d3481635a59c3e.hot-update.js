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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/ThemeContext */ \"(app-pages-browser)/./src/app/context/ThemeContext.tsx\");\n/* harmony import */ var _components_StartScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/StartScreen */ \"(app-pages-browser)/./src/app/components/StartScreen.tsx\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Game */ \"(app-pages-browser)/./src/app/components/Game.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/LanguageContext */ \"(app-pages-browser)/./src/app/context/LanguageContext.tsx\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_CustomSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CustomSelect */ \"(app-pages-browser)/./src/app/components/CustomSelect.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)(\"http://localhost:3001\");\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__.config.autoAddCss = false;\nfunction Home() {\n    _s();\n    const [gameStarted, setGameStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme, toggleTheme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const { setLanguage } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.useLanguage)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(theme, \" w-full h-full flex flex-col items-center\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: \"/assets/bgShapes/home.webp\",\n                height: 1080,\n                width: 720,\n                alt: \"light theme background\",\n                className: \"opacity-100 dark:opacity-0 absolute object-cover transition-opacity duration-300 w-full h-full\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: \"/assets/bgShapes/darkHome.webp\",\n                height: 1080,\n                width: 720,\n                alt: \"dark theme background\",\n                className: \"dark:opacity-100 opacity-0 absolute object-cover transition-opacity duration-300 w-full h-full\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative p-6 z-10 w-full h-full flex flex-col lg:flex-row justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"lg:absolute outline-none w-10 h-10 flex justify-center items-center rounded lg:top-0 lg:left-[95%] m-4 dark:bg-white dark:text-white bg-black text-black z-10 ml-auto self-start transition-all duration-300\",\n                                onClick: toggleTheme,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n                                    icon: theme === \"light\" ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faMoon : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faSun,\n                                    className: \"text-white dark:text-violet-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lg:mr-24 font-bold lg:absolute w-10 h-10 flex justify-center text-center items-center rounded top-0 left-[90%] z-10 m-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomSelect__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    id: \"language-select\",\n                                    defaultValue: \"en\",\n                                    values: [\n                                        \"en\",\n                                        \"kz\",\n                                        \"ru\"\n                                    ],\n                                    ref: null,\n                                    setLanguage: setLanguage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    !gameStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StartScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        socket: socket,\n                        setGameStarted: setGameStarted\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        socket: socket,\n                        setGameStarted: setGameStarted\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"m0EKfuQy+M4UVi1gdkOf9FjpL0Q=\", false, function() {\n    return [\n        _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme,\n        _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.useLanguage\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ007QUFDQztBQUNkO0FBQ047QUFDTztBQUV0QyxNQUFNTSxTQUFTRCxvREFBRUEsQ0FBQztBQUVzQztBQUVGO0FBRUs7QUFFTztBQUNEO0FBQ1o7QUFDckRHLHFFQUFNQSxDQUFDSyxVQUFVLEdBQUc7QUFDTCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLEVBQUVpQixLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUFHakIsK0RBQVFBO0lBQ3ZDLE1BQU0sRUFBRWtCLFdBQVcsRUFBRSxHQUFHWixxRUFBV0E7SUFFbkMscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVcsR0FBUyxPQUFOSixPQUFNOzswQkFDdkIsOERBQUNiLG1EQUFLQTtnQkFDSmtCLEtBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pKLFdBQVk7Z0JBQ1pLLFFBQVE7Ozs7OzswQkFFViw4REFBQ3RCLG1EQUFLQTtnQkFDSmtCLEtBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pKLFdBQVk7Z0JBQ1pLLFFBQVE7Ozs7OzswQkFFViw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNNO2dDQUNDTixXQUFVO2dDQUNWTyxTQUFTVjswQ0FHUCw0RUFBQ1AsNEVBQWVBO29DQUNka0IsTUFBTVosVUFBVSxVQUFVUCxzRUFBTUEsR0FBR0QscUVBQUtBO29DQUN4Q1ksV0FBVTs7Ozs7Ozs7Ozs7MENBSWhCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FPYiw0RUFBQ1QsaUVBQVlBO29DQUNYa0IsSUFBRztvQ0FDSEMsY0FBYTtvQ0FDYkMsUUFBUTt3Q0FBQzt3Q0FBTTt3Q0FBTTtxQ0FBSztvQ0FDMUJDLEtBQUs7b0NBQ0xkLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFJbEIsQ0FBQ0osNEJBQ0EsOERBQUNiLCtEQUFXQTt3QkFBQ0ksUUFBUUE7d0JBQVFVLGdCQUFnQkE7Ozs7OzZDQUU3Qyw4REFBQ2Isd0RBQUlBO3dCQUFDRyxRQUFRQTt3QkFBUVUsZ0JBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hEO0dBNUR3QkY7O1FBRVNiLDJEQUFRQTtRQUNmTSxpRUFBV0E7OztLQUhiTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuL2NvbnRleHQvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSBcIi4vY29tcG9uZW50cy9TdGFydFNjcmVlblwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9HYW1lXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIik7XG5cbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSBcIi4vY29udGV4dC9MYW5ndWFnZUNvbnRleHRcIjtcblxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuXG5pbXBvcnQgeyBmYVN1biwgZmFNb29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL0N1c3RvbVNlbGVjdFwiO1xuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtnYW1lU3RhcnRlZCwgc2V0R2FtZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBzZXRMYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2UoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGVtZX0gdy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvYmdTaGFwZXMvaG9tZS53ZWJwXCJcbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICB3aWR0aD17NzIwfVxuICAgICAgICBhbHQ9XCJsaWdodCB0aGVtZSBiYWNrZ3JvdW5kXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgb3BhY2l0eS0xMDAgZGFyazpvcGFjaXR5LTAgYWJzb2x1dGUgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgdy1mdWxsIGgtZnVsbGB9XG4gICAgICAgIHByaW9yaXR5XG4gICAgICAvPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvYmdTaGFwZXMvZGFya0hvbWUud2VicFwiXG4gICAgICAgIGhlaWdodD17MTA4MH1cbiAgICAgICAgd2lkdGg9ezcyMH1cbiAgICAgICAgYWx0PVwiZGFyayB0aGVtZSBiYWNrZ3JvdW5kXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgZGFyazpvcGFjaXR5LTEwMCBvcGFjaXR5LTAgYWJzb2x1dGUgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgdy1mdWxsIGgtZnVsbGB9XG4gICAgICAgIHByaW9yaXR5XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTYgei0xMCB3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmFic29sdXRlIG91dGxpbmUtbm9uZSB3LTEwIGgtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZCBsZzp0b3AtMCBsZzpsZWZ0LVs5NSVdIG0tNCBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1ibGFjayB0ZXh0LWJsYWNrIHotMTAgbWwtYXV0byBzZWxmLXN0YXJ0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gZmFNb29uIDogZmFTdW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtdmlvbGV0LTUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci0yNCBmb250LWJvbGQgbGc6YWJzb2x1dGUgdy0xMCBoLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQgdG9wLTAgbGVmdC1bOTAlXSB6LTEwIG0tNFwiPlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEwIGgtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZCB0b3AtMCBsZWZ0LVs5NSVdIG0tNCBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1ibGFjayB0ZXh0LWJsYWNrIHotMTAgbWwtYXV0byBzZWxmLXN0YXJ0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8Q3VzdG9tU2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiZW5cIlxuICAgICAgICAgICAgICB2YWx1ZXM9e1tcImVuXCIsIFwia3pcIiwgXCJydVwiXX1cbiAgICAgICAgICAgICAgcmVmPXtudWxsfVxuICAgICAgICAgICAgICBzZXRMYW5ndWFnZT17c2V0TGFuZ3VhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyFnYW1lU3RhcnRlZCA/IChcbiAgICAgICAgICA8U3RhcnRTY3JlZW4gc29ja2V0PXtzb2NrZXR9IHNldEdhbWVTdGFydGVkPXtzZXRHYW1lU3RhcnRlZH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R2FtZSBzb2NrZXQ9e3NvY2tldH0gc2V0R2FtZVN0YXJ0ZWQ9e3NldEdhbWVTdGFydGVkfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VUaGVtZSIsIlN0YXJ0U2NyZWVuIiwiR2FtZSIsIkltYWdlIiwiaW8iLCJzb2NrZXQiLCJ1c2VMYW5ndWFnZSIsImNvbmZpZyIsImZhU3VuIiwiZmFNb29uIiwiRm9udEF3ZXNvbWVJY29uIiwiQ3VzdG9tU2VsZWN0IiwiYXV0b0FkZENzcyIsIkhvbWUiLCJnYW1lU3RhcnRlZCIsInNldEdhbWVTdGFydGVkIiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsInNldExhbmd1YWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJwcmlvcml0eSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZXMiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});