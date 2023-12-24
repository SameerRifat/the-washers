import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';


const WhatsappChat = () => {
    return (
        <div className='fixed right-5 bottom-5'>
            <Link
                href={`https://wa.me/${923417082407}`}
                target='_blank'
                className='bg-green-500 p-3 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600 hover:shadow-lg hover:scale-110 transition-all'
            >
                <WhatsAppIcon className='text-white' fontSize='large' />
            </Link>
        </div>
    )
}

export default WhatsappChat