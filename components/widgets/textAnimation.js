import { motion , useAnimation , useInView} from "framer-motion";
import { useEffect, useRef } from "react";

function TextAnimation({children}) {
    const ref = useRef(null);
    const InView = useInView(ref , {once : true});
    const Controls = useAnimation();
    useEffect(()=>{
                if(InView){
                    Controls.start("visible")
                }
    },[InView])
  return (
   <div className="overflow-hidden pb-5" ref={ref}>  
       
    <motion.div
        variants={{
            hidden: {
                y: "200%",
                
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 ,  staggerChildren: 0.1}
              },
            visible: {
                y: 0,
                transition: { 
                  ease: [0.455, 0.03, 0.515, 0.955],
                   duration: 0.75 , staggerChildren: 0.75,
                  }
              }
        }}
      initial="hidden"
      animate={Controls}

    >
     {children}
    </motion.div>
    </div>

  )
}

export default TextAnimation