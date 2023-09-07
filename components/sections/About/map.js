import TextAnimation from "../../widgets/textAnimation";
import { Bounce ,Fade} from "react-reveal";
function Map() {
  return (
    <div className='world-map p-5 mt-11'>
                <div className='text-center mb-16'> 
                <TextAnimation>
                <h4 className='text-third text-[10px] mb-5'>People on the World</h4>
                </TextAnimation>
                   
                   <TextAnimation>
                   <h4 className='text-fourth text-4xl'>Track friends around you and invite them to play together in the same world</h4> 
                   </TextAnimation>
                  
                </div>
                <div className='map relative'>
                    <Fade duration={500}>
                    <img className=' object-cover w-full' src='/images/map-base 1.png'/>
                    </Fade>
                       

                    <span className='absolute md:top-20 top-6 left-[10%]'>
                    <Bounce delay={500}>
                                    <img className=' w-[30px] md:w-[60px] border-4 border-third rounded-full ' src='/images/Ellipse 47.svg'/>
                                    </Bounce>
                    </span>
                    
                    <span className='absolute  top-[45%] left-[45%]'>
                    <Bounce delay={600}>
                                    <img className=' w-[30px] md:w-[60px] border-4 border-third rounded-full ' src='/images/Ellipse 46.svg'/>
                                    </Bounce>
                    </span>

                    <span className='absolute  md:top-20 top-6 left-[60%]'>
                    <Bounce delay={700}>
                                    <img className=' w-[30px] md:w-[60px] border-4 border-third rounded-full ' src='/images/Ellipse 48.png'/>
                                    </Bounce>
                    </span>
                     
                    
                </div>
                
    </div>
  )
}

export default Map