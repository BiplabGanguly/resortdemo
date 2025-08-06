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
        <div className='flex w-full flex-col justify-center items-center  h-[520px]'>
          <div>
            <h3 className='text-xs text-yellow-300 font-semibold tracking-widest' data-aos="zoom-in-down">WELCOME TO THE SALBARI RESORT & RESTAURANT </h3>
          </div>
          <div className='flex justify-center items-center ' data-aos="zoom-in-up">
            <h2 className='text-white lg:text-8xl text-5xl text-center'>Where forest whisper <br /> &  luxury listen</h2>
        
          </div>
              <Link to="/RoomBooking" className='font-serif rounded shadow cursor-pointer bg-white p-3 mt-5 '>Start Booking</Link>
        </div>

      </div>

    </>

  )
}
