import introbg2 from "../../../assets/img/introbg2.avif"
import aos from "aos"
import { useEffect } from 'react'
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function() {
      useEffect(()=>{
         aos.init({
          duration:1000,
          disable:"mobile"
         })
      },[])
  return (
    <div>
       <div className="container-lg mx-auto p-6 ">
            <div className='flex justify-center items-center pt-[70px] flex-wrap lg:gap-3 gap-7 '>
                <div className='lg:w-[44%] w-full flex ' data-aos="fade-right">
                    <img src="https://static.wixstatic.com/media/7befdd_c0e59212d0a44a00baa5e3346777cc2f~mv2.jpg/v1/fit/w_304,h_224,q_90,enc_avif,quality_auto/7befdd_c0e59212d0a44a00baa5e3346777cc2f~mv2.jpg"
                     alt="" className="lg:w-[488px] lg:h-[650px] h-80 "  />
                    <img src={introbg2} alt=""  className='hidden md:block w-[315px] h-[472px] relative top-60 right-50 '/>
                </div>
                <div className='lg:w-[48%]  ' data-aos="fade-left">
                    <h3 className='text-sm font-semibold tracking-widest text-yellow-200 my-2'>STAY IN THE HEART OF BELPAHARI</h3>
                    <h2 className='lg:text-6xl text-2xl text-white tracking-widest mt-5 '>Where Nature Nurtures <br /> and Tradition Lives On</h2>
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
