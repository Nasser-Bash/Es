import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
function Featured() {
    const buttonVariants = {
        hidden: { y: "-100" },
        visible: { y: 0 },
      };
    
      const iconVariants = {
        hidden: { rotate: 0 },
        visible: { rotate: 180 },
      };
  return (
    <div className="featured mt-20 ">
    <div className="featured-title mb-10">
          <h4 className="text-second text-3xl mb-2">Editor's picked</h4>
        <p className="text-third text-xl">Featured and highly rated articles</p>
    </div>
      <div className="featured-cards md:grid grid-cols-2 gap-6 mb-10">
            <div className="featured-card bg-primary p-8 rounded-xl border border-third mb-5">
                            <img className="rounded-xl mb-5" src="/images/news1.png"/>
                            <div className="card-body">
                                        <span className="mb-5   flex justify-between text-gray-500 text-sm">
                                                <p>#Travel</p>
                                                <p>5 mins read</p>
                                        </span>
                                        <h4 className="text-third text-3xl">Helpful Tips for Working from Home as a Freelancer</h4>
                                        <span className="my-5   flex justify-between text-gray-500 text-sm">
                                                <span className="text-gray-600 flex gap-3">
                                                    <img className="object-cover rounded-full w-[70px] h-[70px]" src="/images/InvisionAaronStump.jpg"/>
                                                    <span className="my-auto">
                                                    <p>
                                                         Joseph
                                                       
                                                    </p>
                                                    <p>
                                                         
                                                        25 April 2023
                                                    </p>
                                                    </span>
                                                   
                                                </span>
                                                <span className="my-auto flex   gap-2  "
                                                  
                                                >
                                                 <button className="overflow-hidden group">
                                                  <div className="group-hover:rotate-90 transiton ease-in duration-300 text-xl group-hover:text-second 	">
                                                    ↑
                                                  </div>
                                                        <div className="translate-y-[100%] group-hover:translate-y-0 transiton ease-in duration-300	group-hover:text-second">
                                                          Read more
                                                        </div>
                                                  </button>
                                                </span>
                                        </span>
                            </div>
              </div>

              <div className="featured-card bg-primary p-8 rounded-xl border border-third mb-5">
                            <img className="rounded-xl mb-5" src="/images/news3.png"/>
                            <div className="card-body">
                                        <span className="mb-5   flex justify-between text-gray-500 text-sm">
                                                <p>#Travel</p>
                                                <p>5 mins read</p>
                                        </span>
                                        <h4 className="text-third text-3xl">Helpful Tips for Working from Home as a Freelancer</h4>
                                        <span className="my-5   flex justify-between text-gray-500 text-sm">
                                                <span className="text-gray-600 flex gap-3">
                                                    <img className="object-cover rounded-full w-[70px] h-[70px]" src="/images/InvisionAaronStump.jpg"/>
                                                    <span className="my-auto">
                                                    <p>
                                                         Joseph
                                                       
                                                    </p>
                                                    <p>
                                                         
                                                        25 April 2023
                                                    </p>
                                                    </span>
                                                   
                                                </span>
                                                <span className="my-auto flex   gap-2  "
                                                  
                                                >
                                                 <button className="overflow-hidden group">
                                                  <div className="group-hover:rotate-90 transiton ease-in duration-300 text-xl group-hover:text-second 	">
                                                    ↑
                                                  </div>
                                                        <div className="translate-y-[100%] group-hover:translate-y-0 transiton ease-in duration-300	group-hover:text-second">
                                                          Read more
                                                        </div>
                                                  </button>
                                                </span>
                                        </span>
                            </div>
              </div>
    </div>  
    <div className="featured-cards grid  lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
              <div className="featured-card bg-primary p-8 rounded-xl border border-third mb-5">
                            <img className="rounded-xl mb-5" src="/images/news2.png"/>
                            <div className="card-body">
                                        <span className="mb-5   flex justify-between text-gray-500 text-sm">
                                                <p>#Travel</p>
                                                <p>5 mins read</p>
                                        </span>
                                        <h4 className="text-third text-3xl">Helpful Tips for Working from Home as a Freelancer</h4>
                                        <span className="my-5   flex justify-between text-gray-500 text-sm">
                                                <span className="text-gray-600 flex gap-3">
                                                    <img className="object-cover rounded-full w-[70px] h-[70px]" src="/images/InvisionAaronStump.jpg"/>
                                                    <span className="my-auto">
                                                    <p>
                                                         Joseph
                                                       
                                                    </p>
                                                    <p>
                                                         
                                                        25 April 2023
                                                    </p>
                                                    </span>
                                                   
                                                </span>
                                                <span className="my-auto flex   gap-2  "
                                                  
                                                >
                                                 <button className="overflow-hidden group">
                                                  <div className="group-hover:rotate-90 transiton ease-in duration-300 text-xl group-hover:text-second 	">
                                                    ↑
                                                  </div>
                                                        <div className="translate-y-[100%] group-hover:translate-y-0 transiton ease-in duration-300	group-hover:text-second">
                                                          Read more
                                                        </div>
                                                  </button>
                                                </span>
                                        </span>
                            </div>
              </div>
              <div className="featured-card bg-primary p-8 rounded-xl border border-third mb-5">
                            <img className="rounded-xl mb-5" src="/images/news4.png"/>
                            <div className="card-body">
                                        <span className="mb-5   flex justify-between text-gray-500 text-sm">
                                                <p>#Travel</p>
                                                <p>5 mins read</p>
                                        </span>
                                        <h4 className="text-third text-3xl">Helpful Tips for Working from Home as a Freelancer</h4>
                                        <span className="my-5   flex justify-between text-gray-500 text-sm">
                                                <span className="text-gray-600 flex gap-3">
                                                    <img className="object-cover rounded-full w-[70px] h-[70px]" src="/images/InvisionAaronStump.jpg"/>
                                                    <span className="my-auto">
                                                    <p>
                                                         Joseph
                                                       
                                                    </p>
                                                    <p>
                                                         
                                                        25 April 2023
                                                    </p>
                                                    </span>
                                                   
                                                </span>
                                                <span className="my-auto flex   gap-2  "
                                                  
                                                >
                                                 <button className="overflow-hidden group">
                                                  <div className="group-hover:rotate-90 transiton ease-in duration-300 text-xl group-hover:text-second 	">
                                                    ↑
                                                  </div>
                                                        <div className="translate-y-[100%] group-hover:translate-y-0 transiton ease-in duration-300	group-hover:text-second">
                                                          Read more
                                                        </div>
                                                  </button>
                                                </span>
                                        </span>
                            </div>
              </div>
              <div className="featured-card bg-primary p-8 rounded-xl border border-third mb-5">
                            <img className="rounded-xl mb-5" src="/images/news6.png"/>
                            <div className="card-body">
                                        <span className="mb-5   flex justify-between text-gray-500 text-sm">
                                                <p>#Travel</p>
                                                <p>5 mins read</p>
                                        </span>
                                        <h4 className="text-third text-3xl">Helpful Tips for Working from Home as a Freelancer</h4>
                                        <span className="my-5   flex justify-between text-gray-500 text-sm">
                                                <span className="text-gray-600 flex gap-3">
                                                    <img className="object-cover rounded-full w-[70px] h-[70px]" src="/images/InvisionAaronStump.jpg"/>
                                                    <span className="my-auto">
                                                    <p>
                                                         Joseph
                                                       
                                                    </p>
                                                    <p>
                                                         
                                                        25 April 2023
                                                    </p>
                                                    </span>
                                                   
                                                </span>
                                                <span className="my-auto flex   gap-2  "
                                                  
                                                >
                                                 <button className="overflow-hidden group">
                                                  <div className="group-hover:rotate-90 transiton ease-in duration-300 text-xl group-hover:text-second 	">
                                                    ↑
                                                  </div>
                                                        <div className="translate-y-[100%] group-hover:translate-y-0 transiton ease-in duration-300	group-hover:text-second">
                                                          Read more
                                                        </div>
                                                  </button>
                                                </span>
                                        </span>
                            </div>
              </div>
    </div>
</div>
  )
}

export default Featured