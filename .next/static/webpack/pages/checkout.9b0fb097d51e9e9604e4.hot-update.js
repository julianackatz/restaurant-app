webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkoutForm */ \"./components/checkoutForm.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cart */ \"./components/cart.js\");\nvar _jsxFileName = \"/Users/julianakatz/Documents/MIT/Module 29/full-stack-restaurant-app-1-self-study-activities_starter/GraphQL Schema And Query Types/next-restaurant-05-master/pages/checkout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* pages/checkout.js */\n\n\n\n\n\n\n\n\nfunction Checkout() {\n  _s();\n\n  // get app context\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      isAuthenticated = _useContext.isAuthenticated; // isAuthenticated is passed to the cart component to display order button\n  //const isAuthenticated  = true;\n  // load stripe to inject into elements components\n\n\n  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__[\"loadStripe\"])(\"\");\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: {\n      paddingRight: 0\n    },\n    sm: {\n      size: 3,\n      order: 1,\n      offset: 2\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    style: {\n      margin: 20\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Checkout\"), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isAuthenticated: isAuthenticated,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: {\n      paddingLeft: 5\n    },\n    sm: {\n      size: 6,\n      order: 2\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"Elements\"], {\n    stripe: stripePromise,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  })))); // }\n}\n\n_s(Checkout, \"GtrAsE+c3H8n3wulM7SYqbWjm6I=\");\n\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanM/N2RkNCJdLCJuYW1lcyI6WyJDaGVja291dCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwYWRkaW5nUmlnaHQiLCJzaXplIiwib3JkZXIiLCJvZmZzZXQiLCJtYXJnaW4iLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLG9CQUVRQyx3REFBVSxDQUFDQywyREFBRCxDQUZsQjtBQUFBLE1BRVhDLGVBRlcsZUFFWEEsZUFGVyxFQUdsQjtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLGFBQWEsR0FBR0Msb0VBQVUsQ0FDOUIsRUFEOEIsQ0FBaEM7QUFJQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFaO0FBQWlDLE1BQUUsRUFBRTtBQUFFQyxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFLLEVBQUUsQ0FBbEI7QUFBcUJDLFlBQU0sRUFBRTtBQUE3QixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLG1CQUFlLEVBQUVQLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFUSxpQkFBVyxFQUFFO0FBQWYsS0FBWjtBQUFnQyxNQUFFLEVBQUU7QUFBRUosVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFO0FBQWxCLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFSixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUxGLENBREYsQ0FYa0IsQ0F3QmxCO0FBQ0Q7O0dBekJRSixROztLQUFBQSxRO0FBMEJNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NoZWNrb3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvY2hlY2tvdXQuanMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrb3V0Rm9ybVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuXG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgLy8gZ2V0IGFwcCBjb250ZXh0XG4gIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgLy8gaXNBdXRoZW50aWNhdGVkIGlzIHBhc3NlZCB0byB0aGUgY2FydCBjb21wb25lbnQgdG8gZGlzcGxheSBvcmRlciBidXR0b25cbiAgLy9jb25zdCBpc0F1dGhlbnRpY2F0ZWQgID0gdHJ1ZTtcbiAgXG4gIC8vIGxvYWQgc3RyaXBlIHRvIGluamVjdCBpbnRvIGVsZW1lbnRzIGNvbXBvbmVudHNcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgXCJcIlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19IHNtPXt7IHNpemU6IDMsIG9yZGVyOiAxLCBvZmZzZXQ6IDIgfX0+XG4gICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDIwIH19PkNoZWNrb3V0PC9oMT5cbiAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDUgfX0gc209e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XG4gICAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZVByb21pc2V9PlxuICAgICAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICAgICAgPC9FbGVtZW50cz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xuICAvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/checkout.js\n");

/***/ })

})