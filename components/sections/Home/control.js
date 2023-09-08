import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown , faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { motion , useInView} from "framer-motion";
import TextAnimation from "../../widgets/textAnimation";
import useMediaQuery from '@mui/material/useMediaQuery';

function Control() {
        
    const ref = useRef(null)
    const inView = useInView(ref , {once : true})
    const isMd =  useMediaQuery('(max-width:760px)');
    const isSm =  useMediaQuery('(max-width:426px)');
    
  return (
    <div className="control-section md:grid grid-cols-2 md:mt-72 mt-10">
              
                <div className="control-cards p-8 relative">
                                <div ref={ref} className="control-card p-6 rounded-lg relative custom-gradient-background md:w-[335px] md:h-[288px] mb-5">
                                        <h4 className="text-xl text-fourth mb-8">Last Transaction</h4>
                                        <div className="flex justify-between mb-5">
                                            <span className="flex gap-4">
                                                        <img src="/images/dribbble.svg"/>
                                                        <span >
                                                        <h4 className="text-fourth text-sm"> Dribbble Pro</h4>
                                                        <p className="text-third text-xs">16 Dayes ago</p>
                                                        </span>
                                                      
                                            </span>
                                            <span className="text-fourth text-sm my-auto">
                                                <h4><FontAwesomeIcon className="text-red-500" icon={faCaretDown}/> -$250,93</h4>
                                            </span>
                                        </div>

                                        <div className="flex justify-between mb-5">
                                            <span className="flex gap-4">
                                                        <img className="bg-fourth rounded-full w-[40px] h-[40px]" src="/images/Netflix.svg"/>
                                                        <span >
                                                        <h4 className="text-fourth text-sm"> Netflix</h4>
                                                        <p className="text-third text-xs">4 Dayes ago</p>
                                                        </span>
                                                      
                                            </span>
                                            <span className="text-fourth text-sm my-auto">
                                                <h4><FontAwesomeIcon className="text-red-500" icon={faCaretDown}/> -$250,93</h4>
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="flex gap-4">
                                                        <img  className="bg-fourth  rounded-full w-[40px] p-2 h-[40px]" src="/images/Ellipse.svg"/>
                                                        <span >
                                                        <h4 className="text-fourth text-sm"> Manulife Cash</h4>
                                                        <p className="text-third text-xs">16 Dayes ago</p>
                                                        </span>
                                                      
                                            </span>
                                            <span className="text-fourth text-sm my-auto">
                                                <h4><FontAwesomeIcon className="text-green-500" icon={faCaretUp}/> -$250,93</h4>
                                            </span>
                                        </div>

                                    
                                </div>
                                <motion.div className=" mx-auto z-20 control-card p-6 rounded-lg  md:absolute  custom-gradient-background w-[227px] h-[216px]"
                                variants={{
                                    initial : {
                                            top :  "20%",
                                            left : "12%"
                                    },
                                    visible : {
                                        top : "-30%",
                                        left :  "50%"  
                                        
                                    }
                                }}
                                initial = "initial"
                                animate = {inView ? "visible" : "initial"}
                                transition={{duration : 2}}
                                >
                                       
                                        <div className="flex justify-between mb-5">
                                            <span className="flex gap-4">
                                                        <img className="bg-fourth p-3 rounded-full w-[50px] h-[50px]" src="/images/paypal.svg"/>
                                                        <span >
                                                        <h4 className="text-2xl text-fourth mb-2"> Paypal</h4>
                                                        <p className="text-third text-xs">Checkout</p>
                                                        </span>
                                                      
                                            </span>
                                          
                                        </div>

                                        <div className="flex justify-between mb-3">
                                            <span>
                                            <h4 className="my-auto text-fourth text-sm "> Total</h4>
                                                        <h4 className="my-auto text-fourth text-sm ">  $210</h4>
                                            </span>
                                     
                                                        <a href="#_" class="relative  overflow-hidden text-white rounded-md shadow-2xl p-2 group text-center w-1/2">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 custom-gradient-button group-hover:opacity-100"></span>

<span className="absolute top-0 left-0 w-full bg-gradient-to-b from-second to-transparent opacity-5 h-1/3"></span>

<span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-second to-transparent opacity-5"></span>

<span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-second to-transparent opacity-5"></span>

<span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-second to-transparent opacity-5"></span>
<span className="absolute inset-0 w-full h-full border border-second rounded-md opacity-10"></span>
<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<button className="relative my-1 w text-sm group-hover:text-primary"> change</button>
</a>

                                        </div>
                                        <button className="text-primary text-sm w-full rounded-xl custom-gradient-button p-3 text-center">Make paymnet</button>
                                       
                                </motion.div>
                         
                              
                </div>
                <div className="control-content p-5 ">
                    <TextAnimation>
                    <h4 className="text-3xl text-fourth mb-5">Easily control your billing & invoicing.</h4>
                    </TextAnimation>
                               
                               <TextAnimation>
                               <p className="text-sm text-third mb-8">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                               </TextAnimation>
                               
                                <div className="flex mb-5 gap-5">
                                    <TextAnimation>
                                    <img src="/images/app-store.svg"/>
                                    </TextAnimation>
                               
                               <TextAnimation>
                               <img src="/images/google-play.svg"/>
                               </TextAnimation>
                                
                                </div>
                              
                </div>
    </div>
  )
}

export default Control