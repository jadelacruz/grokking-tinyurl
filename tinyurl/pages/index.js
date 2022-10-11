import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import TinierForm from '../components/tinier/TinierForm';
import TinyRest from '../rest/tiny.rest';

function HomeContainer( props ) {
    const [url, setUrl]  = useState(props.url);
    const eventListeners = {
        changedUrl : e => changedUrl(e),
        tinifiedUrl: e => tinifiedUrl(e)
    };

    const changedUrl  = e => setUrl(e.target.value);
    const tinifiedUrl = e => {
        TinyRest.tinifiedUrl(url);
    };

    return (
        <>
            <TinierForm
                url={ url }
                eventListeners={ eventListeners }
            />
        </>
    )
}

export async function getStaticProps( context ) {
    // const url = new Url('test');
    return {
        props: {
            url: '',
            tinyUrl: ''
        }
    }
}

export default HomeContainer