import Head from 'next/head';


const Layout = ({ children }) => {
    return (
        <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Layout