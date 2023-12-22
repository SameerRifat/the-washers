import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const Footer = () => {
    return (
        <footer className='bg-[url(/3.png)] '>
            <div className='pt-10 bg-blue-950/40'>
                <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 text-white'>
                    <div className=' order-3 sm:order-1'>
                        <h2 className='font-bold text-2xl text-white mb-2'>Information</h2>
                        <div className='flex gap-2 pb-3 text-center'>
                            <div className='text-center'>
                                <FmdGoodIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-lg'>Head Office</h3>
                                <span className='text-sm'>P.o.Box:8893</span>
                                <span className='text-sm'>Abu Dhani, UAE</span>
                            </div>
                        </div>
                        <div className='flex gap-2 pb-3'>
                            <div>
                                <LocalPhoneOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-lg'>Phone Number</h3>
                                <span className='text-sm'>+971 55 792 4200</span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <EmailOutlinedIcon className='text-green-500' fontSize='small' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-lg'>Email Address</h3>
                                <span className='text-sm'>info@thewashers.com</span>
                            </div>
                        </div>
                    </div>
                    <div className=' order-2'>
                        <h2 className='font-bold text-2xl text-white mb-2'>Quick Links</h2>
                        <ul className='ml-5 flex flex-col gap-5'>
                            {navigation.map((link, ind) => {
                                return (
                                    <li key={IndeterminateCheckBoxOutlined} className='flex gap-4 items-center hover:underline w-fit'>
                                        <span className='bg-green-500 w-2 h-2 rounded-sm'></span>
                                        <Link href={link.href} className='hover:text-green-500'>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className=' order-1 sm:order-3'>
                        <Link href='/'>
                            {/* <Image src="/logo.png" alt="Logo" width={100} height={50} /> */}
                            <h2 className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>TheWashers</h2>
                        </Link>
                        <p className='text-sm pl-3 mt-2'>
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