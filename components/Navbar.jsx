"use client"

import React, { Fragment, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        children: [
            {
                id: 1,
                title: 'Sofa Cleaning',
                href: '/services/Sofa-Cleaning',
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
                title: 'Mattress Cleaning',
                href: '/services/Mattress-Cleaning',
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

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathName = usePathname();
    const isNotHomePage = pathName.includes('contact')

    return (
        <>
            <nav className={`absolute top-0 left-0 w-full h-[40px] xxxs:h-[50px] xxs:h-[60px] sm:h-[70px] bg-black/40  flex z-50 shadow-lg `}>
                {/* <nav className={`absolute top-0 left-0 w-full h-[70px] ${!isNotHomePage && 'bg-black/40'} ${isNotHomePage && 'bg-black/90'}  flex z-50 `}> */}
                <div className='w-[90%] mx-auto max-w-[1600px] flex justify-between'>
                    <div className=' flex items-center'>
                        <Link href='/'>
                            <Image src="/logo2.png" alt="Logo" width={150} height={100} className='max-w-full w-28 xxxs:w-32 sm:w-40 h-auto' />
                            {/* <h2 className='font-bold xxxs:font-extrabold text-transparent text-xl xxxs:text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2> */}
                        </Link>
                    </div>
                    <div className="hidden md:flex  ">
                        <div className='space-x-10 text-base font-semibold flex items-center'>
                            {navigation.map((navLink) => {
                                if (navLink.children) {
                                    return (
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-m px-3 py-2 text-base font-medium text-white">
                                                    Services
                                                    <ArrowDropDownIcon className="-mr-1 text-white" aria-hidden="true" fontSize='medium' />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {navLink.children.map((child) => {
                                                            return (
                                                                <Menu.Item key={child.id}>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            href={child.href}
                                                                            className={classNames(
                                                                                active ? 'text-green-500 bg-gray-200 transition-all' : 'text-gray-700',
                                                                                'block px-4 py-2 text-xs shadow-sm text-gray-700 font-normal'
                                                                            )}
                                                                        >
                                                                            <span
                                                                                className='group-hover:translate-x-3'
                                                                            >
                                                                                {child.title}
                                                                            </span>
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                            )
                                                        })}
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    )
                                } else {
                                    return (
                                        <Link
                                            key={navLink.name}
                                            href={navLink.href}
                                            className='text-white font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-500 hover:to-green-500 transition-all'
                                        >
                                            {navLink.name}
                                        </Link>
                                    )
                                }
                            })}

                        </div>
                        <div className='bg-gradient-to-b from-blue-500 to-green-500 h-[60px] ml-7 hidden lg:flex items-center gap-1 px-3 rounded-br-3xl rounded-bl-3xl'>
                            <PhoneInTalkIcon className='text-white' fontSize='small'/>
                            <span className='text-white text-sm font-medium'>+971557924200</span>
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
                        <div className='flex items-start justify-start h-20 w-40'>
                            {/* <Link href='/' className=' w-full h-full relative'> */}
                            <Image src="/logo2.png" alt="Logo" quality={95} priority={true} width={150} height={100} className='max-w-full w-full h-auto' />
                            {/* <h2 className='font-bold xxxs:font-extrabold text-transparent text-xl xxxs:text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2> */}
                            {/* </Link> */}
                        </div>
                        {/* <Link href='/' className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
                            <h2 className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-tr from-blue-500 to-green-500'>TheWashers</h2>
                        </Link> */}
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 self-start"
                            onClick={() => setOpen(false)}
                        >
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                    <div className="mt-2 flow-root">
                        <div className="flex flex-col justify-start gap-5 ">
                            {navigation.map((navLink) => {
                                if (navLink.children) {
                                    return (
                                        <Disclosure as="div" className="ml-2">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2">
                                                            <span className="font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-500 hover:to-green-500 transition-all">Services</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <RemoveIcon className=" text-gray-900" aria-hidden="true" fontSize='medium'/>
                                                                ) : (
                                                                    <AddIcon className=" text-gray-900" aria-hidden="true" fontSize='medium'/>
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-3 pl-2">
                                                        <div className="space-y-3">
                                                            {navLink.children.map((child) => (
                                                                <div key={child.id} className="flex items-center text-sm py-0.5 font-normal">
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
                                        <Link key={navLink.name}
                                            href={navLink.href}
                                            onClick={() => setOpen(false)}
                                            className='text-black px-2 py-1 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-500 hover:to-green-500 transition-all w-full hover:bg-gray-100'
                                        >
                                            {navLink.name}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
};

export default Navbar;


