import {useState} from 'react';
import {check, validationResult} from 'express-validator';

function TinierForm({url, tinyUrl, eventListeners, urlInvalid}) {
    const {changedUrl, tinifiedUrl, tinyUrlClicked, clearFields} = eventListeners;
    const [isUrlValid, setUrlValidity] = useState(null);
    
    return (
        <form>
            <style jsx>{`
                .disable-input {
                    background-color: "#e9ecef";
                    opacity: 1;
                }
            `}</style>
            <div className={'mb-3'}>
                <label 
                    className={'form-label'}>URL</label>
                <textarea 
                    required
                    className={[
                        'form-control',
                        (isUrlValid === true) ? 'is-valid' : '',
                        (isUrlValid === false) ? 'is-invalid': ''
                    ].join(' ')}
                    id={'url'}
                    placeholder={'Required URL'} 
                    value={url}
                    onChange={e => changedUrl(e)}></textarea>
                <div className={'invalid-feedback'}>Invalid URL</div>
            </div>

            <div className="mb-3">
                <label
                    className="form-label">Tinified URL</label>
                <input
                    readOnly
                    style= {{backgroundColor: "#e9ecef", cursor: "pointer"}}
                    className={'disable-input form-control'}
                    placeholder={'Output'}
                    id={'tinyUrl'}
                    value={tinyUrl}
                    onClick={e => resulttinyUrlClicked(e)}></input>
            </div>


            <div className={'mb-3'}>
                <button 
                    type={'button'}
                    className={'btn btn-primary'}
                    onClick={async e => {
                        const result = await tinifiedUrl(e);
                        return setUrlValidity(result);
                   }}>Submit</button>
            </div>

            <div className={'mb-3'}>
                <button 
                    type={'button'}
                    className={'btn btn-warning'}
                    onClick={e => {
                        setUrlValidity(null);
                        return clearFields(e);
                   }}>Clear</button>
            </div>
        </form>
    );
}

export default TinierForm;