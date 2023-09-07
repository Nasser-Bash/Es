import { Fade } from "react-reveal";

function Tags() {
  return (
    <div className="tags my-20">
        <h4 className="text-5xl text-second mb-8">Popular Tags</h4>
        <p className="text-third text-lg mb-10"> Most searched keywords</p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2   gap-6 	">

            <Fade >
                
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/tag1.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">
Business</h4>
                </div>
            </Fade>
             
            <Fade delay={100}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news2.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Nature</h4>
                </div>
            </Fade>

            <Fade delay={200}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news1.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Plant</h4>
                </div>
            </Fade>

            <Fade delay={300}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news3.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">
Interior</h4>
                </div>
            </Fade>

            <Fade delay={400}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news4.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Minimal</h4>
                </div>
            </Fade>

            <Fade delay={500}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news6.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Animal</h4>
                </div>
            </Fade>

            <Fade delay={600}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/news7.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Space</h4>
                </div>
            </Fade>

            <Fade delay={700}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/img3.png"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Food</h4>
                </div>
            </Fade>

            <Fade delay={800}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/blog-2.webp"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Fashion</h4>
                </div>
            </Fade>

            <Fade delay={900}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/blog-3.webp"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Lifestyle</h4>
                </div>
            </Fade>

            <Fade delay={1000}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/blog-4.webp"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Culture</h4>
                </div>
            </Fade>

            <Fade delay={1100}>
                <div className="tag flex gap-3 p-4 border border-third rounded-2xl group cursor-pointer  justify-center hover:translate-y-[-5px] hover:border-second tansition duration-300 ">
                            <img className="w-[40px] h-[40px] rounded-full objcet-cover" src="/images/blog-10.webp"/>
                            <h4 className="text-sm text-third my-auto group-hover:text-second">Travel
</h4>
                </div>
            </Fade>
               
        </div>
    </div>
  )
}

export default Tags