"use strict";
(() => {
var exports = {};
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 81:
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ 663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const Url = __webpack_require__(619);
async function handler(req, res) {
    const { code  } = req.query;
    const { longUrl  } = await Url.findOne({
        urlCode: code
    });
    res.redirect(longUrl);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [619], () => (__webpack_exec__(330)));
module.exports = __webpack_exports__;

})();