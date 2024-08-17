import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";

const Slider = () => {
    return (
        <>
            {/* for large device */}
            <section className='md:block hidden'>
                <Swiper className='lg:h-96 md:h-72 w-full'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    slidesPerView={2}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img className='h-full w-full' src={slider5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider4} alt="" /></SwiperSlide>
                </Swiper>
            </section>

            {/* for small device */}
            <section className='md:hidden block'>
                <Swiper className='lg:h-96 md:h-72 h-48 w-full'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img className='h-full w-full' src={slider5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-full w-full' src={slider4} alt="" /></SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Slider;