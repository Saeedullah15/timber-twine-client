import React from 'react';
import { Link } from 'react-router-dom';

const CraftItems = ({ eachCraftItem }) => {
    // console.log(eachCraftItem);

    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status, user_name, user_email } = eachCraftItem;

    return (
        <div className="card card-compact bg-base-100 lg:w-96 md:w-80 shadow-xl">
            <figure>
                <img className='h-48 w-full' src={image} alt="Shoes" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{item_name}</h2>
                <p className='h-20'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/craftItemDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftItems;