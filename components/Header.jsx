"use client"

import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Dialog } from '@headlessui/react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="absolute top-0 left-0 w-full h-[70px] flex z-50">
                <div className='w-[90%] mx-auto max-w-[1600px] flex justify-between'>
                    <div className=' flex items-center'>
                        <Link href='/'>
                            {/* <Image src="/logo.png" alt="Logo" width={100} height={50} /> */}
                            <h2 className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2>
                        </Link>
                    </div>
                    <div className="hidden md:flex  ">
                        <div className='space-x-10 text-base font-semibold flex items-center'>
                            {navigation.map((navLink) => {
                                return (
                                    <Link
                                        key={navLink.name}
                                        href={navLink.href}
                                        className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-500 hover:to-green-500 transition-all'
                                    >
                                        {navLink.name}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className='bg-gradient-to-b from-blue-500 to-green-500 h-[60px] ml-7 flex items-center gap-1 px-4 rounded-br-3xl rounded-bl-3xl'>
                            <LocalPhoneOutlinedIcon className='text-white'/>
                            <span className='text-white text-lg font-extrabold'>800 939</span>
                        </div>
                    </div>
                    <button onClick={() => setOpen(true)} className='md:hidden text-white'>
                        <MenuOutlinedIcon />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="md:hidden" open={open} onClose={setOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href='/' className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
                            {/* <Image src="/logo.png" alt="Logo" width={100} height={50} /> */}
                            <h2 className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="flex flex-col justify-start gap-5 ">
                            {navigation.map((navLink) => {
                                return (
                                    <Link key={navLink.name}
                                        href={navLink.href}
                                        onClick={() => setOpen(false)}
                                        className='text-black w-fit px-2 py-1 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-500 hover:to-green-500 transition-all'
                                    >
                                        {navLink.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
};


const SlideContent = ({ image, title }) => (
    <div className='w-full h-[40vh] xs:h-[60vh] md:h-[95vh] relative'>
        <Image
            src={image}
            alt="banner"
            width={1200}
            height={1000}
            quality={95}
            priority={true}
            className='max-w-full w-full h-full'
        />
        <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-40'>
            <div className='ml-5 xs:ml-8 sm:ml-14 lg:ml-20 mb-10 xs:mb-20'>
                <h1 className='font-bold xs:font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white flex flex-col gap-2 xs:gap-3 sm:gap-4 mb-5'>
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
        // speed: 1000
    };

    const slides = [
        {
            image: "/b1.jpg",
            title: ["#Cleaning &", "Maintenance", "Services in UAE"],
        },
        {
            image: "/b2.jpg",
            title: ["Fast", "Reliable & Efficient", "Services"],
        },
        {
            image: "/b3.jpg",
            title: ["Get A Free Quote", "Need a help?", "Just Click Below"],
        },
        {
            image: "/b4.jpg",
            title: ["Our Mission", "To Give You More", "Free Time"],
        }
    ];

    return (
        <>
            <Navbar />
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
                        <h3 className='text-white font-semibold text-xl'>23 / 7 Booking</h3>
                        <p className='text-white'>Book our service online 24/7 available</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 bg-gradient-to-b from-[#037981] to-[#04aab6] flex-[0.8] max-w-[580px] mx-auto relative'>
                    <div className='text-4xl'>
                        <HomeWorkOutlinedIcon className='w-12 h-12 text-white' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>All Over UAE</h3>
                        <p className='text-white'>Commercial & Residential Building Maintenance Anywhere in UAE </p>
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


