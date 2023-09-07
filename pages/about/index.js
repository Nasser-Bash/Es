
import HeroSection from "../../components/sections/About/heroSection";
import OurTeam from "../../components/sections/About/ourTeam";
import OurGoals from "../../components/sections/About/ourGoals";
import OurValue from "../../components/sections/About/ourValue";
import Map from "../../components/sections/About/map";

function About() {
  return (
    <div className="about">
      <HeroSection/>
      <div className="container mx-auto">
          
         <OurGoals/>
       <OurValue/>
       <Map/>
      </div>
      <OurTeam/>
  </div>
  )
}

export default About