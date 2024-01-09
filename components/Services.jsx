"use client"

import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from './SectionHeading';
import Link from 'next/link';

const slides = [
    {
        image: "/sofa1.jpg",
    },
    {
        image: "/sofa3.jpg",
    },
    {
        image: "/sofa5.jpg",
    },
    {
        image: "/b1.jpg",
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
        imgSrc: '/curtrains4.jpg',
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
        imgSrc: '/deep.jpg',
        title: 'Deep Cleaning',
    },
    {
        imgSrc: '/homeMaid3.jpg',
        title: 'House Maid',
    },
    {
        imgSrc: '/sofa6.jpg',
        title: 'Sofa Cleaning',
    },
    {
        imgSrc: '/houseCleaning.jpg',
        title: 'House Cleaning',
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
                breakpoint: 640,
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
        <div className='w-[93%] sm:w-[90%] mx-auto my-16 sm:my-20 max-w-[1600px]'>

            <div className='mb-16 lg:mb-20'>
                <h2 className='font-bold sm:font-extrabold text-2xl sm:text-3xl mb-2'>Sofa Cleaning Services</h2>
                <p>Elevate Your Living Space with TheWashersuae, a Professional Cleaning Company Offering Services in Dubai, Sharjah & Ajman.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-3 lg:mt-5'>
                    <div className='w-full my-auto'>
                        <p className='leading-7'>
                            At Thewashersuae we are commited to delivering a Deeper Clean with our Furniture and Sofa Cleaning Services in Dubai Sharjah Ajman.
                        </p>
                        <p className='mt-2 leading-7'>
                            TheWasheruae Sofa Cleaning Services provide a healthier Clean for your Furnture.
                            With our approch, you can remove deep-seated stains, pet hair and dirt from your furniture without using soapy detergents or harsh chemicals.
                            instead we rely on certified cleaning chemicals and products for 99% deeper clean and healthier home.
                        </p>
                        <ol className='mt-2 leading-7 list-decimal pl-5'>
                            <li>Book Your Sofa Cleaning Services</li>
                            <li>Our Expert will come to Your Place </li>
                            <li>They will Apply the most suitable Sofa Cleaning Method</li>
                            <li>Enjoy Your Refreshed Sofa And Healthier Home</li>
                        </ol>
                        <p className='mt-2 leading-7'>
                            Water with Chemicals Extraction and Antivral Sofa Sanitisation kill 99% of dangrous viruses and becteria your sofa will look brand new
                        </p>
                        <ol className='mt-2 leading-7 list-decimal pl-5'>
                            <li>Removing common domestic stains</li>
                            <li>Eliminating unpleasent odours </li>
                            <li>free fabric protection for longer lasting results</li>
                            <li>Done by Expert sofa cleaning Team</li>
                        </ol>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <Image
                            src="/sofa6.jpg"
                            alt="Sofa cleaning service image"
                            width={350}
                            height={350}
                            quality={95}
                            priority={true}
                            className='max-w-full w-full h-full sm:h-[350px] rounded-lg shadow-sm'
                        />
                    </div>
                </div>
            </div>
            <div className='mb-16 lg:mb-20'>
                <h2 className='font-bold sm:font-extrabold text-2xl sm:text-3xl mb-2'>Rugs/Mattress Cleaning Services</h2>
                <p>Keep your favourite rugs in pristine condition with a regular clean from a Thewashersuae Expert.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-3 lg:mt-5'>
                    <div className='w-full my-auto'>
                        <p className='leading-7'>
                            All rugs deserve a proper clean once in a while, as even with regular vacuuming and the occasional shampoo, they will wear down and become stained if not cleaned and protected professionally.
                            Households with young children and pets will find their rug needs a clean more often, and as with all kinds of cleaning there are important things to consider, the rug fibres, its age and conditions, these determine the best strategy for a successful clean.
                        </p>
                        <p className='mt-2 sm:mt-3 leading-7'>
                            Thewashersuae Expert pride themselves on the level of customer service they offer, assessing the situation to then deliver the best results.
                        </p>
                        <p className='mt-2 sm:mt-3 leading-7'>
                            As well as rug cleaning services Thewashersuae also offer protection services. Protection often works out as a cost-effective solution to furniture care, as the application of the correct protective layer will help prevent stains and dirt building up over time.
                        </p>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <Image
                            src='/mediumScreeenBanner2.jpg'
                            alt="Rugs cleaning service image"
                            width={350}
                            height={350}
                            quality={95}
                            priority={true}
                            className='max-w-full w-full h-auto sm:h-[350px] rounded-lg shadow-sm'
                        />
                    </div>
                </div>
            </div>
            <div className='mb-16 lg:mb-20'>
                <h2 className='font-bold sm:font-extrabold text-2xl sm:text-3xl mb-2'>Mattress Cleaning Services</h2>
                <p>Elevate Your Sleep Experience: Thewashersuae Expert Mattress Cleaning Services for a Fresher, Healthier Bed.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-3 lg:mt-5'>
                    <div className='w-full my-auto'>
                        <p className='leading-7'>
                            Get a better sleep wth a mattress Professionally cleaned by Thewashersuae Team
                            a good mattress can be significant investment so this means you want it to last as long possible, staying fresh as the day you bought it.
                            since you use your mattress everyday, it can be one of the least clean items in house.
                        </p>
                        <p className='mt-2 sm:mt-3 leading-7'>
                            Dead skin cells, dust and sweat all find their way into the fibers of the mattress and, without being cleand, will stay there.
                            Thewashersuae believe a clean Mattress is essential part of a happy and comfortable home.
                        </p>
                        <p className='mt-2 sm:mt-3 leading-7'>
                            Twice a year is the standard recommendation when it comes to how often you should clean your mattress.
                            Mattress becoming more advanced and expensive it is not alwayes easy to give a mattress an effective clean using normal household equipments and methods For That Thewashersuae is here for help you.
                        </p>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <Image
                            src='/mattress1.jpg'
                            alt="Mattress cleaning service image"
                            width={350}
                            height={350}
                            quality={95}
                            priority={true}
                            className='max-w-full w-full h-auto sm:h-[350px] rounded-lg shadow-sm'
                        />
                    </div>
                </div>
            </div>

            <SectionHeading>Other Services</SectionHeading>
            <div className='w-full services overflow-hidden'>
                <Slider {...settings2} className='h-full w-full px-3'>
                    {services.map((slide, index) => {
                        return (
                            <Link
                                key={slide.title}
                                href={`/services/${encodeURIComponent(slide.title.replace(/\s+/g, '-'))}`}
                                className='p-3 lg:p-4 my-3 rounded-lg border border-gray-500/10 group hover:scale-[1.03] transition-all cursor-pointer shadow-lg hover:shadow-xl outline-none'
                            >
                                <Image
                                    key={slide.title}
                                    src={slide.imgSrc}
                                    alt={`${slide.title} Service`}
                                    width={350}
                                    height={350}
                                    quality={95}
                                    priority={true}
                                    className='max-w-full w-full h-full sm:h-[300px] rounded-lg'
                                />
                                <h2 className='mt-5 text-xl font-bold text-center'>{slide.title} Service</h2>

                                <style jsx>{`
                                        .group:hover {
                                        box-shadow: 0 0 10px rgba(0, 0, 255, 0.5), 0 0 10px rgba(0, 255, 0, 0.5);
                                        }
                                `}</style>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Services