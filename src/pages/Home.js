import React from 'react'
import DestinationHome from '../components/HomeSection/DestinationHome/DestinationHome'
import DownloadApp from '../components/HomeSection/DownloadApp/DownloadApp'
import Footer from '../components/HomeSection/Footer/Footer'
import Hero from '../components/HomeSection/Hero'
import HomeAbout from '../components/HomeSection/HomeAbout'
import HomeGallery from '../components/HomeSection/HomeGallery/HomeGallery'
import MostPopular from '../components/HomeSection/Popular/MostPopular'
import Work from '../components/HomeSection/Work/Work'

const Home = () => {
  return (
    <>
        <Hero/>
        <HomeAbout/>
        <MostPopular/>
        <DestinationHome/>
        <DownloadApp/>
        <Work/>
        <HomeGallery/>
        <Footer/>
    </>
  ) 
}

export default Home