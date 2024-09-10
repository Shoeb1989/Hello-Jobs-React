import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2 className='text-7xl' >Opps !!!</h2>
           <Link  className='text-7xl' to="/" >Go Back</Link>
        </div>
    );
};

export default Error;