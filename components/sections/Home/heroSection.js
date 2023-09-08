import { useEffect , useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import TextAnimation from "../../widgets/textAnimation";
function HeroSection() {
  

  return (
    <div className="hero-section   sm:grid grid-cols-2 relative">
      
      <div className="hero-section-content my-auto md:text-start text-center  p-14">
      
            <h4 className="lg:text-6xl text-fourth  sm:text-5xl text-5xl  	">
         
            <TextAnimation>
                   Artificial Intelligence
            </TextAnimation>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '  Technology',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '  Meets Creativity',
        1000,
       
      ]}
      wrapper="div"
      className='text-transparent bg-clip-text custom-gradient  font-bold'
      style={{display:'block'}}
      speed={10}
      repeat={Infinity}
    />
            </h4>
            <TextAnimation>
                <p className="text-sm py-8 text-fourth">
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
                </p>
            </TextAnimation>
           
        </div>
        <div className="">
        <img className="h-[95%] w-[100%]   object-contain" src="/images/hero-section.png"/>
        </div>
        {/* <div>
              <motion.span 
                className='absolute w-20 h-20 bg-second rounded-full bottom-20 z-[1]'
                variants={animateVariants}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                }}
                
              >

              </motion.span>
        </div> */}
      
    </div>
    
  )
}

export default HeroSection