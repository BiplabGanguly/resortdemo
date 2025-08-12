import React from 'react'
import nature from "../../../assets/img/nature.avif"
import taste from "../../../assets/img/taste.avif"
import unplug from "../../../assets/img/unplug.avif"
import '..//home.style.css'
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function Service() {
    return (
        <div className='container  mx-auto px-5 '>
            <div className='w-[96%] mx-auto bg-black shadow-lg'>

                <div className='flex w-full items-center flex-wrap gap-4 border justify-between ' >
                    <div className='lg:w-[50%] md:w-[48%] w-full '>
                        <img src={nature} alt="" className='w-full h-85 serviceImg' />
                    </div>
                    <div className=' lg:px-8 p-5 lg:w-[48%] md:w-[48%] w-full' data-aos="fade-left">
                        <h3 className='text-[#AB916C] text-2xl'>Nature at Your Doorstep</h3><br />
                        <p className=' text-md text-gray-300 font-serif '>
                            Wake up to birdsong, sip tea with forest views, and explore scenic trails, lakes, and waterfalls nearby.</p>
                        <ExploreBtn/>
                    </div>
                </div>

                <div className='flex w-full items-center flex-wrap-reverse gap-4 justify-between '>

                    <div className='p-7 lg:w-[48%] md:w-[48%] ' data-aos="fade-right">
                        <h3 className='text-[#AB916C] text-2xl'>Taste the Forest</h3><br />
                        <p className=' text-md text-gray-300 font-serif '>
                            Feast on our signature Salpata Chicken — a local delicacy slow-cooked in sal leaves over woodfire.</p>
                        <ExploreBtn/>
                    </div>
                    <div className='lg:w-[50%] md:w-[48%] w-full border '>
                        <img src={taste} alt="" className='w-full h-80 serviceImg' />
                    </div>
                </div>

                <div className='flex w-full items-center flex-wrap gap-4  justify-between'>
                    <div className='lg:w-[50%] md:w-[48%] w-full'>
                        <img src={unplug} alt="" className='w-full h-80 serviceImg' />
                    </div>
                    <div className=' p-7 lg:w-[48%] md:w-[48%]' data-aos="fade-left">
                        <h3 className='text-[#AB916C] text-2xl'>Unplug. Unwind. Reconnect.</h3><br />
                        <p className=' text-md text-gray-300 font-serif '>
                            Bonfire nights, stargazing, and the deep stillness of nature — Salbari is where peace finds you.</p>
                        <ExploreBtn/>
                    </div>
                </div>

            </div>
        </div>
    )
}
