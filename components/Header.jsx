"use client"

import React, { useEffect, useState } from 'react';
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
    const [forceRerender, setForceRerender] = useState(false);

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 581, maxWidth: 1280 });

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen]);


    return (
        <div key={forceRerender} className='w-full h-[35vh] xxs:h-[40vh] xs:h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] relative'>
            <Image
                // src={isSmallScreen ? image2 : image}
                src={isSmallScreen ? image2 : image}
                alt="cleaning service banner"
                width={1200}
                height={1000}
                quality={95}
                priority={true}
                className='max-w-full w-full h-full'
            />
            <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-20 pt-[60px] sm:pt-[70px] pb-2 xxs:pb-3 xs:pb-5 lg:pb-[50px]'>
                <div className='w-[90%] mx-auto h-full flex flex-col justify-end'>
                    <h1 className='font-bold xs:font-bold text-xl xxxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white flex flex-col gap-0.5 xxs:gap-1 sm:gap-2 lg:gap-4 mb-3 lg:mb-5 leading-none
                                    bg-black/5 w-fit p-1 rounded-lg'
                    >
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
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 640, maxWidth: 1280 });

    const [forceRerender, setForceRerender] = useState(false);

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen]);

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
            image: "/sofaCleaningBanner.jpg",
            image2: "/mediumScreeenBanner4.jpg",
            // image3: "/mediumScreeenBanner1.jpg",
            title: ["Sofa Cleaning", "Services"],
        },
        {
            image: "/rugsCleaningBanner2.jpg",
            image2: "/rugs5.jpg",
            // image3: "/mediumScreeenBanner2.jpg",
            title: ["Carpet/Rugs Cleaning", "Services"],
        },
        {
            image: "/MattressBanner.jpg",
            image2: "/mattress8.jpg",
            // image3: "/mediumScreeenBanner3.jpg",
            title: ["Mattress Cleaning", "Services"],
        },
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

            <div key={forceRerender} className='flex flex-col lg:flex-row bg-gradient-to-r lg:bg-none from-blue-500 to-green-400'>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-blue-500 lg:to-green-400 lg:flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
                    <div className='text-4xl'>
                        <UpdateOutlinedIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>7 Days a Week</h3>
                        <p className='text-white'>Book our services online, available every day for your convenience</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 bg-gradient-to-b from-[#037981] to-[#04aab6] flex-[0.8] max-w-[580px] mx-auto relative'>
                    <div className='text-4xl'>
                        <HomeWorkOutlinedIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>Our Services Areas</h3>
                        <p className='text-white'>We provide cleaning services in Dubai, Sharjah, and Ajman</p>
                    </div>
                    <div className='w-full h-1 lg:h-2 absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-green-500'>

                    </div>
                </div>
                <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-green-400 lg:to-blue-500 flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
                    <div className='text-4xl'>
                        <WhatsAppIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-semibold text-xl'>Get Free Quote</h3>
                        <p className='text-white'>WhatsApp or call us to get a free quote for our services</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;


// "use client"

// import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';
// import Link from 'next/link';
// import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
// import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { useMediaQuery } from 'react-responsive';

// const SlideContent = ({ image, image2, title, image3 }) => {
//     const [forceRerender, setForceRerender] = useState(false);

//     const isSmallScreen = useMediaQuery({ maxWidth: 580 });
//     const isMediumScreen = useMediaQuery({ minWidth: 581, maxWidth: 1280 });

//     useEffect(() => {
//         setForceRerender(prevState => !prevState);
//     }, [isSmallScreen, isMediumScreen]);


//     return (
//         <div key={forceRerender} className='w-full h-[35vh] xxs:h-[40vh] xs:h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] relative'>
//             <Image
//                 // src={isSmallScreen ? image2 : image}
//                 src={isSmallScreen ? image2 : (isMediumScreen ? image3 : image)}
//                 alt="cleaning service banner"
//                 width={1200}
//                 height={1000}
//                 quality={95}
//                 priority={true}
//                 className='max-w-full w-full h-full'
//             />
//             <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-20 pt-[60px] sm:pt-[70px] pb-2 xxs:pb-3 xs:pb-5 lg:pb-[50px]'>
//                 <div className='w-[90%] mx-auto h-full flex flex-col justify-end'>
//                     <h1 className='font-bold xs:font-bold text-xl xxxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white flex flex-col gap-0.5 xxs:gap-1 sm:gap-2 lg:gap-4 mb-2 sm:mb-3 lg:mb-5 leading-none
//                                     bg-black/5 w-fit p-1 rounded-lg'
//                     >
//                         {title.map((text, index) => (
//                             <span key={index}>{text}</span>
//                         ))}
//                     </h1>
//                     <Link
//                         href='/contact'
//                         className='primaryBtn'
//                         style={{}}
//                     >
//                         Request a Call Back
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };


