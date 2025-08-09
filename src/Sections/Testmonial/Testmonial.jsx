import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./testmonial.style.css"
export default function Testmonial() {
    const testimonials = [
        {
            name: "Ritika Dey",
            message: "The mud house stay felt like home in the middle of nature. So peaceful and clean",
            role: "",
            img:"https://static.wixstatic.com/media/7befdd_3aeaf730d60f45e3b4bea7776dc25ec8~mv2.jpg/v1/fill/w_351,h_364,fp_0.53_0.15,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download%20(20).jpg"
        },
        {
            name: "Arijit Mukherjee",
            message: "Salpata Chicken is a must-try! Staff were warm, and the forest vibe was surreal.",
            role: "Marketing Lead",
            img:"https://static.wixstatic.com/media/7befdd_cff735931f824ca28332c008a6d11995~mv2.jpg/v1/fill/w_351,h_364,fp_0.48_0.35,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Indian.jpg"
        },
        {
            name: "Neha Sharma",
            message: "Loved everything — the cottage, the calm, and waking up to birdsong. Truly refreshing!",
            role: "Product Manager",
            img:"https://static.wixstatic.com/media/7befdd_f58a34a1265e4db385fa036b01bbda41~mv2.jpg/v1/fill/w_351,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download%20(21)_edited.jpg   "
        },
        {
            name: "Kunal Basu",
            message: "Perfect weekend escape. Bonfire nights and forest walks made it unforgettable.",
            role: "Product Manager",
            img:'https://static.wixstatic.com/media/7befdd_325b66db8fd744f4aa01aadd453c2629~mv2.jpg/v1/fill/w_351,h_364,fp_0.53_0.44,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%F0%9F%92%9A%F0%9F%92%9A.jpg'
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
                <div className='lg:w-[70%] md:w-[60%] w-full  bg-[#53624E] absolute right-0 flex flex-wrap ' >
                    <div className='lg:w-[50%] w-full bg-[url("https://static.wixstatic.com/media/7befdd_dbf51800330b4fc592019cb900c09c51~mv2.jpg/v1/fit/w_854,h_480,q_90,enc_avif,quality_auto/7befdd_dbf51800330b4fc592019cb900c09c51~mv2.jpg")] bg-cover '>
                        <img src="" alt="" />
                    </div>
                    <div className='lg:w-[50%] w-full flex justify-center items-center '>
                        <Swiper
                            modules={[Pagination,Autoplay]}
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
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{
                                        color: "white",
                                        // background: '#f8f8f8',
                                        padding: '30px',
                                        borderRadius: '10px',
                                        display:"flex",
                                        flexDirection:'column',
                                        justifyItems:"center",
                                        alignItems:"center"
                                        // boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <img src={testimonial?.img} alt="" className='size-22 rounded-full'/>
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
