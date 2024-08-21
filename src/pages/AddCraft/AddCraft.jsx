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
            <div className="card bg-base-100 xl:w-2/3 md:w-5/6 mx-auto shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Add New Craft Item</h2>
                <form onSubmit={handleAddItem} className="card-body space-y-2">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="text" name='image' className="input input-bordered w-full" placeholder="Image URL" />
                        <input type="text" name='item_name' className="input input-bordered w-full" placeholder="Item Name" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="text" name='subcategory_name' className="input input-bordered w-full" placeholder="Subcategory Name" />
                        <input type="text" name='description' className="input input-bordered w-full" placeholder="About the Item" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="number" name='price' className="input input-bordered w-full" placeholder="Price" />
                        <input type="text" name='rating' className="input input-bordered w-full" placeholder="Rating (0 to 5)" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="text" name='customization' className="input input-bordered w-full" placeholder="Type Yes or No" />
                        <input type="number" name='processing_time' className="input input-bordered w-full" placeholder="How many days?" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="text" name='stock_status' className="input input-bordered w-full" placeholder="In stock/Made to Order" />
                        <input type="text" name='user_name' className="input input-bordered w-full" placeholder="Name of the User" />
                    </div>
                    <div className="flex gap-4">
                        <input type="email" name='user_email' className="input input-bordered w-full" placeholder="Email of the User" />
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