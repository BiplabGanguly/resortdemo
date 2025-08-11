import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <div>
            <div className='w-full  flex flex-wrap p-5  my-8 border-b border-gray-700'>

                <div className='lg:w-[45%] w-full p-5'  >
                    <h3 className='text-md text-[#AB916C]'>Stay tuned with The Salbari Resort & Restaurant</h3>
                    <h4 className='text-white text-2xl my-4'>

                        Sign up for our newsletter to <br /> receive our news, deals and <br />special offers.
                    </h4>

                </div>
                <div className='lg:w-[50%] w-full flex justify-center items-center '>
                    <div className='w-full' >

                        <input type="text" className='border-b border-gray-300 w-full p-3 text-gray-400' placeholder='Your Email Address' />
                        <input type="checkbox" className='text-white my-4' /> <span className='text-gray-400'>I agree to the Privacy & Policy</span>

                    </div>
                </div>


            </div>
            {/* inner footer */}
            <div className='w-full p-4 flex justify-around'>
                <h2 className='text-white text-sm'>© The Salbari Resort & Restaurant. Design and Develop by anonymous</h2>
                <div>

                </div>
                <div className='flex gap-5 px-5 '> 
                    <FaFacebookF  color='white' size={25}/>
                    <FaTwitter color='white' size={25}/>
                    <FaInstagram  color='white' size={25}/>
                    <FaYoutube  color='white' size={25}/>

                </div>

            </div>
        </div>

    )
}
