import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Form() {
    
  return (
    
<form className="mt-20 lg:mx-28  ">
<div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
 

  <div className="grid md:grid-cols-2 md:gap-6 ">
  <div className="mb-6">
    <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
  </div>
  <div className="mb-6">
    <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
  </div>
  </div>
  
<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-third dark:placeholder-gray-400 dark:text-white mb-5 " placeholder="Write your thoughts here... "></textarea>

  <Button className='bg-second hover:bg-third' variant="contained">send<FontAwesomeIcon icon={faPaperPlane} className='ms-2'/></Button>
</form>

  )
}

export default Form