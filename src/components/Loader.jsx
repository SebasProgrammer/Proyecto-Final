import React from 'react';
import '../App.css'


const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-spinner">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loader;