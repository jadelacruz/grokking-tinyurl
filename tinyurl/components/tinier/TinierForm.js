import 'bootstrap/dist/css/bootstrap.min.css';

function TinierForm({ url, tinyUrl, eventListeners }) {
    const { changedUrl, tinifiedUrl } = eventListeners;
    return <form>
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
                        disabled
                        className="form-control"
                        placeholder="Output"
                        id="tinyUrl"
                        value={ tinyUrl }></input>
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