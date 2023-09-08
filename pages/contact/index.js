import HeroSection from "../../components/sections/Contact/heroSection";
import Form from "../../components/sections/Contact/form";
import Map from "../../components/sections/Contact/map";

function Contact() {
  return (
    <div className="container mx-auto  p-5"> 
       <HeroSection/>
     
       <Form/>
    </div>
  )
}

export default Contact