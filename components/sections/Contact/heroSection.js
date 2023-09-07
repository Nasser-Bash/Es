import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt , faHeadphonesAlt , faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextAnimation from "../../widgets/textAnimation";
import { Fade ,Bounce } from "react-reveal";

function HeroSection() {
  return (
    <div className="my-20 text-center -center">
        <TextAnimation>
        <h1 className="text-second text-7xl  mb-10">Contact Us</h1>
        </TextAnimation>
        
        <TextAnimation>
        <p className="text-third text-xl lg:mx-32 px-5">
        We are AliThemes , a creative and dedicated group of individuals who love web development
almost as much as we love our customers. We are passionate team with the mission for
achieving the perfection in web design. All designs are made by love with pixel perfect design
and excellent coding quality. Speed, security and SEO friendly alway in our mind.
        </p>
        </TextAnimation>
       
        <div className="grid md:grid-cols-3  text-second justify-items-center mt-20">
                <div className="flex gap-3 mb-8">
                    <Bounce >
                         <FontAwesomeIcon className="text-5xl" icon={faHeadphonesAlt}/>
                    </Bounce>
               
                <Fade delay={100}>
                <span className="text-third">
                        <p>(+20) 010-1775-3291</p>
                        <p>(+20) 010-1775-3291</p>
                </span>
                </Fade>
               
                    
                </div>
                <div className="flex gap-3 mb-8">
                <Bounce delay={200}>
                <FontAwesomeIcon className="text-5xl" icon={faPaperPlane}/>

                </Bounce>
         
                <Fade delay={300}>
                    <span className="text-third">
                        <p>11567 E Broadview Dr</p>
                        <p>Colorado(CO), 80117</p>
                    </span>
                </Fade>
                </div>
                <div className="flex gap-3 ">
                <Bounce delay={400} >
                <FontAwesomeIcon className="text-5xl" icon={faMapMarkerAlt}/>
                </Bounce>
                <Fade delay={500}>
                    <span className="text-third">
                        <p>nasser9959@gmail.com</p>
                        <p>nasserbash16@gmail.com</p> 
                    </span>
                    </Fade>
                </div>
        </div>
    </div>
  )
}

export default HeroSection