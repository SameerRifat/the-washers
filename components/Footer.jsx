'use client'

import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        children: [
            {
                id: 1,
                title: 'Mattress Cleaning',
                href: '/services/Mattress-Cleaning',
            },
            {
                id: 2,
                title: 'Carpet Cleaning',
                href: '/services/Carpet-Cleaning',
            },
            {
                id: 3,
                title: 'Rugs Cleaning',
                href: '/services/Rugs-Cleaning',
            },
            {
                id: 4,
                title: 'Curtains Cleaning',
                href: '/services/Curtains-Cleaning',
            },
            {
                id: 5,
                title: 'Deep Cleaning',
                href: '/services/Deep-Cleaning',
            },
            {
                id: 6,
                title: 'Glass Cleaning',
                href: '/services/Glass-Cleaning',
            },
            {
                id: 7,
                title: 'House Maid',
                href: '/services/House-Maid',
            },
            {
                id: 8,
                title: 'Sofa Cleaning',
                href: '/services/Sofa-Cleaning',
            },
            {
                id: 9,
                title: 'House Cleaning',
                href: '/services/House-Cleaning',
            },
        ],
    },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact' },
]

const Footer = () => {
    return (
        <footer className='bg-[url(/3.png)] '>
            <div className='pt-10 bg-blue-950/40'>
                <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 text-white'>
                    <div className=' order-3 sm:order-1'>
                        <h2 className='font-bold text-xl sm:text-2xl text-white mb-2'>Information</h2>
                        <div className='flex gap-2 pb-3 text-center'>
                            <div className='text-center'>
                                <FmdGoodIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1 text-start'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Head Office</h3>
                                <span className='text-sm'>K8 Tower Al Taawn,</span>
                                <span className='text-sm'>Sharjah, UAE</span>
                            </div>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <div>
                                <LocalPhoneOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Phone Number</h3>
                                <span className='text-sm'>+971 55 792 4200</span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <EmailOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-medium sm:font-semibold sm:text-lg'>Email Address</h3>
                                <span className='text-sm'>info@thewashers.com</span>
                            </div>
                        </div>
                    </div>
                    <div className=' order-2'>
                        <h2 className='font-bold text-xl sm:text-2xl text-white mb-2'>Quick Links</h2>
                        <ul className='ml-5 flex flex-col gap-5'>
                            {navigation.map((navLink, ind) => {
                                if (navLink.children) {
                                    return (
                                        <Disclosure as="div" className="" key={ind}>
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center gap-2">
                                                            <span className="flex items-center">
                                                                {open ? (
                                                                    <KeyboardArrowDownIcon className=" text-green-500 font-bold" aria-hidden="true" fontSize='medium' />
                                                                ) : (
                                                                    <KeyboardArrowRightIcon className=" text-green-500 font-bold" aria-hidden="true" fontSize='medium' />
                                                                )}
                                                            </span>
                                                            <span
                                                                className=" hover:text-green-500 transition-all"
                                                            >
                                                                Services
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pl-6 pt-2">
                                                        <div className="grid grid-cols-2 gap-y-2">
                                                            {navLink.children.map((child) => (
                                                                <div key={child.id} className="flex items-center hover:text-green-500 hover:underline w-fit h-fit font-normal text-sm">
                                                                    <Link
                                                                        href={child.href}
                                                                        onClick={() => setOpen(false)}
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                    {/* <p onClick={() => handleCategoryChange(category)} className="cursor-pointer min-w-0 flex-1 text-gray-500">
                                                                        {category}
                                                                    </p> */}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )
                                } else {
                                    return (
                                        <li key={ind} className='flex gap-4 items-center hover:underline w-fit text-white'>
                                            <span className='bg-green-500 w-2 h-2 rounded-sm'></span>
                                            <Link href={navLink.href} className='hover:text-green-500'>{navLink.name}</Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className=' order-1 sm:order-3 flex flex-col '>
                        <div className='flex items-start justify-start h-20 w-40'>
                            {/* <Link href='/' className=' w-full h-full relative'> */}
                            <Image src="/logo2.png" alt="Logo" quality={95} priority={true} width={150} height={100} className='max-w-full w-full h-auto' />
                            {/* <h2 className='font-bold xxxs:font-extrabold text-transparent text-xl xxxs text-xl:sm:text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2> */}
                            {/* </Link> */}
                        </div>
                        <p className='text-sm pl-3 -mt-2'>
                            <span className='font-medium'>TheWashers</span> is a professional cleaning company that is fully insured and bonded and will serve all your cleaning services needs in a professional way through an immense range of environment friendly safe - cleaning products, and with a dedicated team of professionals, to build the customers' satisfaction, at a very reasonable cost.
                        </p>
                    </div>
                </div>
                <div className='py-5 border-t border-gray-200 mt-8 text-center text-xs text-white'>
                    Copyright © 2020 TheWashers. All right reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer