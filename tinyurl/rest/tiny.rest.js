import ConfigHeaderRest from "./config.rest";

const TinyRest = {
    tinifiedUrl: tinifiedUrl
};

function tinifiedUrl( url = '' ) {
    console.log({ url: url });
    return fetch('/api/tinier', {
        method: 'post',
        body: JSON.stringify({ url: url }),
        headers: ConfigHeaderRest
    });
};

export default TinyRest;