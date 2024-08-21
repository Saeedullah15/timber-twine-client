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
        <div className="card bg-base-100 w-2/3 mx-auto shadow-2xl my-20">
            <h2 className='text-2xl font-bold text-center mt-6'>Update Your Craft Item</h2>
            <form onSubmit={handleUpdateItem} className="card-body space-y-2">
                <div className="flex gap-4">
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Image
                        <input type="text" name='image' defaultValue={image} className="grow" placeholder="Image URL" />
                    </label>
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Item Name
                        <input type="text" name='item_name' defaultValue={item_name} className="grow" placeholder="Name of the Item you want to Add" />
                    </label>
                </div>
                <div className="flex gap-4">
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Subcategory Name
                        <input type="text" name='subcategory_name' defaultValue={subcategory_name} className="grow" placeholder="Subcategory Name of the Item" />
                    </label>
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Short Description
                        <input type="text" name='description' defaultValue={description} className="grow" placeholder="A description about the Item" />
                    </label>
                </div>
                <div className="flex gap-4">
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Price
                        <input type="number" name='price' defaultValue={price} className="grow" placeholder="Item Price" />
                    </label>
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Rating
                        <input type="text" name='rating' defaultValue={rating} className="grow" placeholder="Item rating" />
                    </label>
                </div>
                <div className="flex gap-4">
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Customization
                        <input type="text" name='customization' defaultValue={customization} className="grow" placeholder="Type yes or no" />
                    </label>
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Processing Time
                        <input type="number" name='processing_time' defaultValue={processing_time} className="grow" placeholder="How many days it will take?" />
                    </label>
                </div>
                <div className="flex gap-4">
                    <label className="input input-bordered w-full flex items-center gap-2">
                        Stock Status
                        <input type="text" name='stock_status' defaultValue={stock_status} className="grow" placeholder="In stock/Made to Order" />
                    </label>
                </div>
                <div className="mt-6 flex justify-center">
                    <button type='submit' className="btn btn-primary w-40">Update Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCraft;