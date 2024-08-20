import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const MyArtCraft = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/myCraftItems/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItems(data);
                setLoading(false);
            })
    }, [])

    const yes = items.filter(item => item.customization === "Yes");
    const no = items.filter(item => item.customization === "No");
    // console.log(yes, no);

    const handleDeleteItem = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/deleteCraftItem/${_id}`, {
                        method: "delete"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });

                                const remainingItems = items.filter(item => item._id !== _id);
                                setItems(remainingItems);
                            }
                        })
                }
            });
    }

    return (
        <>
            {
                loading ?
                    <div className='flex justify-center mt-3 mb-6'>
                        <span className="loading loading-spinner text-info"></span>
                    </div>
                    :
                    " "
            }

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
                                <button onClick={() => handleDeleteItem(eachCraft._id)} className="btn btn-warning">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default MyArtCraft;