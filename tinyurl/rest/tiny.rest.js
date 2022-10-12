import ConfigHeaderRest from "./config.rest";

const TinyRest = {
    tinifiedUrl: tinifiedUrl
};

function tinifiedUrl( url = '' ) {
    return fetch('/api/tinier', {
        method: 'post',
        body: JSON.stringify({ userUrl: url }),
        headers: ConfigHeaderRest
    });
};

export default TinyRest;