import { useState } from "react";
import TeamCard from "../../widgets/teamCard";
import { Fade  } from 'react-reveal';
function OurTeam() {
  const [isFadeActive, setIsFadeActive] = useState(false);
  const handleFadeReveal = () => {
    setIsFadeActive(true);
  };
  return (
    <div className="our-team  relative   mt-20">
      <Fade>
        
            <h4  before="OurTeam Is Perfect & Good" className="before:content-[attr(before)] text-third text-[20vw] md:absolute z-10 text-center"></h4>
      </Fade>
        <div className=" container mx-auto justify-items-center p-5  grid  md:grid-cols-3 sm:grid-cols-2 gap-5 ">
        <TeamCard img="Team_01.webp" name="Gavin Howard" title="Founder"/>
        <TeamCard img="Team_02.webp" name="Teagan Green" title="ceo"/>
        <TeamCard img="Team_03.webp" name="Adalyn Taylor" title="VP Sales"/>
        <TeamCard img="Team_04.webp" name="Jerry  Newman" title="Senior Developer"/>
        <TeamCard img="Team_01.webp" name="Gavin Howard" title="Founder"/>
        <TeamCard img="Team_02.webp" name="Gavin Howard" title="Founder"/>
        </div>
       
     
     
    </div>
  )
}

export default OurTeam