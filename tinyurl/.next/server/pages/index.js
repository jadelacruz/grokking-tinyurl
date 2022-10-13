"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: external "express-validator"
const external_express_validator_namespaceObject = require("express-validator");
;// CONCATENATED MODULE: ./components/tinier/TinierForm.js




function TinierForm({ url , tinyUrl , eventListeners , urlInvalid  }) {
    const { changedUrl , tinifiedUrl , tinyUrlClicked , clearFields  } = eventListeners;
    const { 0: isUrlValid , 1: setUrlValidity  } = (0,external_react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "jsx-a4b714595f91c8a",
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "a4b714595f91c8a",
                children: '.disable-input.jsx-a4b714595f91c8a{background-color:"#e9ecef";opacity:1}'
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a4b714595f91c8a" + " " + "mb-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "jsx-a4b714595f91c8a" + " " + "form-label",
                        children: "URL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        required: true,
                        id: "url",
                        placeholder: "Required URL",
                        value: url,
                        onChange: (e)=>changedUrl(e),
                        className: "jsx-a4b714595f91c8a" + " " + ([
                            "form-control",
                            isUrlValid === true ? "is-valid" : "",
                            isUrlValid === false ? "is-invalid" : ""
                        ].join(" ") || "")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-a4b714595f91c8a" + " " + "invalid-feedback",
                        children: "Invalid URL"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-a4b714595f91c8a" + " " + "mb-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "jsx-a4b714595f91c8a" + " " + "form-label",
                        children: "Tinified URL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        readOnly: true,
                        style: {
                            backgroundColor: "#e9ecef",
                            cursor: "pointer"
                        },
                        placeholder: "Output",
                        id: "tinyUrl",
                        value: tinyUrl,
                        onClick: (e)=>tinyUrlClicked(e),
                        className: "jsx-a4b714595f91c8a" + " " + "disable-input form-control"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-a4b714595f91c8a" + " " + "mb-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: async (e)=>{
                        const result = await tinifiedUrl(e);
                        return setUrlValidity(result);
                    },
                    className: "jsx-a4b714595f91c8a" + " " + "btn btn-primary",
                    children: "Submit"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-a4b714595f91c8a" + " " + "mb-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: (e)=>{
                        setUrlValidity(null);
                        return clearFields(e);
                    },
                    className: "jsx-a4b714595f91c8a" + " " + "btn btn-warning",
                    children: "Clear"
                })
            })
        ]
    });
}
/* harmony default export */ const tinier_TinierForm = (TinierForm);

;// CONCATENATED MODULE: ./components/card/Card.js

function Card({ children , style ={}  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "card",
        style: style,
        children: children
    });
}
function CardHeader({ value  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: "card-header",
        children: value
    });
}
function CardBody({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "card-body",
        children: children
    });
}
function CardTitle({ value  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
        className: "card-title",
        children: value
    });
}


;// CONCATENATED MODULE: ./rest/config.rest.js
const ConfigHeaderRest = {
    "Content-Type": "application/json"
};
/* harmony default export */ const config_rest = (ConfigHeaderRest);

;// CONCATENATED MODULE: ./rest/tiny.rest.js

const TinyRest = {
    tinifiedUrl: tinifiedUrl
};
function tinifiedUrl(url = "") {
    return fetch("/api/tinier", {
        method: "post",
        body: JSON.stringify({
            userUrl: url
        }),
        headers: config_rest
    });
}
;
/* harmony default export */ const tiny_rest = (TinyRest);

;// CONCATENATED MODULE: ./pages/index.js






function HomeContainer(props) {
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)(props.url);
    const { 0: tinyUrl , 1: setTinyUrl  } = (0,external_react_.useState)(props.tinyUrl);
    const eventListeners = {
        changedUrl: (e)=>setUrl(e.target.value),
        tinifiedUrl: async (e)=>{
            const result = await tiny_rest.tinifiedUrl(url);
            if (result.status >= 400 && !result.ok) {
                setTinyUrl("");
                return false;
            }
            const { shortUrl , urlCode  } = await result.json();
            setTinyUrl(shortUrl + "api/" + urlCode);
            alert("Tinified URL has been generated.");
            return true;
        },
        tinyUrlClicked: ({ target  })=>{
            const url = target.value;
            window.open(url, "_blank");
        },
        clearFields: (e)=>{
            e.preventDefault();
            if (confirm("Are you sure you want to reset the fields?")) {
                setUrl("");
                setTinyUrl("");
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Card, {
            style: {
                marginTop: "70px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CardTitle, {
                        value: "TinyURL (NextJS + MongoDB)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(tinier_TinierForm, {
                        url: url,
                        tinyUrl: tinyUrl,
                        eventListeners: eventListeners
                    })
                ]
            })
        })
    });
}
async function getStaticProps(context) {
    return {
        props: {
            url: "",
            tinyUrl: ""
        }
    };
}
/* harmony default export */ const pages = (HomeContainer);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(48));
module.exports = __webpack_exports__;

})();