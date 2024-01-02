'use client'

import React, { useEffect, useState } from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useMediaQuery } from 'react-responsive';

const methods = [
    {
        title: "Steam Cleaning",
        desc: "Steam Cleaning uses high temperature to remove dust and all other dust particles from the surface of the sofa."
    },
    {
        title: "Carbonation Cleaning",
        desc: "Water consumption is very less in this method which is a natural cleaning method to remove grime and dirt from the fabric."
    },
    {
        title: "Chemical Cleaning",
        desc: "Chemical cleaning is safe for all types of fabrics including leather. You can immediately use the furniture after this cleaning process."
    },
    {
        title: "Dry cleaning",
        desc: "Dry cleaning process proceeds without the usage of water so that there is no down time required for drying."
    },
]

const CleaningMethods = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const [forceRerender, setForceRerender] = useState(false);

    useEffect(() => {
        setForceRerender(prevState => !prevState);
    }, [isSmallScreen]);

    return (
        <section className='bg-gradient-to-r from-blue-300 to-green-300 mb-20 py-10'>
            <div className='w-[90%] mx-auto'>
                <h2 className='font-bold sm:font-extrabold text-2xl sm:text-3xl'>
                    <span className='font-semibold'>Professional {" "}</span>
                    Sofa Cleaning Methods
                </h2>
                <p className='text-sm xs:text-base mt-2'>
                    You should clean your sofas on regular basis as it is the central place Where all family resides most of the time
                </p>
                <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12' key={forceRerender}>
                    {methods.map((method, ind) => {
                        return (
                            <div key={ind} className='flex items-center gap-5'>
                                <div className='bg-white p-3 xs:p-3 rounded-lg shadow-sm'>
                                    <AutorenewIcon className=' text-green-500' style={isSmallScreen ? {fontSize: '35px'} : {fontSize: '50px'}}/>
                                </div>
                                <div>
                                    <h3 className='font-semibold xs:font-bold text-xl xs:text-2xl'>{method.title}</h3>
                                    <p className='text-sm xs:text-base'>
                                        {method.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CleaningMethods