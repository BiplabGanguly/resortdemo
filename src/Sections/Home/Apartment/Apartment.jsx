import React from 'react'
import aos from 'aos'
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { stays } from '../../../ApartmentData';
import { Link } from 'react-router-dom';
export default function Apartment() {
    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className='w-full  pt-[60px]'>
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-yellow-200 uppercase font-semibold text-sm mt-5 '>Extraordinary Accommodations</h3>
                <h1 className='lg:text-5xl text-white text-2xl
              my-4
            '>Choose Your Apartment Type</h1>
            </div>
            <div className='container mx-auto mt-5 mb-5 px-4 py-5'>
                <div className='px-5 flex justify-around items-center  gap-5  flex-wrap ' data-aos="fade-up">
                    {
                        stays.map((item) => (
                            <Link
                                key={item.id}
                                to={`/apartment/${item.id}`}
                                className='apartmentCard1'
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    margin:'5px 0px'
                                }}
                            >
                                <div className='cardpopUp mb-[30px] w-[260px] h-[60px] text-[18px]'>
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