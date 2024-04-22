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

/***/ "(app-pages-browser)/./src/components/ShareButton.tsx":
/*!****************************************!*\
  !*** ./src/components/ShareButton.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ShareButton = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [userid, setUserid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const storedUserid = localStorage.getItem(\"user_id\");\n        if (storedUserid) {\n            setUserid(storedUserid);\n        }\n    }, []);\n    const handleButtonClick = async ()=>{\n        try {\n            // 사용자 ID를 하드코딩하거나, 동적으로 설정할 수 있습니다.\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://cloverfeed.kr/api/form/?user_id=\".concat(userid));\n            if (response.data.status === \"success\") {\n                if (response.data.feedbackform === \"true\") {\n                    // feedbackform이 true이면 sharepage로 이동\n                    router.push(\"/QueryShare\");\n                } else {\n                    // feedbackform이 false이면 QueryMain 페이지로 이동\n                    router.push(\"/QueryMain\");\n                }\n            } else {\n                // API 응답이 success가 아닌 경우에 대한 처리\n                console.log(\"API 응답:\", response.data);\n            }\n        } catch (error) {\n            console.error(\"API 호출 에러:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleButtonClick,\n        className: \"flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/common/shareicon.svg\",\n                    width: 25,\n                    height: 25,\n                    alt: \"Share Icon\",\n                    className: \"h-[40px]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\ShareButton.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-pre text-[14px] font-bold\",\n                    children: \"질문폼 공유\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\ShareButton.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\ShareButton.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\boot\\\\CloverFeed\\\\frontend\\\\src\\\\components\\\\ShareButton.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShareButton, \"pCoxMh20nbYA7RGdJ6WvBoYLFY0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ShareButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareButton);\nvar _c;\n$RefreshReg$(_c, \"ShareButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NoYXJlQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNEM7QUFDQTtBQUNsQjtBQUNBO0FBQ0s7QUFhL0IsTUFBTU0sY0FBMEM7O0lBQzlDLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsZUFBZUMsYUFBYUMsT0FBTyxDQUFDO1FBQzFDLElBQUlGLGNBQWM7WUFDaEJELFVBQVVDO1FBQ1o7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRyxvQkFBb0I7UUFDeEIsSUFBSTtZQUNGLG9DQUFvQztZQUNwQyxNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQzlCLDJDQUFrRCxPQUFQUDtZQUc3QyxJQUFJTSxTQUFTRSxJQUFJLENBQUNDLE1BQU0sS0FBSyxXQUFXO2dCQUN0QyxJQUFJSCxTQUFTRSxJQUFJLENBQUNFLFlBQVksS0FBSyxRQUFRO29CQUN6QyxxQ0FBcUM7b0JBQ3JDWCxPQUFPWSxJQUFJLENBQUM7Z0JBQ2QsT0FBTztvQkFDTCwwQ0FBMEM7b0JBQzFDWixPQUFPWSxJQUFJLENBQUM7Z0JBQ2Q7WUFDRixPQUFPO2dCQUNMLGdDQUFnQztnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXUCxTQUFTRSxJQUFJO1lBQ3RDO1FBQ0YsRUFBRSxPQUFPTSxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxjQUFjQTtRQUM5QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFNBQVNYO1FBQ1RZLFdBQVU7a0JBRVYsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDcEIsa0RBQUtBO29CQUNKc0IsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTtvQkFDSkwsV0FBVTs7Ozs7OzhCQUVaLDhEQUFDTTtvQkFBRU4sV0FBVTs4QkFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXREO0dBckRNbkI7O1FBQ1dOLHNEQUFTQTs7O0tBRHBCTTtBQXVETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaGFyZUJ1dHRvbi50c3g/MWY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2Uge1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG4gIGZlZWRiYWNrZm9ybTogc3RyaW5nO1xyXG4gIGVycm9yX2NvZGU/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNoYXJlQnV0dG9uUHJvcHMge1xyXG4gIHNoYXJlcGFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTaGFyZUJ1dHRvbjogUmVhY3QuRkM8U2hhcmVCdXR0b25Qcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFVzZXJpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKTtcclxuICAgIGlmIChzdG9yZWRVc2VyaWQpIHtcclxuICAgICAgc2V0VXNlcmlkKHN0b3JlZFVzZXJpZCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIOyCrOyaqeyekCBJROulvCDtlZjrk5zsvZTrlKntlZjqsbDrgpgsIOuPmeyggeycvOuhnCDshKTsoJXtlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8QXBpUmVzcG9uc2U+KFxyXG4gICAgICAgIGBodHRwczovL2Nsb3ZlcmZlZWQua3IvYXBpL2Zvcm0vP3VzZXJfaWQ9JHt1c2VyaWR9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmZlZWRiYWNrZm9ybSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgIC8vIGZlZWRiYWNrZm9ybeydtCB0cnVl7J2066m0IHNoYXJlcGFnZeuhnCDsnbTrj5lcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1F1ZXJ5U2hhcmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGZlZWRiYWNrZm9ybeydtCBmYWxzZeydtOuptCBRdWVyeU1haW4g7Y6Y7J207KeA66GcIOydtOuPmVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvUXVlcnlNYWluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBUEkg7J2R64u17J20IHN1Y2Nlc3PqsIAg7JWE64uMIOqyveyasOyXkCDrjIDtlZwg7LKY66asXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBUEkg7J2R64u1OlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFQSSDtmLjstpwg7JeQ65+sOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZGVsYXktMTUwIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTExMCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9jb21tb24vc2hhcmVpY29uLnN2Z1wiXHJcbiAgICAgICAgICB3aWR0aD17MjV9XHJcbiAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgYWx0PVwiU2hhcmUgSWNvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLVs0MHB4XVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXByZSB0ZXh0LVsxNHB4XSBmb250LWJvbGRcIj7sp4jrrLjtj7wg6rO17JygPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFyZUJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJheGlvcyIsIkltYWdlIiwiU2hhcmVCdXR0b24iLCJyb3V0ZXIiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJzdG9yZWRVc2VyaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJzdGF0dXMiLCJmZWVkYmFja2Zvcm0iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ShareButton.tsx\n"));

/***/ })

});