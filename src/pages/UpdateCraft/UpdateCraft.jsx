import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCraft = () => {
    const data = useLoaderData();
    console.log(data);

    const { _id, image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status } = data;

    const handleUpdateItem = (e) => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;

        const updatedItemInfo = { image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status };
        // console.log(newItemInfo);

        fetch(`https://timber-twine-server.vercel.app/updateItem/${_id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedItemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully updated an item!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="card bg-base-100 xl:w-2/3 md:w-5/6 mx-auto shadow-2xl my-20">
            <h2 className='text-2xl font-bold text-center mt-6'>Update Your Craft Item</h2>
            <form onSubmit={handleUpdateItem} className="card-body space-y-2">
                <div className="flex flex-col gap-4">
                    <label htmlFor="image">Image URL</label>
                    <input type="text" name='image' defaultValue={image} className="input input-bordered w-full" placeholder="Image URL" />

                    <label htmlFor="item_name">Item Name</label>
                    <input type="text" name='item_name' defaultValue={item_name} className="input input-bordered w-full" placeholder="Name of the Item you want to Add" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="subcategory_name">Subcategory Name</label>
                    <input type="text" name='subcategory_name' defaultValue={subcategory_name} className="input input-bordered w-full" placeholder="Subcategory Name of the Item" />

                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' defaultValue={description} className="input input-bordered w-full" placeholder="A description about the Item" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' defaultValue={price} className="input input-bordered w-full" placeholder="Item Price" />

                    <label htmlFor="rating">Rating</label>
                    <input type="text" name='rating' defaultValue={rating} className="input input-bordered w-full" placeholder="Item rating" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="customization">Customization</label>
                    <input type="text" name='customization' defaultValue={customization} className="input input-bordered w-full" placeholder="Type yes or no" />

                    <label htmlFor="processing_time">Processing Time</label>
                    <input type="number" name='processing_time' defaultValue={processing_time} className="input input-bordered w-full" placeholder="How many days it will take?" />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="stock_status">Stock Status</label>
                    <input type="text" name='stock_status' defaultValue={stock_status} className="input input-bordered w-full" placeholder="In stock/Made to Order" />
                </div>
                <div className="mt-6 flex justify-center">
                    <button type='submit' className="btn btn-primary w-40">Update Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCraft;