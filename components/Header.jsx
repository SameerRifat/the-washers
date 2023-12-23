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

const SlideContent = ({ image, title }) => (
    <div className='w-full h-[25vh] xxs:h-[30vh] xs:h-[40vh] md:h-[50vh] xl:h-[80vh] relative'>
        <Image
            src={image}
            alt="banner"
            width={1200}
            height={1000}
            quality={95}
            priority={true}
            className='max-w-full w-full h-full'
        />
        <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-40 pt-[60px] sm:pt-[70px] pb-5 sm:pb-[50px]'>
            <div className='w-[90%] mx-auto h-full flex flex-col justify-end'>
                <h1 className='font-bold xs:font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white flex flex-col gap-1 xs:gap-3 sm:gap-4 mb-3 sm:mb-5'>
                    {title.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h1>
                <Link
                    href='/contact'
                    className='px-4 xs:px-6 py-2 xs:py-2.5 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium xs:font-semibold text-sm xs:text-base sm:text-lg rounded-full shadow-lg  flex w-fit
            outline-none hover:scale-105 focus:scale-105 active:scale-100 hover:from-blue-600 hover:to-green-600'
                    style={{}}
                >
                    Request a Call Back
                </Link>
            </div>
        </div>
    </div>
);



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
            title: ["#Cleaning", "Services in UAE"],
        },
        {
            image: "/carpetCleaningBanner.jpg",
            title: ["Fast", "Reliable & Efficient", "Services"],
        },
        {
            image: "/rugsCleaningBanner2.jpg",
            title: ["Get A Free Quote", "Need a help?", "Just Click Below"],
        },
        {
            image: "/homeMaidBanner3.jpg",
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


