import { useEffect, useState } from "react";
import Menu from "../widgets/menu";
import { Divide as Hamburger } from 'hamburger-react'
 function Header() {
const [isActive, setisActive] = useState(false);
const handleClick = ()=>{
  setisActive(!isActive)
}

  return (
    <nav className=" border-gray-200 dark:bg-primary sticky right-0 top-0 left-0 z-[100] ">
    <div className="container mx-auto max-w-screen -xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">

          <span className="self-center text-2xl text-second font-semibold whitespace-nowrap ">E.S</span>
      </a>
      
      <span className=" md:hidden block z-[60]"> 
      <Hamburger    toggled={isActive} toggle={handleClick} color="white" />
      </span>
       
      <Menu isActive={isActive}/>
    </div>
  </nav>
  )
}
export default Header ; 
