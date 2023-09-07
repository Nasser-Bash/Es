import TextAnimation from "../../widgets/textAnimation";
function OurValue() {
  return (
    <div className='ourvalue-section lg:grid grid-cols-3 gap-8 relative p-5 '>
       <div className='content text-fourth rounded-3xl p-11 py-24 h-full  custom-gradient-background   mb-5'>
        <TextAnimation>
        <h4 className='text-3xl mb-10 '>Our Value</h4>
        </TextAnimation>
           
           <TextAnimation>
           <p className='text-lg'>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
           </TextAnimation>
           
        </div>
             <img className='col-span-2 object-cover object-top	 w-full rounded-3xl h-[500px]' src='/images/img3.png'/>
   
             <svg viewBox="0 0 100 100" width="100" height="100" fill='white' className='hidden lg:block bg-third rounded-full p-1 absolute top-5  left-[29%] animate-spin 	' style={{
              animationDuration : "3s"
             }}>
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text fontSize="17">
    <textPath xlinkHref="#circle" >
     Explore The METAVERSE
    </textPath>
  </text>
            </svg>
       
    </div>
  )
}

export default OurValue