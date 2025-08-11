import React, { useEffect } from 'react'
import dine from "../../../assets/img/dine.avif"
import aos from 'aos'

export default function Dine() {
    useEffect(() => {
        aos.init({
            duration: 1500
        })
    }, [])
    return (
        <div className='w-full bg-[#53624E] mt-8 flex justify-between items-center flex-wrap '>
            <div className='lg:w-[45%] md:w-[50%] w-full'>
                <img src={dine} alt="" className='w-full lg:h-160 h-100 relative bottom-15' data-aos="fade-right" />
            </div>
            <div className='lg:w-[48%] md:w-[45%] p-7 ' data-aos="fade-left">
                <br /><br />
                <h3 className='text-[#AB916C] text-sm'>The Salbari Restrurent
                    What Sets Us Apart</h3><br />
                <h2 className='text-5xl text-white '>Dine at Salbari Restaurant </h2>
                <p className='text-gray-300 mt-5 text-justify font-serif'>
                    At Salbari Restaurant, every meal is an experience steeped in tradition and taste. Set in the heart of the forest, our kitchen serves up soulful local cuisine, crafted with fresh ingredients and love. From rustic flavours to regional specialties, each dish is a celebration of Bengal’s culinary heritage.
                </p>
                <button className="px-3 py-2 border
              cursor-pointer
              border-[#AB916C]
               text-white hover:bg-[#AB916C] hover:text-white
            transitions
            duration-400
            ease-in-out 
               my-5
               ">Start Exploring</button>
            </div>
        </div>
    )
}
