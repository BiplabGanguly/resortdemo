import React from 'react'

export default function RoomFacility({facilityData}) {

    return (
        <div className='w-full  mt-5 p-5'>
            <div className='p-5'>
                <h4 className='text-sm text-yellow-700 font-semibold'>The Essential In-Room Amenities</h4>
                <h2 className='lg:text-2xl text-white my-3'>Our spaces have all the essentials you need for your stay.</h2>
            </div>
            <div className='w-full  flex justify-around flex-wrap p-5  gap-5 items-center'>
            {
                facilityData.map((item)=>(
                    <div className='lg:w-[21%] md:w-[40%] w-full  h-50  hover:shadow-2xl   p-3'>
                        <span >{item?.icons}</span>
                        <h3 className='font-serif text-white mt-4'>{item?.title}</h3>
                        <span className='text-gray-400 font-serif'>{item?.des}</span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
