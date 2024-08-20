import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyArtCraft = () => {
    const data = useLoaderData();
    const [items, setItems] = useState(data);

    const yes = items.filter(item => item.customization === "Yes");
    const no = items.filter(item => item.customization === "No");
    console.log(yes, no);

    return (
        <>
            {/* dropdown */}
            <div className='flex justify-center'>
                <div className="dropdown dropdown-hover mt-10">
                    <div tabIndex={0} role="button" className="btn btn-primary m-1">Filter by Customization</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                        <li onClick={() => setItems(yes)}><a>Yes</a></li>
                        <li onClick={() => setItems(no)}><a>No</a></li>
                    </ul>
                </div>
            </div>

            {/* craft item cards */}
            <div className='flex md:flex-row flex-col flex-wrap justify-center items-center gap-10 mt-10 mb-20'>
                {
                    items.map(eachCraft => <div key={eachCraft._id} className="card card-compact bg-base-100 lg:w-96 md:w-80 shadow-xl">
                        <figure>
                            <img className='h-48 w-full' src={eachCraft.image} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{eachCraft.item_name}</h2>
                            <p>Price: ${eachCraft.price}</p>
                            <p>Rating: {eachCraft.rating}</p>
                            <p>Customization: {eachCraft.customization}</p>
                            <p>Stock Status: {eachCraft.stock_status}</p>

                            {/* actions */}
                            <div className="card-actions justify-end">
                                <Link to={`/update-craft-item/${eachCraft._id}`}>
                                    <button className="btn btn-info">Update</button>
                                </Link>
                                <button className="btn btn-warning">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default MyArtCraft;