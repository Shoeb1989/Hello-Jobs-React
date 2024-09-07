import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Opps !!!</h2>
           <Link to="/" >GO back Home</Link>
        </div>
    );
};

export default Error;