import React, { useEffect } from 'react'
import Navbar from '../components_landing_page/navbar'
import Hero from '../components_movie_page/hero'
import { useLocation } from "react-router-dom";
import Description from '../components_movie_page/Description';

import Footer from '../components_landing_page/footer'


const moviePage = () => {
  
  const location = useLocation();
  const movie = location.state?.movie;
 

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, [location]);
  
  if (movie) return (
    <>
        <Navbar />
        <Hero movie={movie}/>
        <Description movie={movie} />
        <Footer />
    </>
  )
  else return <div>No movie data found.</div>;
}

export default moviePage