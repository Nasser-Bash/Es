import { Slide, Zoom } from 'react-reveal';
import TextAnimation from "../../widgets/textAnimation";
function Reviews() {
  return (
    <div className="reviews my-20 p-5">
        <div className="md:grid  grid-cols-3 mb-20 ">
            <TextAnimation>
            <h4 className="text-4xl text-fourth col-span-1 mb-5 ">
                 What people are saying about us
            </h4>
            </TextAnimation>
       
       <TextAnimation>
       <h6 className="text-lg text-third col-span-2">Everything you need to accept card payments and grow your business anywhere on the planet.</h6>
       </TextAnimation>
           
        </div>
        <div className="cards grid lg:grid-cols-3 sm:grid-cols-2 gap-8  ">
            <Zoom duration={500}>
            <div className="card custom-gradient-background p-8 rounded-xl text-fourth max-h-[22rem]	">
                <div className="flex gap-3 mb-10">
                <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                 <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                </div>
            
                    <h4 className="">
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </h4>
                    <div className="flex md:py-10 py-5 text-sm gap-3">
                        <img className="rounded-full w-[70px] h-[70px] sm:w-[5vw] sm:h-[5vw] object-cover object-left" src="/images/InvisionAaronStump.jpg"/>
                        <span className="lg:p-5">
                        <h4>Herman Jensen</h4>
                        <h4 className="text-third ">Founder & Leader</h4>
                        </span>

                    </div>
            </div></Zoom>
           
            <Zoom duration={1000}>
            <div className="card  p-8 rounded-xl text-fourth max-h-[22rem]	">
                <div className="flex gap-3 mb-10">
                <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                 <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                </div>
            
                    <h4 className="">
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </h4>
                    <div className="flex md:py-10 py-5 text-sm gap-3">
                        <img className="rounded-full w-[70px] h-[70px] sm:w-[5vw] sm:h-[5vw] object-cover" src="/images/yushau-2.jpg"/>
                        <span className="lg:p-5">
                        <h4>Herman Jensen</h4>
                        <h4 className="text-third ">Founder & Leader</h4>
                        </span>

                    </div>
            </div>  
            </Zoom>
            <Zoom duration={1500}>
            <div className="card  p-8 rounded-xl text-fourth max-h-[22rem]	">
                <div className="flex gap-3 mb-10">
                <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                 <div className="transparent    w-[20.6px]  " style={{
                    borderBottom : "50px solid #0db8df",
                    borderLeft : "18px solid transparent",
                    
                }}></div>
                </div>
            
                    <h4 className="">
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </h4>
                    <div className="flex md:py-10 py-5 text-sm gap-3">
                        <img className="rounded-full w-[70px] h-[70px] sm:w-[5vw] sm:h-[5vw] object-cover" src="/images/jay.jpg"/>
                        <span className="lg:p-5">
                        <h4>Herman Jensen</h4>
                        <h4 className="text-third ">Founder & Leader</h4>
                        </span>

                    </div>
            </div>  
            </Zoom>
        </div>
    </div>
  )
}

export default Reviews