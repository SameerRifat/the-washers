import React from 'react'
import ServiceDetail from './serviceDetail'

export async function generateMetadata({ params }) {
    return {
        title: `${params.title} Service | TheWashers`,
    }
}

const page = ({ params }) => {
    return (
        <ServiceDetail params={params}/>
    )
}

export default page