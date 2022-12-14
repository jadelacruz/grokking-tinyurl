"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 81:
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ 663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 31:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "express-validator"
const external_express_validator_namespaceObject = require("express-validator");
;// CONCATENATED MODULE: ./lib/init.middleware.js

function initMiddleware(middleware) {
    return (req, res)=>{
        return new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof external_express_validator_namespaceObject.Result) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
    };
}

;// CONCATENATED MODULE: ./lib/validate.middleware.js
function validateMiddleware(validations, validationResult) {
    return async (req, res, next)=>{
        await Promise.all(validations.map((validation)=>validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(422).json({
            errors: errors.array()
        });
    };
}

;// CONCATENATED MODULE: ./pages/api/tinier/index.js
__webpack_require__(81);



const shortId = __webpack_require__(31);
const Url = __webpack_require__(619);
const validateBody = initMiddleware(validateMiddleware([
    (0,external_express_validator_namespaceObject.check)("userUrl").custom((value)=>/^(ftp|http|https):\/\/[^ "]+$/.test(value)).withMessage("Invalid URL.")
], external_express_validator_namespaceObject.validationResult));
async function handler(req, res) {
    const { userUrl  } = req.body;
    if (req.method !== "POST") {
        res.status(405).json({
            error: "Method Not Allowed."
        });
    }
    await validateBody(req, res);
    let url = await Url.findOne({
        longUrl: userUrl
    });
    if (url) {
        return res.json(url);
    }
    const urlCode = shortId.generate();
    const baseUrl = process.env.VERCEL_URL || process.env.APP_URL;
    const longUrl = userUrl;
    const shortUrl = baseUrl;
    url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date()
    });
    await url.save();
    return res.json(url);
}
;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [619], () => (__webpack_exec__(762)));
module.exports = __webpack_exports__;

})();