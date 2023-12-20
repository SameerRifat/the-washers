import CleaningMethods from '@/components/CleaningMethods'
import DeepClean from '@/components/DeepClean'
import Header from '@/components/Header'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <CleaningMethods />
      <DeepClean />
    </main>
  )
}

export default Home