import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EachCategoryCraftItems = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='my-20 flex justify-center items-center flex-wrap gap-10'>
            {
                data.map(eachItem => <div key={eachItem._id} className="card card-compact bg-base-100 lg:w-96 md:w-80 shadow-xl">
                    <figure>
                        <img className='h-48 w-full' src={eachItem.image} alt="Shoes" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{eachItem.item_name}</h2>
                        <p className='h-16'>{eachItem.description}</p>
                        <p>Subcategory: {eachItem.subcategory_name}</p>
                        <p>Price: {eachItem.price}</p>
                        <p>Rating: {eachItem.rating}</p>
                        <p>Processing Time: {eachItem.processing_time}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/craftItemDetails/${eachItem._id}`}>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default EachCategoryCraftItems;