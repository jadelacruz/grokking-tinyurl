import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import TinierForm from '../components/tinier/TinierForm';
import TinyRest from '../rest/tiny.rest';

function HomeContainer( props ) {
    const [url, setUrl]         = useState(props.url);
    const [tinyUrl, setTinyUrl] = useState(props.tinyUrl);

    const eventListeners = {
        changedUrl : e => changedUrl(e),
        tinifiedUrl: e => tinifiedUrl(e),
        tinyUrlClicked: e => tinyUrlClicked(e)
    };

    const changedUrl  = e => setUrl(e.target.value);
    const tinifiedUrl = async e => {
        try {
            const result   = await TinyRest.tinifiedUrl(url).then( data => data.json() );
            const { shortUrl, urlCode } = result;
            setTinyUrl(shortUrl + 'api/' + urlCode);
            alert('Tinified URL has been generated.')
        } catch (e) {

        }
    };
    const tinyUrlClicked = ({ target }) => {
        const url = target.value;
        window.open(url, '_blank');
    };

    return (
        <>
            <TinierForm
                url={ url }
                tinyUrl={ tinyUrl }
                eventListeners={ eventListeners }
            />
        </>
    )
}

export async function getStaticProps( context ) {
    return {
        props: {
            url: '',
            tinyUrl: ''
        }
    }
}

export default HomeContainer