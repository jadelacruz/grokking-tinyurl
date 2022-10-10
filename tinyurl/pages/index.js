import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from '../components/header';

function HomePage( props ) {
    const [url, setUrl] = useState("");
    const handleClick   = (e) => { 
        e.preventDefault();
        console.log(url);
        // tinyRequest(url);
     };
    const handleChange  = ({ value }) => setUrl(value);
    const tinyRequest   = async url => {
        const data   = { firstName: url };
        const header = { 'Content-type': 'application/json' };
            console.log(data);
        await fetch('/api/tinier', {
            method: 'post',
            body: JSON.stringify(data),
            headers: header
        });
    }

    return <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="row">

                        <div className="mb-3">
                            <label 
                                className="form-label">URL</label>
                            <textarea 
                                required
                                className="form-control"
                                id="url"
                                placeholder="Required URL"
                                value={ url }
                                onChange={ handleChange }></textarea>
                            <div className="invalid-feedback">Invalid URL</div>
                        </div>

                        <div className="mb-3">
                            <label
                                className="form-label">Tinified URL</label>
                            <input 
                                disabled
                                className="form-control"
                                id="tinyUrl"></input>
                        </div>

                        <div className="mb-3">
                            <button 
                                className="btn btn-primary" 
                                onClick={ handleClick }>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default HomePage