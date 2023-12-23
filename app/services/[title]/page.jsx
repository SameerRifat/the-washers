'use client'
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
// pages/services/[title].js

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const services = [
    {
        imgSrc: '/rugsCleaningBanner2.jpg',
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
        imgSrc: '/chairCleaingBanner.jpg',
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
    {
        imgSrc: '/houseCleaningBanner.jpg',
        title: 'House Cleaning Service',
        desc: 'House Cleaning Service Description'
    },
]

const ServiceDetail = ({ params }) => {
    const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';

    const service = services.find((s) => s.title === formattedTitle);

    return (
        <>
            <div className='w-full h-[10vh] xxxs:h-[15vh] xxs:h-[20vh] xs:h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] relative'>
                <Image
                    src={service.imgSrc}
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-10 pt-[60px] sm:pt-[70px]'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='font-semibold xxxs:font-bold xs:font-extrabold text-xl xxxs:text-2xl xs:text-4xl sm:text-5xl text-white flex flex-col gap-0.5 xxs:gap-1 xs:gap-3 sm:gap-4 mb-1 sm:mb-3 md:mb-5'>
                            {service.title}
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
            <div className='my-10 text-center'>
                <SectionHeading>{service.title}</SectionHeading>
            </div>
        </>
    );
};

export default ServiceDetail;
