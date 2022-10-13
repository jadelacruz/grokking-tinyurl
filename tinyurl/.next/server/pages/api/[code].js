"use strict";
(() => {
var exports = {};
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const DB_URI = process.env.DB_URI;
const mongoose = __webpack_require__(185);
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Connection = mongoose.connection;
module.exports = Connection;


/***/ }),

/***/ 619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(185);
const Schema = mongoose.Schema;
const URLSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
});
module.exports = mongoose.models.Url || mongoose.model("Url", URLSchema);


/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
__webpack_require__(961);
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
var __webpack_exports__ = (__webpack_exec__(330));
module.exports = __webpack_exports__;

})();