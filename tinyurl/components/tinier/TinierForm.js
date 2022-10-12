import 'bootstrap/dist/css/bootstrap.min.css';

function TinierForm({ url, tinyUrl, eventListeners }) {
    const { changedUrl, tinifiedUrl, tinyUrlClicked } = eventListeners;
    return <form>
                <style jsx>{`
                    .disable-input {
                        background-color: "#e9ecef";
                        opacity: 1;
                    }
                `}</style>
                <div className="mb-3">
                    <label 
                        className="form-label">URL</label>
                    <textarea 
                        required
                        className="form-control"
                        id="url"
                        placeholder="Required URL"
                        value={ url }
                        onChange={ e => changedUrl(e) }></textarea>
                    <div className="invalid-feedback">Invalid URL</div>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label">Tinified URL</label>
                    <input
                        readOnly
                        style= { {backgroundColor: "#e9ecef", cursor: "pointer"} }
                        className="disable-input form-control "
                        placeholder="Output"
                        id="tinyUrl"
                        value={ tinyUrl }
                        onClick={ e => tinyUrlClicked(e) }></input>
                </div>

                <div className="mb-3">
                    <button 
                        type="button"
                        className="btn btn-primary" 
                        onClick={ e => tinifiedUrl(e) }>Submit</button>
                </div>
            </form>
}

export default TinierForm;