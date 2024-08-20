import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftItemDetails = () => {
    const data = useLoaderData();
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status, user_name, user_email } = data;

    return (
        <div className="w-4/5 mx-auto mt-10 mb-20 flex flex-col xl:flex-row">
            <figure className='xl:w-2/3'>
                <img
                    src={image}
                    alt="Album" />
            </figure>
            <div className="xl:w-1/3 card-body lg:bg-sky-100">
                <h2 className="card-title">{item_name}</h2>
                <p>{description}</p>
                <p>Category: {subcategory_name}</p>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>Customization: {customization}</p>
                <p>Processing time: {processing_time}</p>
                <p>Stock status: {stock_status}</p>
                <p>User name: {user_name}</p>
                <p>User email: {user_email}</p>
            </div>
        </div>
    );
};

export default CraftItemDetails;