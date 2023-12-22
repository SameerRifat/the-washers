"use client"

import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Dialog } from '@headlessui/react';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathName = usePathname();
    const isNotHomePage = pathName.includes('contact')

    return (
        <>
            <nav className={`absolute top-0 left-0 w-full h-[60px] sm:h-[70px] bg-black/40  flex z-50 `}>
            {/* <nav className={`absolute top-0 left-0 w-full h-[70px] ${!isNotHomePage && 'bg-black/40'} ${isNotHomePage && 'bg-black/90'}  flex z-50 `}> */}
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

export default Navbar;


