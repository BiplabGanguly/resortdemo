import React, { useEffect, useState } from 'react'
import "./Banner.style.css"
import Navbar from '../Navbar/Navbar'
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';
import booknow from "../../../assets/img/booknow.png"
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
export default function Banner() {
  const path = useLocation()
  // console.log(path)
  const [showPopup, setshowPopup] = useState(true);
  const PopUpMessage = ['hey! hurry Up', 'book now ', 'check the best room']
  useEffect(() => {

    const interval = setInterval(() => {
      setshowPopup(prev => !prev)

    }, 4000);

    return () => clearInterval(interval);
  }, [])
  return (
    <>
      <div className='BannerImg overflow-x-hidden'>
        <Navbar />
        {/* hero section */}
        <div className=' flex  w-full flex-col justify-center items-center flex-wrap  h-[530px]'>
          <div>
            <h3 className='text-xs lg:text-sm text-[#B89D75] tracking-widest' data-aos="zoom-in-down">WELCOME TO THE SALBARI RESORT & RESTAURANT </h3>
          </div>
          <div className='flex justify-center items-center ' data-aos="zoom-in-up">
            <h2 className='text-white text-center text-stroke text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] break-words'>
              Where forest whisper <br /> &  luxury listen</h2>
          </div>
          {
            path.pathname === "/" ? (
              <div className=' w-[80%] ' data-aos="zoom-in-down"><br />
                <form action="" className=' border border-[#897862] mt-5 mx-auto p-1 flex flex-wrap justify-around gap-1 '>
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

                    <button className='text-white
                   bg-transparent px-6 py-3 border
                   border-[#897862] cursor-pointer
                   hover:bg-[#AB916C] 
                   transitions
                   duration-400
                   ease-in-out
                    w-full
                   '>Check Availability</button>

                  </div>

                </form>
              </div>
            ) : null
          }
          {/* 3. Popup Message */}
          {showPopup && (
            <div className='w-67 p-1.5
            fixed bottom-10 lg:right-5 right-13
              animate-bounce
             customPopUp' >
              <IoCloseCircleSharp size={27} className='absolute right-0 -top-3 cursor-pointer' onClick={() => setshowPopup(false)} />
              <AiOutlineMessage size={22} className='' />
              <p className='text-sm '>
                Rooms are selling fast – Book now to secure your spot!
              </p>
            </div>
          )}
        </div>
      </div>

    </>

  )
}
