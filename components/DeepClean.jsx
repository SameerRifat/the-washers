import Image from 'next/image'
import React from 'react'

const DeepClean = () => {
    return (
        <div className='mb-20 w-[90%] mx-auto max-w-[1600px]'>
            <h2 className='font-extrabold text-3xl mb-2'>
                <span className='font-medium'>Deep Clean</span> Your Sofa Occasionally
            </h2>
            <p>Whether you possess a leather sofa or any variant of fabric, cleaning & restoring its neat original look is easy for us.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 mb-10'>
                <div className='w-full my-auto'>
                    <p className='leading-7'>
                        We have different ways to clean sofas. You can pick the one that suits your needs and budget. When cleaning leather sofas, it's crucial to use special products made for leather.
                    </p>
                    <p className='mt-5 leading-7'>
                        We'll make sofa cleaning easy for you, no matter what material it is. Regular cleaning will keep it fresh and welcoming for your family and guests.
                    </p>
                    <p className='mt-5 leading-7'>
                        If you need a deep clean, we're here for you. Just give us a call, and our steam cleaning team will come to clean your sofa and cushions.
                    </p>
                </div>
                <div className='w-full overflow-hidden'>
                    <Image
                        src='/sofaCleaningComarison2.jpg'
                        alt="service image"
                        width={350}
                        height={350}
                        quality={95}
                        priority={true}
                        className='max-w-full w-full h-full sm:h-[350px] rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default DeepClean