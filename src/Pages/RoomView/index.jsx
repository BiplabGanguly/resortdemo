import React from 'react'
import RoomHeader from '../../Sections/RoomView/RoomHeader'
import RoomFacility from '../../Sections/RoomView/RoomFacility'
import { FaWifi } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { GiWaterSplash } from "react-icons/gi";
import { MdOutlineBathroom } from "react-icons/md";
import { GiGardeningShears } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
export default function index() {
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
  return (
    <div>
      <RoomHeader />
      <RoomFacility facilityData={facilityData} />
    </div>
  )
}
