'use client'
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const ServiceDetail = () => {

    const [forceRerender, setForceRerender] = useState(false);

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 581, maxWidth: 1280 });


    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen, isMediumScreen]);

    return (
        <>
            <div key={forceRerender} className='w-full h-[20vh] xxxs:h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] relative'>
                <Image
                    // src={service.banner1}
                    src={isSmallScreen ? '/aboutUsBanner3.jpg' : (isMediumScreen ? '/aboutUsBanner2.jpg' : '/aboutUsBanner1.jpg')}
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full'
                />
            </div>

            <div className='w-[90%] max-w-[1600px] mx-auto my-14'>
                <div className='mb-2 w-full lg:w-[90%] xl:w-[80%] lg:mx-auto'>
                    <h2 className='font-bold md:font-extrabold text-2xl sm:text-3xl '>Welcome to TheWashers Cleaning Services:</h2>
                    {/* <div className='absolute left-1/2 -translate-x-1/2  w-36 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mb-8 mt-1 rounded-sm'></div> */}
                </div>
                <div className='w-full lg:w-[90%] xl:w-[80%] lg:mx-auto'>
                    <div className=' mt-5 mb-10'>
                        <div className='flex flex-col gap-3'>
                            <p className='about-us-desc'>
                                At TheWashers, we extend a warm welcome to those seeking unparalleled cleaning services in Dubai. Our commitment to excellence and customer satisfaction sets us apart in the industry.
                            </p>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Our Commitment to Quality:
                                </h3>
                                <p className='about-us-desc'>
                                    Discover a level of professionalism that goes beyond the ordinary. Our team is dedicated to delivering high-level cleaning services that redefine standards in Dubai.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Vision and Mission:
                                </h3>
                                <p className='about-us-desc'>
                                    Our vision is clear - to be the premier Maid Service provider in Dubai. Every cleaning task, whether for commercial or residential spaces, is approached with a mission to infuse a personal touch into professional quality.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Core Values:
                                </h3>
                                <p className='about-us-desc'>
                                    At the heart of our operations are values of honesty, punctuality, and integrity. We believe in upholding these principles in every aspect of our service.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Safety and Hygiene Measures:
                                </h3>
                                <p className='about-us-desc'>
                                    Your safety and hygiene are paramount to us. Our staff adheres to the highest standards, ensuring that every cleaning project is executed with precision and care.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Attention to Detail:
                                </h3>
                                <p className='about-us-desc'>
                                    Experience cleaning that is not just thorough but also tailored to your individual needs. Our meticulous approach ensures no detail is overlooked in making your space spotless.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Specialized Cleaning Services:
                                </h3>
                                <p className='about-us-desc'>
                                    Beyond general cleaning, we specialize in services such as Tiles Grout Cleaning and marble polishing. No matter the requirement, we excel in delivering perfection.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Customer Satisfaction Guarantee:
                                </h3>
                                <p className='about-us-desc'>
                                    Our commitment to your satisfaction is unwavering. If there's ever an issue, we'll fix it. If you're still dissatisfied, we offer a hassle-free refund policy.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Competitive Pricing:
                                </h3>
                                <p className='about-us-desc'>
                                    Discover the advantage of competitive pricing without compromising on quality. Obtain a quick, no-pressure estimate over the phone or through email.
                                </p>
                            </div>
                            <div>
                                <h3 className='about-us-subheadinig'>
                                    Choose TheWashers for a Clean and Secure Space:
                                </h3>
                                <p className='about-us-desc'>
                                    Opt for TheWashers Cleaning Services for an experience that combines professionalism, security, and affordability. Your satisfaction is not just our goal; it's our commitment.
                                </p>
                            </div>
                        </div>
                        <div className='w-auto xl:w-[90%] h-auto mx-auto mt-5 sm:mt-10'>
                            <Image
                                src={isMediumScreen ? '/aboutUsDetail1.jpg' : '/aboutUsDetail2.jpg'}
                                alt="service image"
                                width={350}
                                height={350}
                                quality={95}
                                priority={true}
                                className='max-w-full w-full h-auto rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
