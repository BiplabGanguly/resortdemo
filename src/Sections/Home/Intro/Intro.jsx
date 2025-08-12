import introbg2 from "../../../assets/img/introbg2.avif"
import aos from "aos"
import { useEffect } from 'react'
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function () {
  useEffect(() => {
    aos.init({
      duration: 1000,
      disable: () => {
        const width = window.innerWidth;
        return width >= 768 && width <= 1024; // tablet range
      }
    })
  }, [])
  return (
    <div>
      <div className="container-lg  mx-auto p-6 ">
        <div className='flex justify-center items-center pt-[70px] flex-wrap lg:gap-10 gap-7 '>
          <div className='lg:w-[44%] md:w-[40%]  w-full flex ' data-aos="fade-right">
            <img src={introbg2}
              alt="" className="lg:w-[488px] lg:h-[600px] h-80 " />
            <img src="https://static.wixstatic.com/media/7befdd_e300f5339575423fb82f75b4658179fd~mv2.jpg/v1/fit/w_640,h_480,q_90,enc_avif,quality_auto/7befdd_e300f5339575423fb82f75b4658179fd~mv2.jpg" alt="" className='xl:block hidden   lg:w-[315px]  h-[442px] relative top-60 right-50  ' />
          </div>
          <div className='lg:w-[48%] md:w-[50%]  w-full ' data-aos="fade-left">
            <h3 className='text-sm tracking-widest text-[#AB916C] my-2'>STAY IN THE HEART OF BELPAHARI</h3>
            <h2 className='lg:text-5xl text-2xl text-white tracking-wider mt-5 '>Where Nature Nurtures and Tradition Lives On</h2>
            <p className='text-gray-300 tracking-wider mt-5 lg:text-[1rem] md:text-sm font-serif text-justify'>Salbari Resort is more than just a place to stay — it’s a return to what truly matters. Nestled deep within Bengal’s ancient Sal forest,
              our retreat is built on a love for nature, tribal heritage, and soulful living. Every mud wall, stone path,
              and forest trail reflects a quiet promise: to offer guests an experience that is authentic, immersive,
              and deeply rejuvenating. Whether you come seeking stillness or stories, we welcome you with warmth,
              simplicity, and the spirit of the forest</p>
            <ExploreBtn />
          </div>
        </div>
      </div>
    </div>
  )
}
