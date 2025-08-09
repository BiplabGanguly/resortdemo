import React, { useEffect } from 'react'
import "./Banner.style.css"
import Navbar from '../Navbar/Navbar'
import aos from 'aos'
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';

export default function Banner() {
  const path = useLocation()
  console.log(path)
  useEffect(() => {
    aos.init({
      duration: 1000
    })
  }, [])
  return (
    <>
      <div className='BannerImg'>
        <Navbar />
        {/* hero section */}
        <div className=' flex  w-full flex-col justify-center items-center flex-wrap  h-[530px]'>
          <div>
            <h3 className='text-xs text-yellow-300 font-semibold tracking-widest' data-aos="zoom-in-down">WELCOME TO THE SALBARI RESORT & RESTAURANT </h3>
          </div>
          <div className='flex justify-center items-center ' data-aos="zoom-in-up">
            <h2 className='text-white lg:text-8xl text-3xl text-center'>Where forest whisper <br /> &  luxury listen</h2>

          </div>
          {
            path.pathname === "/" ? (
              <div className=' w-[80%] '><br />
                <form action="" className=' border border-[#897862] mt-5 mx-auto  p-2 flex flex-wrap  gap-4'>
                  <div className=' flex items-center justify-center gap-4 border border-[#897862] lg:w-[35%]  w-full flex-wrap'>
                    <div>
                      <label htmlFor="" className='text-white text-md '>Check In </label>
                    </div>
                    <div>
                      <input type="date" defaultValue="2025-08-09" className=' text-white p-3 w-full outline-none' />
                    </div>
                  </div>
                  <div className='flex items-center gap-4 border justify-center border-[#897862] lg:w-[35%]  w-full flex-wrap'>
                    <div>
                      <label htmlFor="" className='text-white text-sm'>Check out</label>
                    </div>
                    <div>
                      <input type="date" defaultValue="2025-08-09" className=' text-white p-3  w-full outline-none' />

                    </div>

                  </div>
                  <div className='lg:w-[25%] w-full '>

                    <button className='text-black
                 bg-white px-6 py-3 border
                  border-yellow-50 cursor-pointer
                   hover:bg-white hover:text-black 
                   
                   w-full
                   '>Check Now</button>

                  </div>

                </form>
              </div>
            ) : null
          }


        </div>

      </div>

    </>

  )
}
