import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Genres from '../components/genres'
import UpcomingBangers from '../components/UpcomingBangers'
import Latest from '../components/Latest'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Footer from '../components/footer'

const landing_page = () => {
  return (
    <div >
        <Navbar />
        <Hero />
        <Genres />
        <UpcomingBangers />
        <Latest />
        <TopRated />
        <Popular />
        <Footer />
    </div>
  )
}

export default landing_page