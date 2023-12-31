import React from 'react'


const SectionHeading = ({ children }) => {
    return (
        <>
            <h2 className='font-bold md:font-extrabold text-2xl sm:text-3xl text-center'>{children}</h2>
            {/* <h2 className="text-3xl font-medium mb-5 text-center">{title}</h2> */}
            <div className='w-24 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-8 mt-1 rounded-sm'></div>
        </>
    )
}

export default SectionHeading