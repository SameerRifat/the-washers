"use client"

import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from './SectionHeading';

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

// const services = [
//     {
//         imgSrc: '/fabricSofa.jpg',
//         title: 'Fabric & Suede Sofa Clean',
//     },
//     {
//         imgSrc: '/leatherSofa1.jpg',
//         title: 'Leather Sofa Cleaning',
//     },
//     {
//         imgSrc: '/sofaCumBed.jpg',
//         title: 'Sofa Cum Bed Clean',
//     },
// ]
const services = [
    {
        imgSrc: '/fabricSofa.jpg',
        title: 'Sofa Clean',
    },
    {
        imgSrc: '/mattress1.jpg',
        title: 'Mattress Cleaning',
    },
    {
        imgSrc: '/carpet1.jpg',
        title: 'Carpet Cleaning',
    },
    {
        imgSrc: '/rugs1.jpg',
        title: 'Rugs Cleaning',
    },
    {
        imgSrc: '/curtains3.jpg',
        title: 'Curtains Cleaning',
    },
    {
        imgSrc: '/chairCleaning1.jpg',
        title: 'Chairs Cleaning',
    },
    {
        imgSrc: '/glassCleaning5.jpg',
        title: 'Glass Cleaning',
    },
    {
        imgSrc: '/deepClean.jpg',
        title: 'Deep Cleaning',
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
    // const settings2 = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     cssEase: "linear",
    //     // speed: 1000
    // };
    var settings2 = {
        dots: true,
        infinite: true,
        autoplay: true,
        // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // centerMode: true, // Add centerMode
        // centerPadding: '60px', // Adjust the padding value as needed
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                      initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-[93%] sm:w-[90%] mx-auto my-20 max-w-[1600px]'>

            <div className='mb-20'>
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

            <SectionHeading>Other Services</SectionHeading>
            <div className='w-full services overflow-hidden'>
                <Slider {...settings2} className='h-full w-full px-3'>
                    {services.map((slide, index) => {
                        return (
                            <div className='p-3 lg:p-4 my-3 rounded-lg border border-gray-500/10 group hover:scale-[1.03] transition-all cursor-pointer shadow-lg hover:shadow-md'>
                                <Image
                                    key={slide.title}
                                    src={slide.imgSrc}
                                    alt="service image"
                                    width={350}
                                    height={350}
                                    quality={95}
                                    priority={true}
                                    className='max-w-full w-full h-full sm:h-[300px] rounded-lg'
                                />
                                <h2 className='mt-5 text-xl font-bold text-center'>{slide.title}</h2>

                                {/* Apply shadow styles on hover */}
                                <style jsx>{`
                                        .group:hover {
                                        box-shadow: 0 0 10px rgba(0, 0, 255, 0.5), 0 0 10px rgba(0, 255, 0, 0.5);
                                        }
                                `}</style>
                            </div>
                            // <div className='p-3 my-3 rounded-lg shadow-lg border border-gray-500/10 hover:scale-[1.03] transition-all cursor-pointer hover:shadow-blue-500'>
                            //     <Image
                            //         key={slide.title}
                            //         src={slide.imgSrc}
                            //         alt="service image"
                            //         width={350}
                            //         height={350}
                            //         quality={95}
                            //         priority={true}
                            //         className='max-w-full w-full h-full sm:h-[300px] rounded-lg '
                            //     />
                            //     <h2 className='mt-5 text-xl font-bold text-center'>{slide.title}</h2>
                            // </div>
                        )
                    })}
                </Slider>
            </div>
            {/* <div className='mt-10'>
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
                                        <li className='mb-1'>Dry vacuuming to remove crumbs & dirt particles</li>
                                        <li>Wet shampooing & vacuuming to treat tough stains and spillages</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}
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