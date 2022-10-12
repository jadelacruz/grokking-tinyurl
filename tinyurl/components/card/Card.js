function Card({ children, style = {} }) {
    return (
        <div className="card" style={ style }>
            { children }
        </div>
    );
}

function CardHeader({ value }) {
    return (
        <div className="card-header">{ value }</div>
    );
}

function CardBody({ children }) {
    return (
        <div className="card-body">{ children }</div>
    );


}

function CardTitle({ value }) {
    return (
        <h5 className="card-title">{ value }</h5>
    );
}


export { Card, CardHeader, CardBody, CardTitle };