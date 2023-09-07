
import HeroSection from "../components/sections/Home/heroSection";
import About from "../components/sections/Home/about";
import Vision from "../components/sections/Home/vision";
import Reviews from "../components/sections/Home/reviews";

import Vr from "../components/sections/Home/vr";
import Control from "../components/sections/Home/control";
function HomePage() {
 
    return(
      <> 
           <HeroSection/>
           <About/>
           <div className="container mx-auto mt-20">
             <Vr/>
             <Control/>
            <Reviews/>
            
           </div>
         <Vision/>
       
      </>
    )
}
export default HomePage


