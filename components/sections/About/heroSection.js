import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faTwitter , faInstagram } from "@fortawesome/free-brands-svg-icons";
import { easeIn, motion } from "framer-motion";
function HeroSection() {
  const fullWidth = {
      hidden: {
      
        opacity : 0,
        x : -1500
      },
      visible: {
   
        opacity : 1,
       x :  [900,0]
      },
      exit: {
      
        opacity : 0,
       
      }
  }
  const reavalEffect = {
    hidden: {
    
      opacity : 0,
     
    },
    visible: {
      opacity : 1,
    
    },

}
const ReavalEffect = {
  hidden: {
    width : "100%",
  
  },
  visible: {
    width : 0,
    
  },

}
  return (
    <div className="hero-section p-5 mt-6 w-full relative  ">
     <div className="social absolute text-third grid grid-rows-3 text-lg md:gap-5">
            <i><FontAwesomeIcon icon={faFacebookF}/></i>
            <i><FontAwesomeIcon icon={faTwitter}/></i>
            <i><FontAwesomeIcon icon={faInstagram}/></i>
      </div>
      <div className=" ">

        <motion.h4
          className="text-[7.5vw]  text-third mb-5 text-center relative mx-[20%]    "
          variants={reavalEffect}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 , delay : 0.25}}
        >
          METAVERSE 
          <motion.span
            className="bg-third absolute  left-0 w-full h-full "
            variants={ReavalEffect}
            
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 , ease : "easeIn" }}
          ></motion.span>
          </motion.h4>
          
        
        
      </div>
        
    
      <img  src="/images/blog-10.webp"  className="w-full object-cover h-[300px] rounded-ss-[6.5rem]" 
       initial="hidden"
       animate="visible"
       exit="exit"
       variants={fullWidth}
       transition={{ duration: 1 }}
      />
    
        
    </div>
  )
}

export default HeroSection