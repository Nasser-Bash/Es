
import { motion } from "framer-motion";

import { Slide } from 'react-reveal';
function OurGoals() {

  
  return (
    
    <div className="our-goals lg:grid grid-cols-3 mt-20 gap-20   md:h-[800px] p-5 ">

             <div className="content text-start  p-5 my-auto">
              <Slide left duration={500}>
              <h4 className="text-3xl mb-10  text-fourth">You do the business, we’ll handle the money.</h4>
              </Slide>
              
              <Slide left duration={700}>
                <p className="text-l text-third">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                </Slide>
             </div> 
             <div className="relative col-span-2 " >
              
                <motion.img 
               
                className="object-cover  mb-5 md:absolute md:top-20  md:right-20"
                src="/images/blog-2.webp"     
                animate={{
                  y: [0, -40, 0], 
                  transition: {
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: 'reverse', 
                  }
                }}
               
                 />

            <motion.img 
               className="object-cover     md:absolute md:top-0 md:right-0"
               src="/images/blog-1.webp"    
               animate={{
                 y: [0, -40, 0], 
                 transition: {
                   duration: 6, 
                   repeat: Infinity, 
                   repeatType: 'reverse', 
                 }
               }}
              
                />
               
             </div> 
    </div>
  )
}

export default OurGoals