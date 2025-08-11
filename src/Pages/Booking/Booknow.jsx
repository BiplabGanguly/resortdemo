import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stays } from "../../ApartmentData"
import { IoBedOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import RoomFacility from "../../Sections/RoomView/RoomFacility"
import { FaWifi } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { GiWaterSplash } from "react-icons/gi";
import { GiGardeningShears } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import "../Booking/Booking.style.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GiCampCookingPot } from "react-icons/gi";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
export default function Booknow() {
    const facilityData = [
        {
            id: 1,
            title: "Fast Wi-Fi",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <FaWifi size={35} color='white' />
        },
        {
            id: 2,
            title: "Large Flat-Screen TV",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <FaTv size={35} color='white' />

        },
        {
            id: 3,
            title: "On Demand Room Service",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <FaLaptopHouse size={35} color='white' />

        }
        , {
            id: 4,
            title: "Swimming Pool",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <GiWaterSplash size={35} color='white' />

        }
        , {
            id: 5,
            title: "Elegant Bathroom with Hot & Cold Water",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <MdOutlineBathroom size={35} color='white' />

        }
        , {
            id: 6,
            title: "Designer Toiletries",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <MdOutlineBathroom size={35} color='white' />

        }
        , {
            id: 7,
            title: "Fully Air-Conditioned",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <TbAirConditioning size={35} color='white' />

        }
        , {
            id: 8,
            title: "Balcony with Garden & Forest Views",
            des: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
            icons: <GiGardeningShears size={35} color='white' />

        }
    ]
    const { id } = useParams();
    const [data, setdata] = useState();
    useEffect(() => {
        const filterRoomData = stays.find((item) => item.id.toString() === id);
        setdata(filterRoomData);
        window.scrollTo(100, 620);

    }, [])
    return (
        <div className=' w-full'>
            <div className='container mx-auto   p-5 flex flex-wrap'>
                <div className='lg:w-[60%]  w-full px-3'>
                    <h2 className='text-white text-3xl my-2'>{data?.title}</h2>
                    <h2 className='text-[#AB916C] text-md my-3 font-serif'>{data?.tagline}</h2><br />
                    <p className='text-gray-300 font-serif text-md p-3 text-justify'>{data?.des}</p><br />
                    <ul className='flex flex-col gap-3 px-3'>
                        <li className='text-white font-serif flex gap-3'><IoBedOutline size={25} color='white' />No of Rooms : {data?.numberOfRooms} </li>
                        <li className='text-white font-serif flex gap-3'><HiOutlineDocumentCurrencyRupee size={25} />Rate :<div className='flex items-center'><LiaRupeeSignSolid /> {data?.ratePerRoom}</div> </li>
                        <li className='text-white font-serif flex gap-3'><FaUserFriends size={25} color='white' />Occupancy : {data?.occupancy} </li>
                        <li className='text-white font-serif flex gap-3'><IoBedOutline size={25} color='white' />Beds : {data?.bedType} </li>
                        <li className='text-white font-serif flex gap-3'><GiCampCookingPot size={25} />Inclusions : {data?.inclusions} </li>
                        <li className='text-white font-serif flex gap-3'><HiOutlineDocumentCurrencyRupee size={25} />Highlight : {data?.highlight} </li>
                    </ul> <br />
                </div>
                <div className='lg:w-[37%] w-full px-3 bg-[#1A1C1E] rounded-sm text-white py-3'>
                    <div className='flex justify-between'>
                        <h2>Reserve:</h2>
                        <h3 className='flex gap-2 justify-center items-center'><LiaRupeeSignSolid />{data?.ratePerRoom}/night</h3>
                    </div>
                    <form action="" className='text-white p-4'>
                        <div>
                            <label className='block mb-1'>Check-in</label>
                            <input type="date" className='BookFormInput' />
                        </div>

                        <div>
                            <label className='block mb-1'>Check-out</label>
                            <input type="date" className='BookFormInput' />
                        </div>

                        <div>
                            <label className='block mb-1'>Rooms</label>
                            <input type="number" defaultValue={1} className='BookFormInput' />
                        </div><br />
                        <hr /><br />
                        <div className='flex justify-between'>

                            <label className='block mb-1'>Total Cost</label>
                            <span className='flex justify-center items-center'><LiaRupeeSignSolid />{data?.ratePerRoom}/00</span>
                        </div>
                        <div className='w-full'>
                            <button className='bg-[#B99D75] p-3 w-full my-3 font-semibold cursor-pointer'>Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <room facility component */}
            <RoomFacility facilityData={facilityData} />
        </div>
    )
}
