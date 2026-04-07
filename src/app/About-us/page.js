import React from 'react'
import AboutHero from '../components/About/herosection'
import OurStory from '../components/About/ourstory'
import MissionVision from '../components/About/ourvisionandmission'
import CoffeePhilosophy from "../components/About/coffeePhilosophy"
import TeamCarousel from '../components/About/carousal'
import Experience from '../components/About/experience'
import TestimonialCarousel from '../components/Home/testimonials'
const Page = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <CoffeePhilosophy/>
      <TeamCarousel />
      <Experience />
      <TestimonialCarousel />
    </div>
  )
}

export default Page
