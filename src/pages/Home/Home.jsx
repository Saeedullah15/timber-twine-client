import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import AboutUs from '../../components/AboutUs';
import ArtCraftCategories from '../../components/ArtCraftCategories';
import CraftItems from '../../components/CraftItems';
import Slider from '../../components/Slider';
import SustainEthics from '../../components/SustainEthics';

const Home = () => {
    const [craftItems, setCraftItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://timber-twine-server.vercel.app/craftItems")
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                setCraftItems(data);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        fetch("https://timber-twine-server.vercel.app/subcategories")
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                setCategories(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Slider></Slider>
            {/* craft items section */}
            <section className='my-20'>
                {
                    loading ?
                        <div className='flex justify-center mt-3 mb-6'>
                            <span className="loading loading-spinner text-info"></span>
                        </div>
                        :
                        " "
                }
                <Fade>
                    <h2 className='text-2xl font-bold text-center mb-8'>Some Craft Items</h2>
                </Fade>
                <div className='flex md:flex-row flex-col flex-wrap justify-center items-center gap-10'>
                    {
                        craftItems.map(eachCraftItem => <CraftItems
                            key={eachCraftItem._id}
                            eachCraftItem={eachCraftItem}
                        ></CraftItems>)
                    }
                </div>
            </section>
            {/* sub categories section */}
            <section>
                {
                    loading ?
                        <div className='flex justify-center mt-3 mb-6'>
                            <span className="loading loading-spinner text-info"></span>
                        </div>
                        :
                        " "
                }
                <Fade>
                    <h2 className='text-2xl font-bold text-center mb-8'>Craft Categories</h2>
                </Fade>
                <div className='flex md:flex-row flex-col flex-wrap justify-center items-center gap-4'>
                    {
                        categories.map(category => <ArtCraftCategories
                            key={category._id}
                            category={category}
                        ></ArtCraftCategories>)
                    }
                </div>
            </section>
            <AboutUs></AboutUs>
            <SustainEthics></SustainEthics>
        </div>
    );
};

export default Home;