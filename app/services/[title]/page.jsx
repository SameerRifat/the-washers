'use client'
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
// pages/services/[title].js

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const services = [
    {
        imgSrc: '/mattressCleaning2.jpg',
        title: 'Mattress Cleaning',
        desc: 'Mattress Cleaning description'
    },
    {
        imgSrc: '/carpetCleaningBanner.jpg',
        title: 'Carpet Cleaning',
        desc: 'Carpet Cleaning description'
    },
    {
        imgSrc: '/rugsCleaningBanner.jpg',
        title: 'Rugs Cleaning',
        desc: 'Rugs Cleaning description'
    },
    {
        imgSrc: '/curtainsCleaning2.jpg',
        title: 'Curtains Cleaning',
        desc: 'Curtains Cleaning description'
    },
    {
        imgSrc: '/chairCleaning1.jpg',
        title: 'Chairs Cleaning',
        desc: 'Chairs Cleaning description'
    },
    {
        imgSrc: '/glassCleaning5.jpg',
        title: 'Glass Cleaning',
        desc: 'Glass Cleaning description'
    },
    {
        imgSrc: '/deepCleaningBanner.jpg',
        title: 'Deep Cleaning',
        desc: 'Deep Cleaning description'
    },
    {
        imgSrc: '/sofaCleaningBanner.jpg',
        title: 'Sofa Cleaning',
        desc: 'Sofa Cleaning description'
    },
    {
        imgSrc: '/homeMaidBanner3.jpg',
        title: 'House Maid Service',
        desc: 'House Maid Service description'
    },
]

const ServiceDetail = ({ params }) => {
    const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';

    const service = services.find((s) => s.title === formattedTitle);

    return (
        <>
            <div className='w-full h-[20vh] xxs:h-[25vh] xs:h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] relative'>
                <Image
                    src={service.imgSrc}
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-40 pt-[60px] sm:pt-[70px]'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='font-bold xs:font-extrabold text-2xl xs:text-4xl sm:text-5xl text-white flex flex-col gap-1 xxs:gap-2 xs:gap-3 sm:gap-4 mb-1 sm:mb-3 md:mb-5'>
                            {service.title}
                        </h1>
                        <Link
                            href='/contact'
                            className='px-4 xs:px-6 py-2 xs:py-2.5 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium xs:font-semibold text-xs xxs:text-sm xs:text-base sm:text-lg rounded-full shadow-lg  flex w-fit
            outline-none hover:scale-105 focus:scale-105 active:scale-100 hover:from-blue-600 hover:to-green-600 mb-2 sm:bottom-0'
                            style={{}}
                        >
                            Request a Call Back
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-10 text-center'>
                <SectionHeading>{service.title}</SectionHeading>
            </div>
        </>
    );
};

export default ServiceDetail;
