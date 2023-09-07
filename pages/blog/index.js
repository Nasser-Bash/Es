import HeroSection from "../../components/sections/Blog/heroSection";
import Topics from "../../components/sections/Blog/topics";
import Featured from "../../components/sections/Blog/featured";
import Tags from "../../components/sections/Blog/tags";

function Blog() {
    return (
      <>
       <HeroSection/>
      <div className="container mx-auto p-5">
      <Topics/>
      <Featured/>
      <Tags/>
      </div>
     
      </>
      
    )
  }
  
  export default Blog