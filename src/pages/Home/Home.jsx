import React from 'react';
import AboutUs from '../../components/AboutUs';
import ArtCraftCategories from '../../components/ArtCraftCategories';
import CraftItems from '../../components/CraftItems';
import Slider from '../../components/Slider';
import SustainEthics from '../../components/SustainEthics';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <ArtCraftCategories></ArtCraftCategories>
            <AboutUs></AboutUs>
            <SustainEthics></SustainEthics>
        </div>
    );
};

export default Home;