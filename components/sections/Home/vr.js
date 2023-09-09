import TextAnimation from "../../widgets/textAnimation";
import { Fade , Slide } from "react-reveal";
function Vr() {
  return (
    <div className='vr-section md:grid grid-cols-2 mt-20 p-5'>
        <div className='relative p-5    '>
            <img className='object-contain md:w-[400px] w-[600px] relative z-20' src='/images/Image.png'/>
            <Slide left>
            <span className='bg-third absolute z-10 md:w-1/2 h-3/4 w-full left-0  bottom-5 rounded-tr-[7.5rem]	'></span>
            </Slide>
            
            <div className='circles hidden lg:block'>
              <Fade duration={1000}>
                <span  className=' absolute z-5 right-[30%] w-[200px] h-[200px] top-0 rounded-full border-second	border-2'></span>
            </Fade>

            <Fade duration={2000}>
            <span  className=' absolute z-5 right-[34%] w-[150px] h-[150px] top-6 rounded-full border-second	border-2'></span>
            </Fade>

            <Fade duration={3000}>
            <span  className=' absolute z-5 right-[38%] w-[100px] h-[100px] top-12 rounded-full border-second	border-2'></span>
            </Fade>

            <Fade duration={4000}>
            <span  className=' absolute z-5 right-[42%] w-[50px] h-[50px] top-[15%] rounded-full border-second	border-2'></span>
            </Fade>
               
               
                
              
            </div>
        </div>
        <div className='content my-auto'>
          <TextAnimation>
                <h4 className='subtitle text-l text-second mb-5'>Request Early Access to Get Started</h4>
                </TextAnimation>

                <TextAnimation>
                <h4 className='title text-2xl text-fourth mb-5'>The possibilities are beyond your imagination</h4>
                </TextAnimation>
               
               <TextAnimation>
               <p className='description text-l text-third mb-5'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
               </TextAnimation>
                
                <TextAnimation>
                <h4 className='subtitle text-l text-second '>Request Early Access to Get Started</h4>
                </TextAnimation>
            
        </div>
        
    </div>
  )
}

export default Vr
