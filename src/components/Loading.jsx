import React from 'react';

const Loading = () => {
    return (

        // <div style={{marginTop:'100px'}} className="d-flex justify-content-center">
        //     <div className="spinner-border" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>

        <div style={{ marginTop: '100px'}} className="d-flex justify-content-center">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;
