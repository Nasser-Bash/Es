import { useRef ,useCallback} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft , faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {  Navigation ,Autoplay ,FreeMode} from "swiper/modules";

function Topics() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);
  return (
    <div className="topics border border-third lg:grid grid-cols-5 p-5 rounded-xl bg-primary">
        <div className="topics-content col-span-1 p-5">
        <h4 className="text-2xl text-fourth mb-3">Hot topics</h4>
            <p className="text-lg text-gray-500 mb-3">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</p>
            <span className="text-third flex gap-4 text-2xl">
            <FontAwesomeIcon className="cursor-pointer" onClick={handlePrev} icon={faArrowAltCircleLeft}/>
            <FontAwesomeIcon className="cursor-pointer" onClick={handleNext} icon={faArrowAltCircleRight}/>
            </span>
     
        </div>
        <Swiper
        ref={sliderRef}
  breakpoints={{
   
      // when window width is >= 768px
      1024:{
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      450: {
        slidesPerView: 2,
      },
      
    }}
    spaceBetween={50}
      navigation={true}
    
      speed={1200}
      loop
     
      
      autoplay={{
          delay: 3500,
          disableOnInteraction: false,
      }}
    modules={[ Autoplay  ,Navigation]}
   
      className="col-span-4 w-full "
      mousewheel={false}
    >
 
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/blog-2.webp"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Travel</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/blog-1.webp"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Culture</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/blog-4.webp"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Animal</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/news7.png"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Lifestyle</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/news6.png"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">
Fashion</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/news4.png"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Food</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover   w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/news3.png"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Space</h4>
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
                
      </div>
  </SwiperSlide>
  <SwiperSlide className="" >
       <div className="swiper-slide  relative group overflow-hidden rounded-xl cursor-pointer">
                <img className="object-cover  w-50  h-[15rem] group-hover:scale-125 transition duration-150  " src="/images/news2.png"/>
                <span className="absolute bottom-0 p-5 w-full font-bold">
                <h4 className="text-xl text-fourth group-hover:text-second transition duration-150 ">Plant</h4> 
                <h4 className="text-sm text-third">36 Articles</h4>
                </span>
      </div>
  </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Topics