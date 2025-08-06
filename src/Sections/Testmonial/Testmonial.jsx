import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Testmonial() {
    const testimonials = [
        {
            name: "Ritika Dey",
            message: "The mud house stay felt like home in the middle of nature. So peaceful and clean",
            role: "",
        },
        {
            name: "Arijit Mukherjee",
            message: "Salpata Chicken is a must-try! Staff were warm, and the forest vibe was surreal.",
            role: "Marketing Lead",
        },
        {
            name: "Neha Sharma",
            message: "Loved everything — the cottage, the calm, and waking up to birdsong. Truly refreshing!",
            role: "Product Manager",
        },
        {
            name: "Kunal Basu",
            message: "Perfect weekend escape. Bonfire nights and forest walks made it unforgettable.",
            role: "Product Manager",
        },
    ];

    return (
        <div>
            <br /><br />
            <div className='MainSectionTestimonial h-130'>
                <div className='lg:w-200 m-5 p-5'>
                    <h2 className='text-2xl  text-yellow-200 mb-3'>A Note from the Founders</h2>
                    <span className='text-gray-300 lg:text-2xl  '>"We created Salbari not as a business, but as a place where people could pause, breathe, and rediscover simplicity. It's our way of preserving tradition, celebrating the forest, and welcoming you like family."</span>
                </div>
                <div className='lg:w-[70%] md:w-[60%] w-full  bg-[#53624E] absolute right-0 flex flex-wrap' >
                    <div className='lg:w-[50%] w-full'>
                        <img src="https://static.wixstatic.com/media/7befdd_aee8dfa09c904da1af61326018f62230~mv2.jpg/v1/fill/w_826,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/walking-6580711_1280.jpg" alt="" />
                    </div>
                    <div className='lg:w-[50%] w-full flex justify-center items-center '>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}

                            pagination={{ clickable: true }}
                        // navigation
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{
                                        color: "white",
                                        // background: '#f8f8f8',
                                        padding: '30px',
                                        borderRadius: '10px',
                                        // boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <p style={{ fontStyle: '' }} className='text-2xl'>"{testimonial.message}"</p>
                                        <h4 style={{ marginTop: '20px' }} className='text-lg'>{testimonial.name}</h4>
                                        <small>{testimonial.role}</small>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    )
}
