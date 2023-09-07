
import TextAnimation from "../../widgets/textAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck , faArrowRight } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="bg-primary md:grid grid-cols-3  ">
        <div className="col-span-1 " >
        <img className="h-full w-full object-cover" src="/images/home-image-1.webp"/>
        </div>
        <div className="about-section-content col-span-2 text-start md:p-16 p-5 mt-10 text-third">
                    <TextAnimation>
        <h4 className="md:text-4xl text-2xl  mb-10  font-bold text-fourth">
                
                Transforming Industry With Our AI Agency Services
                </h4>
                    </TextAnimation>
            
                    <TextAnimation>
                    <p>Aenean vel elit scelerisque mauris pellentesque. At varius vel pharetra vel turpis. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum.</p>
                    </TextAnimation>
            
            <div className="mt-10 mb-16">
                <ul className="grid grid-cols-2 ">

                    <TextAnimation>
                    <li className="mt-8">
                        <FontAwesomeIcon className="me-3 text-second" icon={faCheck}/>
                        Maecenas venenatis augue dui
                        </li>
                    </TextAnimation>
                  
                    <TextAnimation>
                    <li className="mt-8">
                        <FontAwesomeIcon className="me-3 text-second" icon={faCheck}/>
                        Maecenas venenatis augue dui
                        </li>
                    </TextAnimation>

                    <TextAnimation>
                    <li className="mt-8">
                        <FontAwesomeIcon className="me-3 text-second" icon={faCheck}/>
                        Maecenas venenatis augue dui
                        </li>
                    </TextAnimation>

                    <TextAnimation>
                    <li className="mt-8">
                        <FontAwesomeIcon className="me-3 text-second" icon={faCheck}/>
                        Maecenas venenatis augue dui
                        </li>
                    </TextAnimation>
                </ul>
            </div>
            <hr/>

            <div className="partners pt-8 text-center md:text-start">
                <TextAnimation>
                <h4 className="text-2xl mb-8 text-fourth md:text-start text-center">We Are Powered By</h4>
                </TextAnimation>
                <ul className="grid md:grid-cols-4 grid-cols-2  justify-items-center gap-10 ">
                   <TextAnimation>
                    <li className=" ">
                        <img  src="/images/brand4.webp"/>
                    </li>
                    </TextAnimation>

                    <TextAnimation>
                    <li className=" ">
                        <img  src="/images/brand3.webp"/>
                    </li>
                    </TextAnimation>

                    <TextAnimation>
                    <li className=" ">
                        <img  src="/images/brand5.png"/>
                    </li>
                    </TextAnimation>

                    <TextAnimation>
                    <li className=" ">
                        <img  src="/images/brand6.webp"/>
                    </li>
                    </TextAnimation>
                   
                    
                  
                </ul>
                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all mt-16 custom-gradient-button  text-l rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out custom-gradient-button  rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-second  group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-primary ">Discover Me <FontAwesomeIcon className="ms-2"  icon={faArrowRight}/>
                         </span>
</a>
                <button className="  p-3 text-primary rounded-lg">Discover me</button>
            </div>
        </div>

    </div>
  )
}

export default About