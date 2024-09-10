import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='text-center'>
                <h2 className='text-7xl mb-4'>404 Oops!!!</h2>
                <div>
                    <img className="h-36 mx-auto" src="/src/img/Lost Tourist-big.png" alt="Lost Tourist" />
                </div>

                 <Link className='text-7xl mt-4 inline-block' to="/"> Go Back...</Link>
            </div>
        </div>

    );
};

export default Error;