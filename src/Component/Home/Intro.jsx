import React from 'react'
import introbg from "../../assets/img/introbg.avif"
import introbg2 from "../../assets/img/introbg2.avif"
import aos from "aos"
import { useEffect } from 'react'
export default function() {
      useEffect(()=>{
         aos.init({
          duration:1000
         })
      },[])
  return (
    <div>
       <div className="container-lg mx-auto    p-4">
            <div className='flex justify-between p-6 flex-wrap'>
                <div className='lg:w-[40%] h-150  flex' data-aos="fade-right">
                    <img src={introbg} alt="" className=""  />
                    <img src={introbg2} alt=""  className='w-100 h-130 relative top-40 right-50 '/>
                </div>
                <div className='lg:w-[40%]' data-aos="fade-left">
                    <h3 className='text-sm font-semibold text-yellow-200 my-2'>STAY IN THE HEART OF BELPAHARI</h3>
                    <h2 className='text-5xl text-white mt-5 '>Where Nature Nurtures <br /> and Tradition Lives On</h2>
                    <p className='text-gray-400 mt-5'>Salbari Resort is more than just a place to stay — it’s a return to what truly matters. Nestled deep within Bengal’s ancient Sal forest, our retreat is built on a love for nature, tribal heritage, and soulful living. Every mud wall, stone path, and forest trail reflects a quiet promise: to offer guests an experience that is authentic, immersive, and deeply rejuvenating. Whether you come seeking stillness or stories, we welcome you with warmth, simplicity, and the spirit of the forest</p>
                 <button className="px-3 py-2 border
              cursor-pointer
              border-yellow-100
               text-white hover:bg-white hover:text-gray-600  mt-5
               ">Start Exploring</button>
                </div>
            </div>
       </div>
    </div>
  )
}
