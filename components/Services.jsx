"use client"

import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        image: "/service1.jpeg",
    },
    {
        image: "/service2.jpeg",
    },
    {
        image: "/service3.jpeg",
    },
    {
        image: "/service4.jpeg",
    }
];

const services = [
    {
        imgSrc: '/fabricSofa.jpg',
        title: 'Fabric & Suede Sofa Clean',
    },
    {
        imgSrc: '/leatherSofa1.jpg',
        title: 'Leather Sofa Cleaning',
    },
    {
        imgSrc: '/fabricSofa.jpg',
        title: 'Sofa Cum Bed Clean',
    },
]

const Services = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        // speed: 1000
    };
    return (
        <div className='w-[93%] sm:w-[90%] mx-auto my-20 max-w-[1600px]'>

            <div>
                <h2 className='font-extrabold text-3xl mb-2'>Sofa Cleaning Service Company</h2>
                <p>The Washers, is a professional housekeeping company doing cleaning services all over UAE.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 mb-10'>
                    <div className='w-full my-auto'>
                        <p className='leading-7'>
                            Cleaning sofas is a diverse task, requiring a tailored approach based on the material used in their manufacturing. Our specialized team utilizes vacuum cleaners, steam machines, and duster cloths to ensure a thorough cleaning process, addressing every nook and cranny. We make informed decisions on the most suitable cleaning method, considering factors like fabric type. Whether it's shampooing or dry cleaning services, our goal is to deliver a comprehensive cleaning service that preserves your sofa's quality and appearance.
                        </p>
                        <p className='mt-5 leading-7'>
                            Our goal is to deliver a comprehensive sofa cleaning service that goes beyond surface cleaning, leaving your furniture looking and feeling rejuvenated.
                        </p>
                        {/* <p className='leading-7'>
                            The cleaning procedure will vary for each variety of sofa depending upon the type of material used in the process of manufacturing sofas. We have with us specially trained sofa cleaning professionals to intensely clean the complicated nooks and corners of sofas. Mostly, Our team uses vacuum cleaners, steam machines and duster cloth as sofa cleaning techniques.
                        </p>
                        <p className='mt-5 leading-7'>
                            Based on the type of furniture, we will decide what type of cleaning method should be employed whether shampooing or dry cleaning services.
                        </p> */}
                    </div>
                    <div className='w-full overflow-hidden'>
                        <Slider {...settings} className='h-full w-full'>
                            {slides.map((slide, index) => {
                                return (
                                    <Image
                                        key={slide.image}
                                        src={slide.image}
                                        alt="service image"
                                        width={350}
                                        height={350}
                                        quality={95}
                                        priority={true}
                                        className='max-w-full w-full h-full sm:h-[350px] rounded-lg'
                                    />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

            <h2 className='font-extrabold text-3xl text-center'>Our Services</h2>
            <div className='w-24 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto'>
            </div>
            <div className='mt-10'>
                {/* <div> */}
                {/* <h3 className='font-bold text-2xl mb-4'>Sofa Cleaning</h3> */}
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-5 lg:gap-7'>
                    {services.map((service, ind) => {
                        return (
                            <div key={ind} className='border border-gray-300 flex flex-col gap-3 rounded-lg p-2 xs:p-3 shadow-sm cursor-pointer hover:bg-gray-50 hover:scale-105 transition-all'>
                                <Image
                                    src={service.imgSrc}
                                    alt="Service image"
                                    width={200}
                                    height={200}
                                    quality={95}
                                    priority={true}
                                    className='max-w-[400] w-full h-full object-contain rounded-lg'
                                />
                                <div>
                                    <h4 className='font-semibold text-xl'>{service.title}</h4>
                                    <ul className='list-disc pl-5'>
                                        <li>Dry vacuuming to remove crumbs & dirt particles</li>
                                        <li>Wet shampooing & vacuuming to treat tough stains and spillages</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                // poster="/echoCartPoster.png"
                // style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block', margin: 'auto' }}
                >
                    <source src="/vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
        </div>
    )
}

export default Services