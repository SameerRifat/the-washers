'use client'

import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Link from 'next/link';


const WhatsappChat = () => {
    return (
        <>
            <div className='fixed right-5 bottom-5'>
                <Link
                    href={`https://wa.me/${971557924200}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    // className='bg-green-500 p-3 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600 hover:shadow-lg hover:scale-110 transition-all'
                    className='wtsapp'
                >
                    <WhatsAppIcon className='text-white' fontSize='large' />
                </Link>
            </div>
            <div className='fixed right-5 bottom-1/2 translate-y-1/2'>
                <Link
                    href={'tel:+971557924200'}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='bg-blue-500 p-2 rounded-md flex justify-center items-center shadow-lg hover:bg-blue-600 hover:shadow-lg hover:scale-110 transition-all'
                >
                    <PhoneInTalkIcon className='text-white' fontSize='medium' />
                </Link>
            </div>
        </>
    )
}

export default WhatsappChat