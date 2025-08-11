import React from 'react'

export default function Address() {
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold text-white text-center'>Our Location </h2><br />
            </div>
            <div className='w-full h-130 flex flex-wrap  my-8'>

                <div className='lg:w-[50%] w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.740473522351!2d86.74028097481396!3d22.663462929634868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f629bfbf04d165%3A0x3700e8ed3a694d27!2sThe%20Salbari%20Resort%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1754390568778!5m2!1sen!2si"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>

                </div>
                <div className='lg:w-[50%] w-full flex justify-center items-center  addressBG'>
                    <div className='text-center' >
                        <h2 className='text-md text-[#AB916C] '>our Location</h2>
                        <h1 className='text-white text-2xl'>The Salbari Resort & Restaurant</h1>
                        <h2 className='text-white text-xl my-2'>Kuldiha, Kodopal, Belpahari, Midnapore,West Bengal, PIN: 721501</h2>
                        <h3 className='text-white text-sm my-2'>+91 9883356418 / +91 03221 253229</h3>
                        <h3 className='text-white text-sm my-2'>salbariwebsite@gmail.com</h3>


                    </div>
                </div>

            </div>
        </div>

    )
} 3