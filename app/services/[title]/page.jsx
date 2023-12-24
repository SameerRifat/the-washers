'use client'
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
// pages/services/[title].js

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { useMediaQuery } from 'react-responsive';
import remarkGfm from 'remark-gfm';

const services = [
    {
        banner1: '/MattressBanner.jpg',
        serviceDetailImg: '/mediumScreeenBanner2.jpg',
        banner2: '/serviceDetailBanner1.jpg',
        title: 'Mattress Cleaning',
        subtitle: 'Experience Deep Sleep Comfort with Our Mattress Cleaning Service – Revitalize Your Mattress for a Healthier Rest.',
        desc: (
            <>
                <p>
                    Ensure a restful night's sleep with our specialized Mattress Cleaning service.
                    Beyond the visible surface, mattresses can harbor dust mites, allergens, and even mold.
                    Our thorough cleaning methods aim to not only refresh the mattress but also provide a healthier sleeping environment.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li><b>Steam Cleaning:</b> Utilizing high-temperature steam to eliminate bacteria and allergens.</li>
                        <li><b>Non-Toxic Cleaning Agents:</b> Employing eco-friendly solutions safe for you and the environment.</li>
                        <li><b>Stain Removal Techniques:</b> Targeting common mattress stains for a cleaner appearance.</li>
                    </ul>
                </div>

                <div className='additional-benefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li><b>Allergen Reduction:</b> Ideal for allergy sufferers, creating a cleaner and healthier sleep space.</li>
                        <li><b>Extended Mattress Lifespan:</b> Regular cleaning promotes durability, preserving your investment.</li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/carpetCleaningBanner.jpg',
        serviceDetailImg: '/mediumScreeenBanner1.jpg',
        banner2: '/serviceDetailBanner2.jpg',
        title: 'Carpet Cleaning',
        subtitle: 'Revitalize Your Home with Our Advanced Carpet Cleaning Service – Beyond Surface Cleaning for Lasting Freshness.',
        desc: (
            <>
                <p>
                    Revitalize your home with our advanced Carpet Cleaning service.
                    Carpets act as a filter for indoor air, trapping dust and pollutants.
                    Our cleaning methods go beyond surface cleaning, ensuring a deep and lasting cleanliness.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Hot Water Extraction:</b> A thorough cleaning method effective for deep cleaning and stain removal.
                        </li>
                        <li>
                            <b>Spot Treatment:</b> Addressing specific stains with targeted cleaning solutions.
                        </li>
                        <li>
                            <b>Carpet Fiber Protection:</b> Applying protective solutions to guard against future stains.
                        </li>
                    </ul>
                </div>

                <div className='additional-benefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Improved Indoor Air Quality:</b> Removal of allergens and pollutants trapped in the carpet fibers.
                        </li>
                        <li>
                            <b>Restored Carpet Appearance:</b> Vibrant and refreshed carpets enhance the overall aesthetics of your space.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/rugsCleaningBanner.jpg',
        serviceDetailImg: '/rugs1.jpg',
        banner2: '/serviceDetailBanner3.jpg',
        title: 'Rugs Cleaning',
        subtitle: 'Elevate Your Home Decor with Our Specialized Rugs Cleaning Service – Individualized Attention for Beauty and Integrity.',
        desc: (
            <>
                <p>
                    Elevate your home decor with our specialized Rugs Cleaning service.
                    Rugs, whether antique or contemporary, receive individualized attention to preserve their beauty and integrity.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Dry Cleaning Methods:</b> Suitable for delicate and antique rugs, ensuring gentle yet effective cleaning.
                        </li>
                        <li>
                            <b>Odor Removal Techniques:</b> Addressing trapped odors to leave your rugs smelling fresh.
                        </li>
                        <li>
                            <b>Fringe Cleaning:</b> Comprehensive cleaning includes attention to rug fringes for a complete transformation.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Enhanced Rug Longevity:</b> Preserving the quality of the fibers and prolonging the life of your rugs.
                        </li>
                        <li>
                            <b>Individualized Care:</b> Tailored cleaning based on rug type, material, and specific needs.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/curtainsCleaning2.jpg',
        serviceDetailImg: '/curtrains4.jpg',
        banner2: '/serviceDetailBanner4.jpg',
        title: 'Curtains Cleaning',
        subtitle: 'Give Your Windows a Fresh Perspective with Our Curtains Cleaning Service – Beyond Dust and Odor for Enhanced Aesthetics.',
        desc: (
            <>
                <p>
                    Give your windows a fresh perspective with our Curtains Cleaning service.
                    Often overlooked, curtains can accumulate dust and odors, affecting both indoor air quality and aesthetics.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Steam Cleaning:</b> Utilizing steam for deep cleaning and sanitization, leaving your curtains fresh.
                        </li>
                        <li>
                            <b>Ironing and Pressing:</b> Ensuring wrinkle-free curtains that hang neatly.
                        </li>
                        <li>
                            <b>Color-Safe Cleaning Agents:</b> Preventing color fading during the cleaning process.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Improved Indoor Air Quality:</b> Removal of trapped pollutants contributes to a healthier living environment.
                        </li>
                        <li>
                            <b>Enhanced Window Aesthetics:</b> Clean and well-maintained curtains complement the overall appearance of your space.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/chairCleaingBanner.jpg',
        serviceDetailImg: '/chairCleaning4.jpg',
        banner2: '/serviceDetailBanner5.jpg',
        title: 'Chairs Cleaning',
        subtitle: 'Preserve the Comfort and Cleanliness of Your Seating with Our Chairs Cleaning Service – Tailored Methods for Every Chair Type.',
        desc: (
            <>
                <p>
                    Preserve the comfort and cleanliness of your seating with our Chairs Cleaning service.
                    From fabric to leather, our cleaning methods are tailored to address the unique needs of each chair.

                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Upholstery Shampooing:</b> Effective for fabric chairs, removing dirt and stains.
                        </li>
                        <li>
                            <b>Leather Conditioning:</b> Restoring and protecting leather chairs, enhancing their appearance.
                        </li>
                        <li>
                            <b>Stain Guard Application:</b> Applying protective treatments to prevent future stains.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Extended Chair Lifespan:</b> Regular cleaning contributes to the durability of your chairs.
                        </li>
                        <li>
                            <b>Extended Chair Lifespan:</b> Regular cleaning contributes to the durability of your chairs.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/glassCleaning5.jpg',
        serviceDetailImg: '/glassCleaning1.jpg',
        banner2: '/serviceDetailBanner6.jpg',
        title: 'Glass Cleaning',
        subtitle: 'Enjoy Pristine Views with Our Professional Glass Cleaning Service – Meticulous Cleaning for Clear and Unobstructed Spaces.',
        desc: (
            <>
                <p>
                    Enjoy pristine views with our professional Glass Cleaning service.
                    Windows, glass doors, and surfaces are meticulously cleaned, ensuring a clear and unobstructed outlook.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Streak-Free Cleaning Agents:</b> Achieving a spotless finish for crystal-clear glass.
                        </li>
                        <li>
                            <b>High-Reach Cleaning Equipment:</b> Accessing difficult-to-reach areas for thorough cleaning.
                        </li>
                        <li>
                            <b>Frame Cleaning:</b> Comprehensive cleaning of window frames to enhance overall aesthetics.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Improved Natural Light:</b> Clear and transparent glass maximizes sunlight, brightening your space.
                        </li>
                        <li>
                            <b>Enhanced Overall Space Aesthetics:</b> Clean glass contributes to a polished and well-maintained appearance.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/deepCleaningBanner.jpg',
        serviceDetailImg: '/deepCleaningDetail.jpg',
        banner2: '/serviceDetailBanner7.jpg',
        title: 'Deep Cleaning',
        subtitle: 'Transform Your Living Spaces with Our Comprehensive Deep Cleaning Service – Targeting Hidden Dirt for Thorough Sanitization.',
        desc: (
            <>
                <p>
                    Transform your living spaces with our comprehensive Deep Cleaning service.
                    Beyond regular cleaning, our deep cleaning targets hidden dirt, ensuring a thorough and sanitized environment.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>High-Touch Surface Sanitization:</b> Eliminating germs and bacteria on frequently touched surfaces.
                        </li>
                        <li>
                            <b>Appliance Detailing:</b> Cleaning and sanitizing household appliances for a healthier home.
                        </li>
                        <li>
                            <b>Grout and Tile Cleaning:</b> Refreshing bathroom and kitchen surfaces for a clean and hygienic space.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Healthier Living Environment:</b> Reduced allergens and contaminants contribute to improved well-being.
                        </li>
                        <li>
                            <b>Ideal for Periodic Maintenance:</b> Comprehensive cleaning for a deep reset, perfect for routine maintenance.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/sofaCleaningBanner.jpg',
        serviceDetailImg: '/mediumScreeenBanner3.jpg',
        banner2: '/sofa1.jpg',
        title: 'Sofa Cleaning',
        subtitle: 'Revitalize Your Seating Area with Our Professional Sofa Cleaning Service – Tailored Methods for Fabric and Leather Sofas.',
        desc: (
            <>
                <p>
                    Transform your living spaces with our comprehensive Deep Cleaning service.
                    Beyond regular cleaning, our deep cleaning targets hidden dirt, ensuring a thorough and sanitized environment.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Fabric Shampooing:</b> Effective for fabric sofas, removing dirt and contaminants.
                        </li>
                        <li>
                            <b>Leather Cleaning and Conditioning:</b> Preserving and protecting leather, enhancing its longevity.
                        </li>
                        <li>
                            <b>Stain and Odor Removal:</b> Targeted methods for a fresh and rejuvenated result.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Rejuvenated Seating Comfort:</b> Removal of dirt and contaminants enhances the overall sitting experience.
                        </li>
                        <li>
                            <b>Extended Sofa Lifespan:</b> Regular cleaning contributes to the durability of your sofas.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/homeMaidBanner3.jpg',
        serviceDetailImg: '/homeMaid3.jpg',
        banner2: '/serviceDetailBanner9.jpg',
        title: 'House Maid',
        subtitle: 'Experience the Convenience of a Tidy Home with Our Dedicated House Maid Service – Thorough Cleaning and Organization Tailored to Your Needs.',
        desc: (
            <>
                <p>
                    Experience the convenience of a tidy home with our dedicated House Maid Service.
                    Our housemaids are committed to providing thorough cleaning, organization, and maintenance services tailored to your specific needs.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Dusting and Vacuuming:</b> Comprehensive cleaning of living spaces, addressing dust and dirt.
                        </li>
                        <li>
                            <b>Organization and Decluttering:</b> Maintaining a neat and organized home for a stress-free environment.
                        </li>
                        <li>
                            <b>Customized Services:</b> Personalized cleaning based on individual requirements and preferences.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Clean and Welcoming Home Environment:</b> Regular upkeep ensures a comfortable and inviting living space.
                        </li>
                        <li>
                            <b>Time-Saving and Convenient:</b> Delegate household tasks for a hassle-free lifestyle, giving you more time for what matters.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        banner1: '/houseCleaningBanner.jpg',
        serviceDetailImg: '/houseCleaning.jpg',
        banner2: '/test.jpg',
        title: 'House Cleaning',
        subtitle: "Ensure a Clean and Comfortable Living Environment with Our House Cleaning Service – Tailored Cleaning Plans for Your Home's Unique Needs.",
        desc: (
            <>
                <p>
                    Ensure a clean and comfortable living environment with our House Cleaning Service.
                    From regular maintenance to deep cleaning, our services cater to the unique needs of your home.
                </p>

                <div className='service-highlights'>
                    <h2>Service Highlights:</h2>
                    <ul>
                        <li>
                            <b>Floor to Ceiling Cleaning:</b> Thorough cleaning of all surfaces, including floors, walls, and ceilings.
                        </li>
                        <li>
                            <b>Kitchen and Bathroom Sanitization:</b> Targeting high-use areas for a hygienic living space.
                        </li>
                        <li>
                            <b>Window and Glass Cleaning:</b> Enhancing natural light and overall aesthetics.
                        </li>
                    </ul>
                </div>

                <div className='additionalbenefits'>
                    <h2>Additional Benefits:</h2>
                    <ul>
                        <li>
                            <b>Tailored Cleaning Plans:</b> Customized cleaning services based on your specific requirements.
                        </li>
                        <li>
                            <b>Healthier Living Spaces:</b> Removal of dust, allergens, and contaminants for improved well-being.
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
];

const ServiceDetail = ({ params }) => {
    const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';
    const service = services.find((s) => s.title === formattedTitle);

    const [forceRerender, setForceRerender] = useState(false);

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen]);

    return (
        <>
            <div key={forceRerender} className='w-full h-[20vh] xxxs:h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] relative'>
                <Image
                    // src={service.banner1}
                    src={isSmallScreen ? service.banner2 : service.banner1}
                    alt="banner"
                    width={1200}
                    height={1000}
                    quality={95}
                    priority={true}
                    className='max-w-full w-full h-full'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-20 pt-[60px] sm:pt-[70px]'>
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

            <div className='w-[90%] max-w-[1600px] mx-auto my-14'>
                <div className='w-fit relative mb-2'>
                    <h2 className='font-bold md:font-extrabold text-2xl sm:text-3xl text-start'>{service.title} Service</h2>
                    {/* <div className='absolute left-1/2 -translate-x-1/2  w-36 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mb-8 mt-1 rounded-sm'></div> */}
                </div>
                <p>
                    {service.subtitle}
                </p>
                <div className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 mb-10'>
                        <div className=' flex flex-col gap-5'>
                            {service.desc}
                            <Link
                                href='/contact'
                                className='primaryBtn'
                            >
                                Book Service Now
                            </Link>
                        </div>
                        <div className=''>
                            <Image
                                src={service.serviceDetailImg}
                                alt="service image"
                                width={350}
                                height={350}
                                quality={95}
                                priority={true}
                                className='max-w-full w-full h-full sm:h-[350px] rounded-lg shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;


// const services = [
//     {
//         banner1: '/MattressBanner.jpg',
//         title: 'Mattress Cleaning',
//         desc: `
//             Ensure a restful night's sleep with our specialized Mattress Cleaning service.
//             Beyond the visible surface, mattresses can harbor dust mites, allergens, and even mold.
//             Our thorough cleaning methods aim to not only refresh the mattress but also provide a healthier sleeping environment.

//             Service Highlights:
//             - Steam Cleaning: Utilizing high-temperature steam to eliminate bacteria and allergens.
//             - Non-Toxic Cleaning Agents: Employing eco-friendly solutions safe for you and the environment.
//             - Stain Removal Techniques: Targeting common mattress stains for a cleaner appearance.

//             Additional Benefits:
//             - Allergen Reduction: Ideal for allergy sufferers, creating a cleaner and healthier sleep space.
//             - Extended Mattress Lifespan: Regular cleaning promotes durability, preserving your investment.
//         `,
//     },
//     {
//         banner1: '/carpetCleaningBanner.jpg',
//         title: 'Carpet Cleaning',
//         desc: 'Carpet Cleaning description'
//     },
//     {
//         banner1: '/rugsCleaningBanner.jpg',
//         title: 'Rugs Cleaning',
//         desc: 'Rugs Cleaning description'
//     },
//     {
//         banner1: '/curtainsCleaning2.jpg',
//         title: 'Curtains Cleaning',
//         desc: 'Curtains Cleaning description'
//     },
//     {
//         banner1: '/chairCleaingBanner.jpg',
//         title: 'Chairs Cleaning',
//         desc: 'Chairs Cleaning description'
//     },
//     {
//         banner1: '/glassCleaning5.jpg',
//         title: 'Glass Cleaning',
//         desc: 'Glass Cleaning description'
//     },
//     {
//         banner1: '/deepCleaningBanner.jpg',
//         title: 'Deep Cleaning',
//         desc: 'Deep Cleaning description'
//     },
//     {
//         banner1: '/sofaCleaningBanner.jpg',
//         title: 'Sofa Cleaning',
//         desc: 'Sofa Cleaning description'
//     },
//     {
//         banner1: '/homeMaidBanner3.jpg',
//         title: 'House Maid Service',
//         desc: 'House Maid Service description'
//     },
//     {
//         banner1: '/houseCleaningBanner.jpg',
//         title: 'House Cleaning Service',
//         desc: 'House Cleaning Service Description'
//     },
// ]

// const ServiceDetail = ({ params }) => {
//     const formattedTitle = params.title ? params.title.replace(/-/g, ' ') : '';

//     const service = services.find((s) => s.title === formattedTitle);

//     return (
//         <>
//             <div className='w-full h-[10vh] xxxs:h-[15vh] xxs:h-[20vh] xs:h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] relative'>
//                 <Image
//                     src={service.banner1}
//                     alt="banner"
//                     width={1200}
//                     height={1000}
//                     quality={95}
//                     priority={true}
//                     className='max-w-full w-full h-full'
//                 />
//                 <div className='w-full h-full absolute top-0 left-0 flex items-end bg-black bg-opacity-10 pt-[60px] sm:pt-[70px]'>
//                     <div className='w-full h-full flex flex-col justify-center items-center'>
//                         <h1 className='font-semibold xxxs:font-bold xs:font-extrabold text-xl xxxs:text-2xl xs:text-4xl sm:text-5xl text-white flex flex-col gap-0.5 xxs:gap-1 xs:gap-3 sm:gap-4 mb-1 sm:mb-3 md:mb-5'>
//                             {service.title}
//                         </h1>
//                         <Link
//                             href='/contact'
//                             className='primaryBtn'
//                             style={{}}
//                         >
//                             Request a Call Back
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className='my-10 text-center'>
//                 <SectionHeading>{service.title}</SectionHeading>
//             </div>
//         </>
//     );
// };

// export default ServiceDetail;
