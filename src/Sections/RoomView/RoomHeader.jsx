import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { stays } from "../../ApartmentData"
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export default function RoomHeader() {
    const { id } = useParams();
    const [singleRoom, setsingleRoom] = useState()
    useEffect(() => {
        const filterRoomData = stays.find((item) => item.id.toString() === id);
        setsingleRoom(filterRoomData);
        // console.log(filterRoomData)
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
                    <div className='lg:w-[50%] w-full flex  ' >

                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            className='custom-swipe'
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2000, // Time in ms between slides
                                disableOnInteraction: false, // Keeps autoplay running after user interaction
                            }}
                            loop={true} // Enables continuous loop mode

                        // navigation
                        >
                            {singleRoom?.innerImg.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{
                                        color: "white",
                                        // background: '#f8f8f8',
                                        padding: '30px',
                                        borderRadius: '10px',
                                        // boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <img src={testimonial?.url}
                                            alt="" className="w-full lg:h-[400px] h-80 " />

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* <img src={introbg2} alt="" className='hidden md:block w-[315px] h-[472px] relative top-60 right-50 ' /> */}
                    </div>
                    <div className='lg:w-[45%] p-5'>
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
                        </ul> <br />
                        <Link to={`/bookroom/${singleRoom?.id}`} className='font-serif text-white text-md
                             rounded shadow cursor-pointer 
                             border border-yellow-600
                           hover:bg-amber-200 hover:text-black
                            px-4 py-3 mt-5'>Book Now</Link>

                    </div>
                </div>
            </div>
            {/* <RoomFacility /> */}
        </div>
    )
}
