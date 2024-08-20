import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-3xl text-center font-bold'>404 | Not Found</h2>
            <Link to="/" className='flex justify-center mt-8'>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;