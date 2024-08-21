import React from 'react';
import { Link } from 'react-router-dom';

const ArtCraftCategories = ({ category }) => {
    // console.log(category);
    const { _id, image, subcategory_name } = category;

    return (
        <Link to={`/eachCategoryCraftItems/${subcategory_name}`}>
            <div className="w-48 h-32 cursor-pointer">
                <figure className='w-48 h-32'>
                    <img className='w-full h-full' src={image} alt="Shoes" />
                </figure>
                <h2 className="font-bold text-center">{subcategory_name}</h2>
            </div>
        </Link>
    );
};

export default ArtCraftCategories;