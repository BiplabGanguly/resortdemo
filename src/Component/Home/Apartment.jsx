import React from 'react'
import "./home.style.css"
import aos from 'aos'
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { stays }   from '../../ApartmentData';
import { Link } from 'react-router-dom';
export default function Apartment() {
    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className='w-full'>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-yellow-200 uppercase font-semibold text-sm mt-5 '>Extraordinary Accommodations</h3>
                <h1 className='text-5xl text-white
              my-4
            '>Choose Your Apartment Type</h1>
            </div>
            <div className='container mx-auto  mb-5 px-4 py-5'>
                <div className='px-5 flex justify-evenly flex-wrap' data-aos="fade-up"    >
                    {
                        stays.map((item) => (
                            <Link to={`/apartment/${item.id}`} className='apartmentCard1'   >
                                <div className='cardpopUp'>
                                    <h2 className='text-white'>{item.title}</h2>
                                </div>
                            </Link>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}