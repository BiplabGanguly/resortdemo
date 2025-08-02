import React from 'react'
import nature from "../../../assets/img/nature.avif"
import taste from "../../../assets/img/taste.avif"
import unplug from "../../../assets/img/unplug.avif"
import '..//home.style.css'
import ExploreBtn from '../../../Components/ExploreButton/ExploreBtn'
export default function Service() {
    return (
        <div className='container  mx-auto px-5 '>
            <div className='w-[90%] mx-auto bg-black shadow-lg'>

                <div className='flex w-full items-center ' >
                    <div className='lg:w-[50%] '>
                        <img src={nature} alt="" className='w-full h-80 serviceImg' />
                    </div>
                    <div className=' px-8 lg:w-[50%]' data-aos="fade-left">
                        <h3 className='text-yellow-200 text-2xl'>Nature at Your Doorstep</h3><br />
                        <p className=' text-md text-gray-400 font-serif '>
                            Wake up to birdsong, sip tea with forest views, and explore scenic trails, lakes, and waterfalls nearby.</p>
                        <ExploreBtn/>
                    </div>
                </div>

                <div className='flex w-full items-center '>

                    <div className='p-7 lg:w-[50%] ' data-aos="fade-right">
                        <h3 className='text-yellow-200 text-2xl'>Taste the Forest</h3><br />
                        <p className=' text-md text-gray-400 font-serif '>
                            Feast on our signature Salpata Chicken — a local delicacy slow-cooked in sal leaves over woodfire.</p>
                        <ExploreBtn/>
                    </div>
                    <div className='lg:w-[50%]  '>
                        <img src={taste} alt="" className='w-full h-80 serviceImg' />
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <div className='lg:w-[50%] '>
                        <img src={unplug} alt="" className='w-full h-80 serviceImg' />
                    </div>
                    <div className=' p-7 lg:w-[50%]' data-aos="fade-left">
                        <h3 className='text-yellow-200 text-2xl'>Unplug. Unwind. Reconnect.</h3><br />
                        <p className=' text-md text-gray-400 font-serif '>
                            Bonfire nights, stargazing, and the deep stillness of nature — Salbari is where peace finds you.</p>
                        <ExploreBtn/>
                    </div>

                </div>

            </div>
        </div>
    )
}
