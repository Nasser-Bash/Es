import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faTwitter , faInstagram } from "@fortawesome/free-brands-svg-icons";
import {  Zoom } from 'react-reveal';
function TeamCard({img , name , title}) {
  return (
   
   <Zoom>
<div className=" z-30 max-w-[22rem]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
  
  <div className="relative group">
    
        <img className="rounded-t-lg  " src={`/images/${img}`} alt="" />
        <span className="absolute w-0 h-[4px] bg-second transition-all duration-500 group-hover:w-full"></span>
        <ul className="p-10 absolute bottom-10 flex  justify-around left-0 right-0">
                <li className="text-3xl text-second  opacity-0 transition-all delay-0	 duration-500 group-hover:opacity-100 group-hover:translate-y-4 hover:text-fourth cursor-pointer	">
                <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li className="text-3xl text-second opacity-0 transition-all delay-100 duration-500 group-hover:opacity-100 group-hover:translate-y-4 hover:text-fourth cursor-pointer	">
                <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="text-3xl text-second opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100 group-hover:translate-y-4 hover:text-fourth cursor-pointer	">
                <FontAwesomeIcon icon={faInstagram} />
                </li>
        </ul> 
        
  </div>

    <div className="p-5 text-center">
        
            <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name} </h5>
            <h4 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title}</h4>
       
       
       
    </div>
    
</div>
</Zoom>
  ) 
}

export default TeamCard