import React from 'react'
import chooseus from "../../../assets/img/chooseUs.avif"
import introbg from "../../../assets/img/introbg.avif"
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function ChooseUS() {
  return (
    <div className='w-full mt-5 flex justify-between flex-wrap-reverse '>

      <div className='lg:w-[50%] w-full p-5' data-aos="fade-down">
        <br /><br />
        <h3 className='text-yellow-200 text-sm'>The Salbari Restrurent
          What Sets Us Apart</h3><br />
        <h2 className='lg:text-5xl text-2xl text-white '>Dine at Salbari Restaurant </h2>
        <p className='text-gray-200 mt-5 text-sm'>
          At Salbari Restaurant, every meal is an experience steeped in tradition and taste. Set in the heart of the forest, our kitchen serves up soulful local cuisine, crafted with fresh ingredients and love. From rustic flavours to regional specialties, each dish is a celebration of Bengal’s culinary heritage.
        </p>
        <ExploreBtn />
      </div>

      <div className='lg:w-[48%] '>
        <img src={introbg} alt="" className='w-full relative  lg:bottom-35' />
      </div>
    </div>
  )
}