// const Header = () => {
//     const isSmallScreen = useMediaQuery({ maxWidth: 640 });
//     const isMediumScreen = useMediaQuery({ minWidth: 640, maxWidth: 1280 });

//     const [forceRerender, setForceRerender] = useState(false);

//     useEffect(() => {
//         setForceRerender(prevState => !prevState);
//     }, [isSmallScreen]);

//     const settings = {
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         cssEase: "linear",
//         // speed: 1000,
//         pauseOnHover: false
//     };

//     const slides = [
//         {
//             image: "/sofaCleaningBanner.jpg",
//             image2: "/mediumScreeenBanner4.jpg",
//             image3: "/mediumScreeenBanner1.jpg",
//             title: ["Sofa Cleaning", "Services"],
//         },
//         {
//             image: "/carpetCleaningBanner.jpg",
//             image2: "/mediumScreeenBanner3.jpg",
//             image3: "/mediumScreeenBanner2.jpg",
//             title: ["Fast", "Reliable & Efficient", "Services"],
//         },
//         {
//             image: "/rugsCleaningBanner2.jpg",
//             image2: "/sofaCleaningComarison2.jpg",
//             image3: "/mediumScreeenBanner3.jpg",
//             title: ["Get A Free Quote", "Need a help?", "Just Click Below"],
//         },
//         {
//             image: "/homeMaidBanner3.jpg",
//             image2: "/test5.jpeg",
//             image3: "/mediumScreeenBanner4.jpg",
//             title: ["Our Mission", "To Give You More", "Free Time"],
//         }
//     ];

//     return (
//         <>
//             <header>
//                 <div className='w-full m-0 p-0 overflow-hidden'>
//                     <Slider {...settings} className='h-full w-full'>
//                         {slides.map((slide, index) => (
//                             <SlideContent key={index} {...slide} />
//                         ))}
//                     </Slider>
//                 </div>
//             </header>

//             <div key={forceRerender} className='flex flex-col lg:flex-row bg-gradient-to-r lg:bg-none from-blue-500 to-green-400'>
//                 <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-blue-500 lg:to-green-400 lg:flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
//                     <div className='text-4xl'>
//                         <UpdateOutlinedIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <h3 className='text-white font-semibold text-xl'>7 Days a Week</h3>
//                         <p className='text-white'>Book our services online, available every day for your convenience</p>
//                     </div>
//                 </div>
//                 <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 bg-gradient-to-b from-[#037981] to-[#04aab6] flex-[0.8] max-w-[580px] mx-auto relative'>
//                     <div className='text-4xl'>
//                         <HomeWorkOutlinedIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <h3 className='text-white font-semibold text-xl'>Our Services Areas</h3>
//                         <p className='text-white'>We provide cleaning services in Dubai, Sharjah, and Ajman</p>
//                     </div>
//                     <div className='w-full h-1 lg:h-2 absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-green-500'>

//                     </div>
//                 </div>
//                 <div className='flex gap-3 items-center lg:justify-center px-5 py-10 xs:p-10 lg:bg-gradient-to-r lg:from-green-400 lg:to-blue-500 flex-1 max-w-[580px] xs:w-[580px] xs:mx-auto'>
//                     <div className='text-4xl'>
//                         <WhatsAppIcon className=' text-white' style={isSmallScreen ? {fontSize: '40px'} : (isMediumScreen ? {fontSize: '50px'} : {fontSize: '60px'})}/>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <h3 className='text-white font-semibold text-xl'>Get Free Quote</h3>
//                         <p className='text-white'>WhatsApp or call us to get a free quote for our services</p>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Header;


