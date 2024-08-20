import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div className='my-20'>
            <Fade>
                <h2 className='text-2xl font-bold text-center mb-8'>About Us</h2>
            </Fade>
            <div className='text-justify grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 mx-auto'>
                <div>
                    <h4 className='text-lg font-bold text-center'>Our Story</h4>
                    <p>
                        At Timber & Twine, we believe in the beauty of handcrafted art. Our journey began with a simple idea: to bring the natural elegance of jute and wood into homes and lives. What started as a small collection of handmade items has blossomed into a thriving business, cherished by customers who value authenticity, quality, and the story behind every piece.

                        We’re more than just a store; we’re a community of artisans, designers, and craft enthusiasts dedicated to preserving the time-honored traditions of woodworking and jute craftsmanship. Each item in our collection is a testament to the skill and passion of our artisans, who pour their heart into every creation. Whether it’s a rustic wooden table or a finely woven jute basket, every piece tells a story—a story of heritage, creativity, and sustainability.
                    </p>
                </div>
                <div>
                    <h4 className='text-lg font-bold text-center'>What We Offer</h4>
                    <ul>
                        <li>Handcrafted Wooden Products: From elegant furniture to decorative items, our wooden products are crafted from the finest, sustainably sourced wood. Each piece is designed to enhance your living space with warmth and natural beauty.</li>
                        <li>Jute Creations: Our jute collection features everything from versatile storage solutions to charming home décor. Made from eco-friendly, biodegradable fibers, these products are as sustainable as they are stylish.</li>
                        <li>Custom Designs: Looking for something truly unique? We offer custom designs that allow you to bring your vision to life. Whether it’s a bespoke piece of furniture or a personalized gift, we’re here to make it happen.</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold text-center'>Our Mission</h4>
                    <p>
                        Our mission is to create beautiful, functional pieces that connect people to the natural world and to each other. We believe that our homes should be filled with items that not only serve a purpose but also inspire joy and reflection. By blending traditional craftsmanship with contemporary design, we offer products that are both timeless and uniquely modern.
                    </p>
                </div>
                <div>
                    <h4 className='text-lg font-bold text-center'>Join Our Journey</h4>
                    <p>
                        At Timber & Twine, we’re always exploring new ideas and designs. We invite you to join us on this journey of discovery, creativity, and craftsmanship. Whether you’re a seasoned collector or a first-time buyer, we’re here to help you find the perfect piece for your home.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;