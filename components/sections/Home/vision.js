
import { useState , useRef , useEffect} from 'react';
import { motion , useAnimation , useInView} from "framer-motion";
import { Fade } from 'react-reveal';
import { useMediaQuery } from '@material-ui/core';
function Vision() {
      const [active, setActive] = useState(false);
      const [isFadeActive, setIsFadeActive] = useState(false);
      const constraintsRef = useRef(null);
      const isMd = useMediaQuery('(max-width:650px)');
      const ref = useRef(null)
     const inView = useInView(ref , {once : true})
      const mainControls = useAnimation();
      const handleClick = (index) => {
            setActive(index);
          };
      
          const handleFadeReveal = () => {
            setIsFadeActive(true);
          };
        
  return (
            <motion.div className="container relative text-fourth   mx-auto h-[900px] overvlow-hidden" ref={constraintsRef} dragElastic={false}>
                               <Fade onReveal={handleFadeReveal}>
                        <h4 className='text-fourth '><svg height="340" stroke="#8ca0c0" stroke-width="3" className={isFadeActive===true ? 'text-line': ''}  width="100%"><text  x="50%" dominant-baseline="middle" text-anchor="middle" y="50%" className="text-[20vw]  ">Beautiful </text></svg></h4>
                       
                       <h4>
                        <svg height="300" stroke="#8ca0c0" stroke-width="2" className={isFadeActive===true ? 'text-line': ''} width="100%"><text className="text-[20vw]" x="50%" dominant-baseline="middle" text-anchor="middle" y="50%"  >ideas </text></svg></h4>
                        </Fade>
              

              <div ref={ref} >
                     
            <motion.div className={`item absolute cursor-pointer  md:w-1/2 w-[20rem] ${active===1 ? 'z-30' : ''}`} drag dragConstraints={constraintsRef}  dragElastic={false} 
            
             animate={isMd ?{  top: "45%",  right:  0 } : { top: inView ? '45%' : '40%',  right:  inView ? '5%'  : '25%'}}
             transition={{duration : 1}}
            onClick={() => handleClick(1)}>
                  <div  className={`custom-gradient-background rounded-lg p-6   `}>
                  <div className="info mb-5 ">
                  <h4 className=" text-second mb-5">Scan Credit Cards</h4> 
                  <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>  
                  </div>
                  <div className="flex md:p-5 justify-end text-end  ">
                        <span className="p-1 my-auto md:text-[17px] text-[12px]">
                        <p className="text-third ">Willain Alves</p>
                        <h4>Designer</h4>
                        </span>
                  
                        <img className="md:w-[150px] w-1/2 object-contain" src="/images/review1.avif"/> 
                  
                  </div>
            
                  </div>
            </motion.div>

            <motion.div className={`item absolute cursor-pointer top-[45%] left-[15%] md:w-1/2 w-[20rem]  ${active===2 ? 'z-30' : ''}`} drag dragConstraints={constraintsRef} dragElastic={false} onClick={() => handleClick(2)}
            animate={isMd ?{  top: "45%",  left:  0 } : { top: inView ? '48%' : '40%', left: inView ? '5%' : '25%'}}
          
            transition={{duration : 1}}
            >
                  <div  className={`custom-gradient-background rounded-lg p-6 `}>
                  <div className="info mb-5 ">
                  <h4 className=" text-second mb-5">Scan Credit Cards</h4> 
                  <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>  
                  </div>
                  <div className="flex md:p-5 justify-end text-end  ">
                        <span className="p-1 my-auto md:text-[17px] text-[12px]">
                        <p className="text-third ">Willain Alves</p>
                        <h4>Designer</h4>
                        </span>
                  
                        <img className="md:w-[150px] w-1/2 object-contain" src="/images/review2.avif"/> 
                  
                  </div>
            
                  </div>
            </motion.div>

            <motion.div className={`item absolute cursor-pointer  md:w-1/2 w-[20rem] ${active===3 ? 'z-30' : ''}`} drag dragConstraints={constraintsRef} dragElastic={false} onClick={() => handleClick(3)}
            
           
             animate={isMd ?{  top: "45%",  left:  0 } : { top: inView ? '30%' : '40%', left: inView ? '25%' : '25%'}}
             transition={{duration : 1}}
            >
                  <div   className={`custom-gradient-background rounded-lg p-6`}>
                  <div className="info mb-5 ">
                  <h4 className=" text-second mb-5">Scan Credit Cards</h4> 
                  <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>  
                  </div>
                  <div className="flex md:p-5 justify-end text-end  ">
                        <span className="p-1 my-auto md:text-[17px] text-[12px]">
                        <p className="text-third ">Willain Alves</p>
                        <h4>Designer</h4>
                        </span>
                  
                        <img className="md:w-[150px] w-1/2 object-contain" src="/images/review3.avif"/> 
                  
                  </div>
            
                  </div>
            </motion.div>
            </div>      
             </motion.div>
  )
}

export default Vision 