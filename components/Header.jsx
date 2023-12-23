"use client"

import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from 'react-responsive';

const SlideContent = ({ image, image2, title }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 580 }); 

    return (
        <div className='w-full h-[30vh] xxs:h-[40vh] xs:h-[35vh] sm:[23vh] md:h-[45vh] xl:h-[80vh] relative'>
            <Image
                src={isSmallScreen ? image2 : image}
                alt="banner"
                width={1200}
                height={1000}
                quality={95}
                priority={true}
                className='max-w-full w-full h-full'
            />
            <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-10 pt-[60px] sm:pt-[70px] pb-1 xxs:pb-2 xs:pb-5 sm:pb-[50px]'>
                <div className='w-[90%] mx-auto h-full flex flex-col justify-end'>
                    <h1 className='font-bold xs:font-extrabold text-xl xxs:text-2xl xs:text-4xl sm:text-5xl lg:text-6xl text-white flex flex-col gap-0.5 xxs:gap-1 xs:gap-3 sm:gap-4 mb-2 sm:mb-3 md:bottom-5 leading-none'>
                        {title.map((text, index) => (
                            <span key={index}>{text}</span>
                        ))}
                    </h1>
                    <Link
                        href='/contact'
                        className='primaryBtn'
                        style={{}}
                    >
                        Request a Call Back
                    </Link>
                </div>
            </div>
        </div>
    );
};


const Header = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        // speed: 1000,
        pauseOnHover: false
    };

    const slides = [
        {
            image: "/banner1.jpg",
            image2: "/test2.jpeg",
            title: ["#Cleaning", "Services in UAE"],
        },
        {
            image: "/carpetCleaningBanner.jpg",
            image2: "/test3.jpeg",
            title: ["Fast", "Reliable & Efficient", "Services"],
        },
        {
            image: "/rugsCleaningBanner2.jpg",
            image2: "/test4.jpeg",
            title: ["Get A Free Quote", "Need a help?", "Just Click Below"],
        },
        {
            image: "/homeMaidBanner3.jpg",
            image2: "/test5.jpeg",
            title: ["Our Mission", "To Give You More", "Free Time"],
        }
    ];

    return (
        <>
            <header>
                <div className='w-full m-0 p-0 overflow-hidden'>
                    <Slider {...settings} className='h-full w-full'>
                        {slides.map((slide, index) => (
                            <SlideContent key={index} {...slide} />
                        ))}
                    </Slider>
                </div>
            </header>

            <div className='flex flex-col lg:flex-row bg-gradient-to-r lg:bg-none from-blue-500 to-green-400'>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-blue-500 lg:to-green-400 lg:flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
                    <div className='text-4xl'>
                        <UpdateOutlinedIcon className='w-12 h-12 text-white' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>24 / 7 Booking</h3>
                        <p className='text-white'>Book our service online 24/7 available</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 bg-gradient-to-b from-[#037981] to-[#04aab6] flex-[0.8] max-w-[580px] mx-auto relative'>
                    <div className='text-4xl'>
                        <HomeWorkOutlinedIcon className='w-12 h-12 text-white' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>Service in UAE</h3>
                        <p className='text-white'>Commercial & Residential Building Cleaning in Dubai, Sharjah & Ajman </p>
                    </div>
                    <div className='w-full h-1 lg:h-2 absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-green-500'>

                    </div>
                </div>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-green-400 lg:to-blue-500 flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
                    <div className='text-4xl'>
                        <WhatsAppIcon className='w-12 h-12 text-white' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>Get Free Quote</h3>
                        <p className='text-white'>WhatsApp or call us to get free quote about our service</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;


