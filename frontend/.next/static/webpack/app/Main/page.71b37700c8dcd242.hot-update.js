"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Main/page",{

/***/ "(app-pages-browser)/./src/components/wordcloud.tsx":
/*!**************************************!*\
  !*** ./src/components/wordcloud.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_wordcloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wordcloud */ \"(app-pages-browser)/./node_modules/react-wordcloud/dist/index.module.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst options = {\n    colors: [\n        \"hsl(0, 100%, 75%)\",\n        \"hsl(35, 100%, 60%)\",\n        \"hsl(224, 100%, 75%)\",\n        \"hsl(285, 100%, 75%)\"\n    ],\n    enableTooltip: false,\n    deterministic: false,\n    fontFamily: \"impact\",\n    fontStyle: \"normal\",\n    fontWeight: \"normal\",\n    padding: 1,\n    rotations: 3,\n    transitionDuration: 1000\n};\nconst SimpleWordcloud = ()=>{\n    _s();\n    const [wordCloudData, setWordCloudData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const apiUrl = \"https://cloverfeed.kr/api/feedbacks/wordcloud/?user_id=\".concat(localStorage.getItem(\"user_id\"));\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(apiUrl).then((response)=>{\n            const data = response.data;\n            setWordCloudData(data);\n        }).catch((error)=>{\n            console.error(\"네트워크 오류:\", error);\n        });\n        const storedUsername = localStorage.getItem(\"user_name\");\n        if (storedUsername) {\n            setUsername(storedUsername);\n        }\n    }, []);\n    if (!wordCloudData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-8 w-[334px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-clover bg-custom-size font-pre text-[14px]\",\n                style: {\n                    // backgroundImage: \"\",\n                    backgroundPosition: \"center top\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundSize: \"contain\",\n                    margin: \"auto\"\n                },\n                children: \"받은 피드백이 없습니다.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined);\n    }\n    console.log(wordCloudData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-clover\",\n                style: {\n                    // backgroundImage: \"\",\n                    backgroundPosition: \"center top\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundSize: \"contain\",\n                    margin: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_wordcloud__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    words: wordCloudData.words,\n                    options: options\n                }, void 0, false, {\n                    fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[14px] text-center font-pre font-bold\",\n                    children: [\n                        username,\n                        \"님은 \",\n                        wordCloudData.summary\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\wordcloud.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SimpleWordcloud, \"bxLqFniIg+5d9yt7SWDEOsuxViQ=\");\n_c = SimpleWordcloud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleWordcloud);\nvar _c;\n$RefreshReg$(_c, \"SimpleWordcloud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3dvcmRjbG91ZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDTjtBQUNBO0FBYTdDLE1BQU1LLFVBQVU7SUFDZEMsUUFBUTtRQUNOO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDREMsZUFBZTtJQUNmQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsV0FBVztJQUNYQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQyxrQkFBNEI7O0lBQ2hDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdoQiwrQ0FBUUEsQ0FDaEQ7SUFFRixNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsU0FBUywwREFBMEYsT0FBaENDLGFBQWFDLE9BQU8sQ0FBQztRQUU5RmxCLDZDQUFLQSxDQUNGbUIsR0FBRyxDQUFDSCxRQUNKSSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNQyxPQUEwQkQsU0FBU0MsSUFBSTtZQUM3Q1QsaUJBQWlCUztRQUNuQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLFlBQVlBO1FBQzVCO1FBRUYsTUFBTUUsaUJBQWlCVCxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSVEsZ0JBQWdCO1lBQ2xCWCxZQUFZVztRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDZCxlQUFlO1FBQ2xCLHFCQUNFLDhEQUFDZTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDTCx1QkFBdUI7b0JBQ3ZCQyxvQkFBb0I7b0JBQ3BCQyxrQkFBa0I7b0JBQ2xCQyxnQkFBZ0I7b0JBQ2hCQyxRQUFRO2dCQUNWOzBCQUNEOzs7Ozs7Ozs7OztJQUtQO0lBRUFSLFFBQVFTLEdBQUcsQ0FBQ3RCO0lBRVoscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDTCx1QkFBdUI7b0JBQ3ZCQyxvQkFBb0I7b0JBQ3BCQyxrQkFBa0I7b0JBQ2xCQyxnQkFBZ0I7b0JBQ2hCQyxRQUFRO2dCQUNWOzBCQUVBLDRFQUFDbEMsdURBQWNBO29CQUFDb0MsT0FBT3ZCLGNBQWN1QixLQUFLO29CQUFFbEMsU0FBU0E7Ozs7Ozs7Ozs7OzBCQUV2RCw4REFBQzBCOzBCQUNDLDRFQUFDUztvQkFBRVIsV0FBVTs7d0JBQ1ZkO3dCQUFTO3dCQUFJRixjQUFjeUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDO0dBbkVNMUI7S0FBQUE7QUFxRU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd29yZGNsb3VkLnRzeD85ZjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFdvcmRjbG91ZCBmcm9tIFwicmVhY3Qtd29yZGNsb3VkXCI7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbnRlcmZhY2UgV29yZCB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXb3JkQ2xvdWRSZXNwb25zZSB7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgc3VtbWFyeTogc3RyaW5nO1xyXG4gIHdvcmRzOiBXb3JkW107XHJcbn1cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgY29sb3JzOiBbXHJcbiAgICBcImhzbCgwLCAxMDAlLCA3NSUpXCIsXHJcbiAgICBcImhzbCgzNSwgMTAwJSwgNjAlKVwiLFxyXG4gICAgXCJoc2woMjI0LCAxMDAlLCA3NSUpXCIsXHJcbiAgICBcImhzbCgyODUsIDEwMCUsIDc1JSlcIixcclxuICBdLFxyXG4gIGVuYWJsZVRvb2x0aXA6IGZhbHNlLFxyXG4gIGRldGVybWluaXN0aWM6IGZhbHNlLFxyXG4gIGZvbnRGYW1pbHk6IFwiaW1wYWN0XCIsXHJcbiAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgcGFkZGluZzogMSxcclxuICByb3RhdGlvbnM6IDMsXHJcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAxMDAwLFxyXG59O1xyXG5cclxuY29uc3QgU2ltcGxlV29yZGNsb3VkOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbd29yZENsb3VkRGF0YSwgc2V0V29yZENsb3VkRGF0YV0gPSB1c2VTdGF0ZTxXb3JkQ2xvdWRSZXNwb25zZSB8IG51bGw+KFxyXG4gICAgbnVsbFxyXG4gICk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2Nsb3ZlcmZlZWQua3IvYXBpL2ZlZWRiYWNrcy93b3JkY2xvdWQvP3VzZXJfaWQ9JHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIil9YDtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGFwaVVybClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFdvcmRDbG91ZFJlc3BvbnNlPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IFdvcmRDbG91ZFJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBzZXRXb3JkQ2xvdWREYXRhKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuuEpO2KuOybjO2BrCDsmKTrpZg6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmVkVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfbmFtZVwiKTtcclxuICAgIGlmIChzdG9yZWRVc2VybmFtZSkge1xyXG4gICAgICBzZXRVc2VybmFtZShzdG9yZWRVc2VybmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIXdvcmRDbG91ZERhdGEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOCB3LVszMzRweF1cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jbG92ZXIgYmctY3VzdG9tLXNpemUgZm9udC1wcmUgdGV4dC1bMTRweF1cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIHRvcFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOuwm+ydgCDtlLzrk5zrsLHsnbQg7JeG7Iq164uI64ukLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyh3b3JkQ2xvdWREYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOCBcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWNsb3ZlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogXCJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgdG9wXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJlYWN0V29yZGNsb3VkIHdvcmRzPXt3b3JkQ2xvdWREYXRhLndvcmRzfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XSB0ZXh0LWNlbnRlciBmb250LXByZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgIHt1c2VybmFtZX3ri5jsnYAge3dvcmRDbG91ZERhdGEuc3VtbWFyeX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVdvcmRjbG91ZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdFdvcmRjbG91ZCIsImF4aW9zIiwib3B0aW9ucyIsImNvbG9ycyIsImVuYWJsZVRvb2x0aXAiLCJkZXRlcm1pbmlzdGljIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nIiwicm90YXRpb25zIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiU2ltcGxlV29yZGNsb3VkIiwid29yZENsb3VkRGF0YSIsInNldFdvcmRDbG91ZERhdGEiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYXBpVXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInN0b3JlZFVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJtYXJnaW4iLCJsb2ciLCJ3b3JkcyIsInAiLCJzdW1tYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/wordcloud.tsx\n"));

/***/ })

});