
import TextAnimation from "../../widgets/textAnimation";
function HeroSection() {
  

  return (
    <div className="hero-section   sm:grid grid-cols-2 relative">
      
      <div className="hero-section-content my-auto md:text-start text-center  p-14">
      <TextAnimation>
            <h4 className="lg:text-5xl   sm:text-4xl text-4xl  text-transparent bg-clip-text custom-gradient  font-bold	">
         
      
            Let’s Build Something
                    amazing with GPT-3
                    OpenAI
     
            
            </h4>
            </TextAnimation>
            <TextAnimation>
                <p className="text-sm py-8 text-fourth">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
            </TextAnimation>
           
        </div>
        <div className="">
        <img className="h-[95%] w-[100%]   object-contain" src="/images/blog.png"/>
        </div>
   
      
    </div>
    
  )
}

export default HeroSection