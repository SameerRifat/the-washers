import CleaningMethods from '@/components/CleaningMethods'
import Header from '@/components/Header'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <CleaningMethods />
    </main>
  )
}

export default Home