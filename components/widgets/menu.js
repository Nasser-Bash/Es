
  import  Link  from "next/link";
  import { AnimatePresence, motion} from "framer-motion";
  import { useRouter } from 'next/router';

function Menu({mobileNavOpen , setMobileNavOpen}) {
  const router = useRouter();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];




  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-150%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
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
 



<motion.nav
  initial="closed"
  animate={mobileNavOpen ? "opened" : "closed"}
  className=""
>
  <motion.div variants={mobileMenuVariant} className="mobile-menu fixed top-0 left-0 w-full h-full  bg-primary  z-50    text-end">
   

    <div className="flex ">
        <div className="social  ps-8 pt-5 w-[25px]  flex flex-col gap-48 text-gray-400">
              <span>
              <p class="transform rotate-90  text-sm  ">
              &#169;2023
                </p>
              </span>
            
            <div className="flex flex-col gap-28  ">
            <a href="#" class=" transform rotate-90 hover:text-fourth transiton duration-150 text-sm">Facebook</a>
            <a href="#" class="transform rotate-90 hover:text-fourth transiton duration-150 text-sm">Instagram</a>
            <a href="#" class="transform rotate-90 hover:text-fourth transiton duration-150 text-sm">LinkedIn</a>
            
            </div>

            
        </div>

          <div className="w-full">

            <div className="flex gap-3  p-5  justify-end">
            
          
            <motion.button
          variants={fadeInVariant}
          
          className="text-fourth    bg-second hover:bg-primary transition duration-300 cursor-pointer  border-2 border-second  p-3 rounded-full"
          >
          Hire Us
              </motion.button>
          
              <motion.button
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
                className="self-end  text-fourth  p-3 bg-primary border-2 border-second hover:bg-second transition duration-300 cursor-pointer rounded-full  hover:border-second uppercase"
              >
                Close
              </motion.button>
              </div>
          <motion.ul variants={ulVariant} className="mt-32 text-center  w-full ">
            {links.map(navItem => (
              <motion.li
                className={` hover:text-second  text-3xl mb-8 ${router.pathname===navItem.path ? "text-second" : "text-fourth"}`}
                whileTap={{ scale: 0.95 }}
                key={navItem.id}
              >
                <Link href={navItem.path} onClick={() => setMobileNavOpen(false)}>
                <motion.div variants={liVariant}>{navItem.name}</motion.div>
                </Link>
              
              </motion.li>
            ))}
          </motion.ul>
          </div>
    </div>
   
  </motion.div>
</motion.nav>

   
    </>
  )
}

export default Menu 