  import  Link  from "next/link";
  import { motion} from "framer-motion";
  import { useRouter } from 'next/router';
function Menu({isActive}) {
  const router = useRouter();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileMenuVariant = {
    opened: {
      height:'100%',
      opacity : 1,
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
   
      height:'0%',
      opacity : 0,
      transition: {
        
        duration: 1.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    exit: {
   
      height:'0%',
      opacity : 0,
      transition: {
        
        duration: 1.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }
  return (
    <>
     <div className="  hidden w-full md:block md:w-auto  " id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-primary md:dark:primary dark:border-gray-700 overflow-hidden">
          {
            links.map((route)=>{
              return(
            <li>
            <Link href={route.path} className={`block py-2 pl-3 pr-4  bg-third rounded md:bg-transparent  md:p-0  hover:text-second  transition duration-150 ${router.pathname===route.path ? 'text-second' : 'text-white'}`} aria-current="page">{route.name}</Link>
          </li>   
              )
            })
          }
          
         
        </ul>
      </div>

      <motion.div className={`mobile-menu md:hidden   fixed right-0 w-full h-full  bottom-0  z-50 bg-primary flex gap-3 ${isActive ===true ? "block" : "hidden "}`}
       variants={mobileMenuVariant}
       
        animate ={isActive ? "opened" : "exit"}
        transition = {{
        
          duration: 1.63,
          ease: [0.74, 0, 0.19, 1.02]
        }}
      >
      <motion.ul className="font-medium flex flex-col   text-left p-4 md:p-0 mt-4  mt-28 w-3/4" variants={ulVariant}>
              {
                links.map((route)=>{
                  return(
                    <motion.li className="mb-5 " variants={liVariant}>
                    <Link href={`/${route.path}`} className={`block py-2 pl-3 md:hover:bg-transparent pr-4   md:p-0 dark:hover:bg-gray-700 hover:text-second transiton duration-150 ${router.pathname===route.path ? "text-second bg-gray-700" : "text-fourth "}`}aria-current="page">{route.name}</Link>
                  </motion.li>
                  )
                })
              }
        </motion.ul>
        <div className="social  pt-11 flex flex-col gap-48 text-gray-400">
          <span>
          <p class="transform rotate-90  text-sm">
          &#169;	2023
            </p>
          </span>
         
         <div className="flex flex-col gap-28 ">
         <a href="#" class="transform rotate-90 hover:text-fourth transiton duration-150 text-sm">Facebook</a>
         <a href="#" class="transform rotate-90 hover:text-fourth transiton duration-150 text-sm">Instagram</a>
         <a href="#" class="transform rotate-90 hover:text-fourth transiton duration-150 text-sm">LinkedIn</a>
         
         </div>

         
        </div>

        
      </motion.div>
    </>
  )
}

export default Menu 