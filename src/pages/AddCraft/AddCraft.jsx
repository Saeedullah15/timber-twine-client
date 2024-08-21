import React from 'react';
import Swal from 'sweetalert2';

const AddCraft = () => {
    const handleAddItem = (e) => {
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
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;

        const newItemInfo = { image, item_name, subcategory_name, description, price, rating, customization, processing_time, stock_status, user_name, user_email };
        // console.log(newItemInfo);

        fetch("https://timber-twine-server.vercel.app/addItem", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully added an item!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    form.reset();
                }
            })
    }

    return (
        <div className='my-20'>
            <div className="card bg-base-100 w-2/3 mx-auto shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Add New Craft Item</h2>
                <form onSubmit={handleAddItem} className="card-body space-y-2">
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Image
                            <input type="text" name='image' className="grow" placeholder="Image URL" />
                        </label>
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Item Name
                            <input type="text" name='item_name' className="grow" placeholder="Name of the Item you want to Add" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Subcategory Name
                            <input type="text" name='subcategory_name' className="grow" placeholder="Subcategory Name of the Item" />
                        </label>
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Short Description
                            <input type="text" name='description' className="grow" placeholder="A description about the Item" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Price
                            <input type="number" name='price' className="grow" placeholder="Item Price" />
                        </label>
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Rating
                            <input type="text" name='rating' className="grow" placeholder="Item rating" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Customization
                            <input type="text" name='customization' className="grow" placeholder="Type yes or no" />
                        </label>
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Processing Time
                            <input type="number" name='processing_time' className="grow" placeholder="How many days it will take?" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            Stock Status
                            <input type="text" name='stock_status' className="grow" placeholder="In stock/Made to Order" />
                        </label><label className="input input-bordered w-full flex items-center gap-2">
                            User Name
                            <input type="text" name='user_name' className="grow" placeholder="Name of the User" />
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            User Email
                            <input type="email" name='user_email' className="grow" placeholder="Email of the User" />
                        </label>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button type='submit' className="btn btn-primary w-40">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;