import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import TinierForm from '../components/tinier/TinierForm';
import { Card, CardBody, CardTitle } from '../components/card/Card';
import TinyRest from '../rest/tiny.rest';

function HomeContainer( props ) {
    const [url, setUrl]         = useState(props.url);
    const [tinyUrl, setTinyUrl] = useState(props.tinyUrl);

    const eventListeners = {
        changedUrl : e => setUrl(e.target.value),

        tinifiedUrl: async e => {
            const result = await TinyRest.tinifiedUrl(url);
            if (result.status >= 400 && !result.ok) {
                setTinyUrl('');
                return false;
            }

            const { shortUrl, urlCode } = await result.json();
            setTinyUrl(shortUrl + 'api/' + urlCode);
            alert('Tinified URL has been generated.')

            return true;
        },

        tinyUrlClicked: ({ target }) => {
            const url = target.value;
            window.open(url, '_blank');
        },

        clearFields: e => {
            e.preventDefault();
            if (confirm("Are you sure you want to reset the fields?")) {
                setUrl("");
                setTinyUrl("");
            }
        }
    };

    return (
        <>
            <Card style={{ marginTop: "70px" }}>
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