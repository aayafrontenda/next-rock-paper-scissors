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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/ThemeContext */ \"(app-pages-browser)/./src/app/context/ThemeContext.tsx\");\n/* harmony import */ var _components_StartScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/StartScreen */ \"(app-pages-browser)/./src/app/components/StartScreen.tsx\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Game */ \"(app-pages-browser)/./src/app/components/Game.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/LanguageContext */ \"(app-pages-browser)/./src/app/context/LanguageContext.tsx\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_CustomSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CustomSelect */ \"(app-pages-browser)/./src/app/components/CustomSelect.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)(\"http://localhost:3001\");\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__.config.autoAddCss = false;\nfunction Home() {\n    _s();\n    const [gameStarted, setGameStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme, toggleTheme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const { setLanguage } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.useLanguage)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(theme, \" w-full h-full flex flex-col items-center transition-all duration-300\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: \"/assets/bgShapes/home.webp\",\n                height: 1080,\n                width: 720,\n                alt: \"light theme background\",\n                className: \"block absolute dark:hidden object-cover transition-all duration-300 w-full h-full\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: \"/assets/bgShapes/darkHome.webp\",\n                height: 1080,\n                width: 720,\n                alt: \"dark theme background\",\n                className: \"hidden absolute dark:block object-cover transition-all duration-300 w-full h-full\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative p-6 z-10 w-full h-full flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute outline-none w-10 h-10 flex justify-center items-center rounded top-0 left-[95%] m-4 dark:bg-white dark:text-white bg-black text-black z-10 ml-auto self-start transition-all duration-300\",\n                        onClick: toggleTheme,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {\n                            icon: theme === \"light\" ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faMoon : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faSun,\n                            className: \"text-white dark:text-violet-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-24 font-bold absolute w-10 h-10 flex justify-center text-center items-center rounded top-0 left-[90%] z-10 m-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomSelect__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            id: \"language-select\",\n                            defaultValue: \"en\",\n                            values: [\n                                \"en\",\n                                \"kz\",\n                                \"ru\"\n                            ],\n                            ref: null,\n                            setLanguage: setLanguage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    !gameStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StartScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        socket: socket,\n                        setGameStarted: setGameStarted\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        socket: socket,\n                        setGameStarted: setGameStarted\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Internship Applies\\\\rock-paper-scissors\\\\next-rock-paper-scissors\\\\frontend\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"m0EKfuQy+M4UVi1gdkOf9FjpL0Q=\", false, function() {\n    return [\n        _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useTheme,\n        _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.useLanguage\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ007QUFDQztBQUNkO0FBQ047QUFDTztBQUV0QyxNQUFNTSxTQUFTRCxvREFBRUEsQ0FBQztBQUVzQztBQUVGO0FBRUs7QUFFTztBQUNEO0FBQ1o7QUFDckRHLHFFQUFNQSxDQUFDSyxVQUFVLEdBQUc7QUFDTCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLEVBQUVpQixLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUFHakIsK0RBQVFBO0lBQ3ZDLE1BQU0sRUFBRWtCLFdBQVcsRUFBRSxHQUFHWixxRUFBV0E7SUFFbkMscUJBQ0UsOERBQUNhO1FBQ0NDLFdBQVcsR0FBUyxPQUFOSixPQUFNOzswQkFFcEIsOERBQUNiLG1EQUFLQTtnQkFDSmtCLEtBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pKLFdBQVk7Z0JBQ1pLLFFBQVE7Ozs7OzswQkFFViw4REFBQ3RCLG1EQUFLQTtnQkFDSmtCLEtBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pKLFdBQVk7Z0JBQ1pLLFFBQVE7Ozs7OzswQkFFViw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFDQ04sV0FBVTt3QkFDVk8sU0FBU1Y7a0NBR1AsNEVBQUNQLDRFQUFlQTs0QkFDZGtCLE1BQU1aLFVBQVUsVUFBVVAsc0VBQU1BLEdBQUdELHFFQUFLQTs0QkFDeENZLFdBQVU7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBT2IsNEVBQUNULGlFQUFZQTs0QkFDWGtCLElBQUc7NEJBQ0hDLGNBQWE7NEJBQ2JDLFFBQVE7Z0NBQUM7Z0NBQU07Z0NBQU07NkJBQUs7NEJBQzFCQyxLQUFLOzRCQUNMZCxhQUFhQTs7Ozs7Ozs7Ozs7b0JBR2hCLENBQUNKLDRCQUNBLDhEQUFDYiwrREFBV0E7d0JBQUNJLFFBQVFBO3dCQUFRVSxnQkFBZ0JBOzs7Ozs2Q0FFN0MsOERBQUNiLHdEQUFJQTt3QkFBQ0csUUFBUUE7d0JBQVFVLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQTVEd0JGOztRQUVTYiwyREFBUUE7UUFDZk0saUVBQVdBOzs7S0FIYk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi9jb250ZXh0L1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gXCIuL2NvbXBvbmVudHMvU3RhcnRTY3JlZW5cIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvR2FtZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xuXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gXCIuL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcblxuaW1wb3J0IHsgZmFTdW4sIGZhTW9vbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21TZWxlY3RcIjtcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ2FtZVN0YXJ0ZWQsIHNldEdhbWVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0aGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgc2V0TGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3RoZW1lfSB3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMGB9XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvYmdTaGFwZXMvaG9tZS53ZWJwXCJcbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICB3aWR0aD17NzIwfVxuICAgICAgICBhbHQ9XCJsaWdodCB0aGVtZSBiYWNrZ3JvdW5kXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgYWJzb2x1dGUgZGFyazpoaWRkZW4gb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB3LWZ1bGwgaC1mdWxsYH1cbiAgICAgICAgcHJpb3JpdHlcbiAgICAgIC8+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiL2Fzc2V0cy9iZ1NoYXBlcy9kYXJrSG9tZS53ZWJwXCJcbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICB3aWR0aD17NzIwfVxuICAgICAgICBhbHQ9XCJkYXJrIHRoZW1lIGJhY2tncm91bmRcIlxuICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gYWJzb2x1dGUgZGFyazpibG9jayBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHctZnVsbCBoLWZ1bGxgfVxuICAgICAgICBwcmlvcml0eVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IHotMTAgdy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgb3V0bGluZS1ub25lIHctMTAgaC0xMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkIHRvcC0wIGxlZnQtWzk1JV0gbS00IGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LXdoaXRlIGJnLWJsYWNrIHRleHQtYmxhY2sgei0xMCBtbC1hdXRvIHNlbGYtc3RhcnQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgaWNvbj17dGhlbWUgPT09IFwibGlnaHRcIiA/IGZhTW9vbiA6IGZhU3VufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGRhcms6dGV4dC12aW9sZXQtNTAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yNCBmb250LWJvbGQgYWJzb2x1dGUgdy0xMCBoLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQgdG9wLTAgbGVmdC1bOTAlXSB6LTEwIG0tNFwiPlxuICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xMCBoLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQgdG9wLTAgbGVmdC1bOTUlXSBtLTQgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtd2hpdGUgYmctYmxhY2sgdGV4dC1ibGFjayB6LTEwIG1sLWF1dG8gc2VsZi1zdGFydCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICovfVxuICAgICAgICAgIDxDdXN0b21TZWxlY3RcbiAgICAgICAgICAgIGlkPVwibGFuZ3VhZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cImVuXCJcbiAgICAgICAgICAgIHZhbHVlcz17W1wiZW5cIiwgXCJrelwiLCBcInJ1XCJdfVxuICAgICAgICAgICAgcmVmPXtudWxsfVxuICAgICAgICAgICAgc2V0TGFuZ3VhZ2U9e3NldExhbmd1YWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IWdhbWVTdGFydGVkID8gKFxuICAgICAgICAgIDxTdGFydFNjcmVlbiBzb2NrZXQ9e3NvY2tldH0gc2V0R2FtZVN0YXJ0ZWQ9e3NldEdhbWVTdGFydGVkfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHYW1lIHNvY2tldD17c29ja2V0fSBzZXRHYW1lU3RhcnRlZD17c2V0R2FtZVN0YXJ0ZWR9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVRoZW1lIiwiU3RhcnRTY3JlZW4iLCJHYW1lIiwiSW1hZ2UiLCJpbyIsInNvY2tldCIsInVzZUxhbmd1YWdlIiwiY29uZmlnIiwiZmFTdW4iLCJmYU1vb24iLCJGb250QXdlc29tZUljb24iLCJDdXN0b21TZWxlY3QiLCJhdXRvQWRkQ3NzIiwiSG9tZSIsImdhbWVTdGFydGVkIiwic2V0R2FtZVN0YXJ0ZWQiLCJ0aGVtZSIsInRvZ2dsZVRoZW1lIiwic2V0TGFuZ3VhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsInByaW9yaXR5IiwiYnV0dG9uIiwib25DbGljayIsImljb24iLCJpZCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlcyIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});