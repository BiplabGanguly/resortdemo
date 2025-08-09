import React, { useEffect } from 'react'
import "./Banner.style.css"
import Navbar from '../Navbar/Navbar'
import aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Banner() {
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
        <div className='flex w-full flex-col justify-center items-center flex-wrap  h-[530px]'>
          <div>
            <h3 className='text-xs text-yellow-300 font-semibold tracking-widest' data-aos="zoom-in-down">WELCOME TO THE SALBARI RESORT & RESTAURANT </h3>
          </div>
          <div className='flex justify-center items-center ' data-aos="zoom-in-up">
            <h2 className='text-white lg:text-8xl text-3xl text-center'>Where forest whisper <br /> &  luxury listen</h2>

          </div>
          <div className=''><br />
            <form action="" className=' border border-white w-[80%] lg:w-full mt-5 p-3 mx-auto   pb-4 flex flex-wrap  '>
              <div>
                <label htmlFor="" className='text-white text-md'>Check In </label>
                <input type="date" placeholder='check in ' className='border border-yellow-600 text-white px-6 py-3 w-full' />
              </div>
              <div >
                <label htmlFor="" className='text-white text-sm'>Check out</label>
                <input type="date" placeholder='check out ' className='border border-yellow-600 text-white px-6 py-3 w-full ' />

              </div>
              <div>
                <br />
                <button className='text-black bg-white px-6 py-3 border border-yellow-50 cursor-pointer hover:bg-white hover:text-black '>Check Now</button>

              </div>
 
            </form>
          </div>
  
        </div>

      </div>

    </>

  )
}
