import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Form() {
    
  return (
    
<form className="mt-20 lg:mx-28  border border-third p-10 rounded-3xl">
  <div className="relative z-0 w-full mb-20 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-second bg-transparent border-0 border-b-2  appearance-none dark:text-third dark:border-third dark:focus:border-second focus:outline-none focus:ring-0 focus:border-second peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-third dark:text-third duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-second peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
 

  <div className="grid md:grid-cols-2 md:gap-6 ">
    <div className="relative z-0 w-full mb-20 group">
    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-second bg-transparent border-0 border-b-2  appearance-none dark:text-third dark:border-third dark:focus:border-second focus:outline-none focus:ring-0 focus:border-second peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-third dark:text-third duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-second peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-second bg-transparent border-0 border-b-2  appearance-none dark:text-third dark:border-third dark:focus:border-second focus:outline-none focus:ring-0 focus:border-second peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-third dark:text-third duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-second peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
    </div>
  </div>
  
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

  <Button className='bg-third hover:bg-second' variant="contained">send<FontAwesomeIcon icon={faPaperPlane} className='ms-2'/></Button>
</form>

  )
}

export default Form