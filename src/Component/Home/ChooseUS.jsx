import React from 'react'
import chooseus from "../../assets/img/chooseUs.avif"
import introbg from "../../assets/img/introbg.avif"
export default function ChooseUS() {
  return (
    <div className='w-full mt-5 flex justify-between flex-wrap '>
   
      <div className='lg:w-[50%] p-5 ' data-aos="fade-down">
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

         <div className='lg:w-[40%]'>
        <img src={introbg} alt="" className='w-full relative bottom-35' />
      </div>
    </div>
  )
}
