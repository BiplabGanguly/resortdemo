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
        <div className='w-full bg-[#53624E] mt-8 flex justify-between flex-wrap '>
            <div className='lg:w-[50%] w-full'>
                <img src={dine} alt="" className='w-full h-200  relative bottom-15' data-aos="fade-right" />
            </div>
            <div className='lg:w-[48%]  p-7 ' data-aos="fade-left">
                <br /><br />
                <h3 className='text-yellow-200 text-sm'>The Salbari Restrurent
                    What Sets Us Apart</h3><br />
                <h2 className='text-5xl text-white '>Dine at Salbari Restaurant </h2>
                <p className='text-gray-200 mt-5'>
                    At Salbari Restaurant, every meal is an experience steeped in tradition and taste. Set in the heart of the forest, our kitchen serves up soulful local cuisine, crafted with fresh ingredients and love. From rustic flavours to regional specialties, each dish is a celebration of Bengal’s culinary heritage.
                </p>
                <button className="px-3 py-2 border
              cursor-pointer
              border-yellow-100
               text-white hover:bg-white hover:text-gray-600 
               my-5
               ">Start Exploring</button>
            </div>
        </div>
    )
}
