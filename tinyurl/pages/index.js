import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import TinierForm from '../components/tinier/TinierForm';
import { Card, CardBody, CardTitle } from '../components/card/Card';
import TinyRest from '../rest/tiny.rest';

function HomeContainer( props ) {
    const [url, setUrl]         = useState(props.url);
    const [tinyUrl, setTinyUrl] = useState(props.tinyUrl);

    const eventListeners = {
        changedUrl : e => changedUrl(e),
        tinifiedUrl: e => tinifiedUrl(e),
        tinyUrlClicked: e => tinyUrlClicked(e),
        clearFields: e => clearFields(e)
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
    const tinyUrlClicked = ({ preventDefault, target }) => {
        const url = target.value;
        window.open(url, '_blank');
    };
    const clearFields = e => {
        e.preventDefault();
        if (confirm("Are you sure you want to reset the fields?")) {
            setUrl("");
            setTinyUrl("");
        }
    };

    return (
        <>
            <Card style={{ "margin-top": "70px" }}>
                <CardBody>
                    <CardTitle value="TinyURL (NextJS + MongoDB)" />
                    <TinierForm
                        url={ url }
                        tinyUrl={ tinyUrl }
                        eventListeners={ eventListeners }
                    />
                </CardBody>
            </Card>
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