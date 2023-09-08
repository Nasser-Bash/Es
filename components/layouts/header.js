import { useState } from "react";
import Menu from "../widgets/menu";
import { AnimatePresence, motion} from "framer-motion";
 function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }


  return (
    <nav className="  border-gray-200 dark:bg-primary sticky right-0 top-0 left-0 z-[100] ">
    <div className=" container mx-auto max-w-screen -xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">

          <span className="self-center text-2xl text-second font-semibold whitespace-nowrap ">E.S</span>
      </a>
   
      <div className="flex gap-3 text-[17px] ">

<motion.div
variants={hideNavItemsVariant}

className="text-fourth    bg-second hover:bg-primary transition duration-300 cursor-pointer  border-2 border-second my-auto p-3 rounded-full"
>
Hire Us
</motion.div>
<motion.div
variants={hideNavItemsVariant}
onClick={() => setMobileNavOpen(true)}
className="text-fourth  p-3 bg-primary border-2 border-second hover:bg-second transition duration-300 cursor-pointer rounded-full  hover:border-second my-auto"
>
Menu
</motion.div>

</div>

    </div>
    <Menu mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
  </nav>
  )
}
export default Header ; 
