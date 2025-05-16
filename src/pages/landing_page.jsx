import React from 'react'
import Navbar from '../components_landing_page/navbar'
import Hero from '../components_landing_page/Hero'
import Genres from '../components_landing_page/genres'
import UpcomingBangers from '../components_landing_page/UpcomingBangers'
import Latest from '../components_landing_page/Latest'
import TopRated from '../components_landing_page/TopRated'
import Popular from '../components_landing_page/Popular'
import Footer from '../components_landing_page/footer'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const landing_page = () => {
   const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      const element = document.getElementById(section.toLowerCase().replace(/\s/g, ""));
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
          navigate(".", { replace: true }); // Clear state
        }, 100);
      }
    }
  }, [location.state, navigate]);
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='w-full bg-black'>
          <div className='w-[1598px] flex flex-col mx-auto'>
            <Genres />
            <UpcomingBangers />
            <Latest />
            <TopRated />
            <Popular />
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default landing_page