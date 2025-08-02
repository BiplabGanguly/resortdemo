import React from 'react'
import introbg from "../../../assets/img/introbg.avif"
import introbg2 from "../../../assets/img/introbg2.avif"
import aos from "aos"
import { useEffect } from 'react'
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function() {
      useEffect(()=>{
         aos.init({
          duration:1000
         })
      },[])
  return (
    <div>
       <div className="container-lg mx-auto p-6 h-[800px]">
            <div className='flex justify-between pt-[70px] flex-wrap'>
                <div className='lg:w-[48%] h-150 pl-[70px] flex' data-aos="fade-right">
                    <img src="https://static.wixstatic.com/media/7befdd_c0e59212d0a44a00baa5e3346777cc2f~mv2.jpg/v1/fit/w_304,h_224,q_90,enc_avif,quality_auto/7befdd_c0e59212d0a44a00baa5e3346777cc2f~mv2.jpg"
                     alt="" className="w-[488px] h-[650px]"  />
                    <img src={introbg2} alt=""  className='w-[315px] h-[472px] relative top-60 right-50 '/>
                </div>
                <div className='lg:w-[48%] mt-[70px]' data-aos="fade-left">
                    <h3 className='text-sm font-semibold tracking-widest text-yellow-200 my-2'>STAY IN THE HEART OF BELPAHARI</h3>
                    <h2 className='text-6xl text-white tracking-widest mt-5 '>Where Nature Nurtures <br /> and Tradition Lives On</h2>
                    <p className='text-gray-400 tracking-wider mt-5'>Salbari Resort is more than just a place to stay — it’s a return to what truly matters. Nestled deep within Bengal’s ancient Sal forest, 
                      our retreat is built on a love for nature, tribal heritage, and soulful living. Every mud wall, stone path, 
                      and forest trail reflects a quiet promise: to offer guests an experience that is authentic, immersive, 
                      and deeply rejuvenating. Whether you come seeking stillness or stories, we welcome you with warmth,
                       simplicity, and the spirit of the forest</p>
                <ExploreBtn/>
                </div>
            </div>
       </div>
    </div>
  )
}
