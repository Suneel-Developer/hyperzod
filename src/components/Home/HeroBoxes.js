import React from 'react'
import Image1 from "../../assets/1.png"
import Image2 from "../../assets/2.png"

const HeroBoxes = () => {
    return (
        <section className='px-4 flex flex-col'>
            <div className='max-w-[1310px] mx-auto w-full py-[30px] grid grid-cols-1 md:grid-cols-2 order-2 md:order-1'>

                {/* Become a Driver Box  */}
                <div className='flex flex-col h-full justify-center w-full order-2 md:order-1'>
                    <h1 className='my-[30px] text-3xl md:text-[40px] text-[#252525] font-semibold'>
                        Become a Driver
                    </h1>

                    <p className='text-base leading-[1.5rem] text-[#252525] mb-4'>
                        Work full or flexi hours and keep 100% of all your tips.
                    </p>

                    <button className='py-[14px] px-8 rounded-[50px] text-[#252525] bg-[#6DCFF6] w-fit hover:bg-[#68c6ec] transition duration-500 font-semibold text-base'>
                        Apply Now
                    </button>
                </div>
                <div className='flex justify-end w-full order-1 md:order-2'>
                    <img src={Image1} alt="Become a Driver" className='w-full md:w-[88%] rounded-[30px] object-cover transition-transform duration-300 transform scale-[.97] hover:scale-100' />
                </div>
            </div>



            {/* List your restaurant Box  */}
            <div className='max-w-[1310px] mx-auto w-full py-[30px] grid grid-cols-1 md:grid-cols-2 order-1 md:order-2'>

                <div className='flex flex-col h-full justify-center w-full order-2'>
                    <h1 className='my-[30px] text-3xl md:text-[40px] text-[#252525] font-semibold'>
                        List your restaurant
                    </h1>

                    <p className='text-base leading-[1.5rem] text-[#252525] mb-4'>
                    Access more customers, increase sales and make your restaurant a local legend.
                    </p>

                    <button className='py-[14px] px-8 rounded-[50px] text-[#252525] bg-[#6DCFF6] w-fit hover:bg-[#68c6ec] transition duration-500 font-semibold text-base'>
                        Get Started
                    </button>
                </div>
                <div className='flex justify-start w-full order-1'>
                    <img src={Image2} alt="List your restaurant" className='w-full md:w-[88%] rounded-[30px] object-cover transition-transform duration-300 transform scale-[.97] hover:scale-100' />
                </div>
            </div>
        </section>
    )
}

export default HeroBoxes