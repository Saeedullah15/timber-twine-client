import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftItemDetails = () => {
    const data = useLoaderData();
    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status, user_name, user_email } = data;

    return (
        <div>
            <h3>this is craft details page: {_id}</h3>
            <img src={image} alt="" />
        </div>
    );
};

export default CraftItemDetails;