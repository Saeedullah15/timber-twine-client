import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllArtCraft = () => {
    const data = useLoaderData();
    // console.log(data);

    let count = 1;

    return (
        <div>
            <div className="overflow-x-auto mt-12 mb-20">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            data.map(eachData => <tr key={eachData._id}>
                                <th>{count++}</th>
                                <td>{eachData.item_name}</td>
                                <td>${eachData.price}</td>
                                <td>{eachData.stock_status}</td>
                                <td>
                                    <Link to={`/craftItemDetails/${eachData._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraft;