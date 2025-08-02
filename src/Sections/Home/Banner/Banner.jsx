import React, { useEffect } from 'react'
import "./Banner.style.css"
import Navbar from '../Navbar/Navbar'
import aos from 'aos'
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(()=>{
     aos.init({
      duration:1000
     })
  },[])
  return (
    <>
        <div className='BannerImg'>
        <Navbar/>
        {/* hero section */}
        <div className='flex  flex-col justify-center items-center  h-[520px]'>
          <div>
            <h3 className='text-xs text-yellow-300 font-semibold tracking-widest' data-aos="zoom-in-down">WELCOME TO THE SALBARI RESORT & RESTAURANT </h3>
          </div>
          <div className='flex justify-center items-center ' data-aos="zoom-in-up">
            <h2 className='text-white md:text-8xl text-5xl text-center'>Where forest whisper <br /> &  luxury listen</h2>
          </div>
        </div>

    </div>
   
    </>

  )
}
