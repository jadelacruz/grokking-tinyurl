"use strict";
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);

const mongoClient = __webpack_require__(663);
const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
if (!uri) {
    throw new Error("Please make sure that the Mongo URI is set.");
}
let clientPromise;
if (false) {} else {
    clientPromise = mongoClient.connect(uri, options);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(961);
const mongoose = __webpack_require__(663);
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


/***/ })

};
;