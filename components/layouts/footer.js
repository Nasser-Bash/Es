import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faTwitter , faInstagram } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div className=" text-second text-4xl text-center mt-10  border-t container mx-auto border-gray-700  grid  md:grid-cols-3  p-5">
          <h4 className="text-fourth text-[20px]">METAVERUS</h4>
          <h4 className="text-third text-[10px] my-auto">  Copyright © 2023  Metaversus. All rights reserved.</h4>
          <div className="social text-sm flex gap-4  justify-center my-auto">
              <a className="text-fourth hover:text-second transition duration-150" href="#">
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a className="text-fourth hover:text-second transition duration-150" href="#">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a className="text-fourth hover:text-second transition duration-150" href="#">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
          </div>
          
    </div>
  )
}

export default footer