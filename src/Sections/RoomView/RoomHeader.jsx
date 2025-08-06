import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { stays } from "../../ApartmentData"
import { FiPhoneCall } from "react-icons/fi";

export default function RoomHeader() {
    const { id } = useParams();
    const [singleRoom, setsingleRoom] = useState()
    useEffect(() => {
        const filterRoomData = stays.find((item) => item.id.toString() === id);
        setsingleRoom(filterRoomData);
    }, [])

    return (
        <div>
            <div className=' w-full  flex justify-center items-center flex-col text-center p-5'>
                <div className='w-[50%] p-5'>
                    <h3 className='text-yellow-500 text-sm my-3'>welcome to The Salbari Resor & Restaurent</h3>
                    <h2 className='lg:text-3xl  text-white my-3'>Explore our refined accommodation options and find the perfect space
                        for your stay.</h2>
                    <span className='font-serif text-gray-400'>
                    </span>
                </div>

            </div>
            {/* Actual Room Category Sectiton  */}
            <div className="container-lg mx-auto p-6 ">
                <div className='flex justify-center items-center pt-[70px] flex-wrap lg:gap-10 gap-7 '>
                    <div className='lg:w-[40%] w-full flex  ' >
                        <img src={singleRoom?.img}
                            alt="" className="w-full lg:h-[380px] h-80 " />
                        {/* <img src={introbg2} alt="" className='hidden md:block w-[315px] h-[472px] relative top-60 right-50 ' /> */}
                    </div>
                    <div className='lg:w-[48%] p-5'>
                        <h3 className='text-sm font-semibold tracking-widest text-yellow-200 my-2'>STAY IN THE HEART OF BELPAHARI</h3>
                        <h2 className='lg:text-5xl text-2xl text-white tracking-wider mt-5 '>{singleRoom?.title}</h2>
                        <p className='text-gray-300 font-serif mt-5 mb-4'>{singleRoom?.des}  </p>
                        <ul>
                            <li className='text-white font-serif'>No of Rooms : {singleRoom?.numberOfRooms} </li>
                            <li className='text-white font-serif flex'>Rate :<LiaRupeeSignSolid /> {singleRoom?.ratePerRoom} </li>
                            <li className='text-white font-serif'>Occupancy : {singleRoom?.occupancy} </li>
                            <li className='text-white font-serif'>Beds : {singleRoom?.bedType} </li>
                            <li className='text-white font-serif'>Inclusions : {singleRoom?.inclusions} </li>
                            <li className='text-white font-serif'>Highlight : {singleRoom?.highlight} </li>
                        </ul>
                        <h3 className='text-white text-sm my-4 flex gap-4'>
                            <FiPhoneCall size={30} color='white' /> +91 9883356418 / +91 03221 253229</h3>

                    </div>
                </div>
            </div>
            {/* <RoomFacility /> */}
        </div>
    )
}
