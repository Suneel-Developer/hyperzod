import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className='bg-black px-4'>
            <div className='max-w-[1310px] mx-auto w-full pt-32'>
                <div className='flex justify-between flex-col md:flex-row gap-8 md:gap-4'>

                    {/* Logo  */}
                    <div className='max-w-[522px] w-full'>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className='h-[150px] md:h-[190px] w-[150px] md:w-[190px]' />
                        </Link>
                    </div>

                    <div className='max-w-[426px] w-full'>
                        <p className='text-white text-sm'>516 N Ogden Ave, STE 208, Chicago, IL -60642</p>
                    </div>

                    <ul className='flex flex-col gap-[2px] max-w-[315px] w-full'>
                        <li><Link to="#" className='text-white text-sm'>About Us</Link></li>
                        <li><Link to="#" className='text-white text-sm'>Contact Us</Link></li>
                        <li><Link to="#" className='text-white text-sm'>Merchant Sign Up</Link></li>
                        <li><Link to="#" className='text-white text-sm'>Driver Sign Up</Link></li>
                    </ul>
                </div>

                {/* CopyRightSection  */}
                <div className='border-t border-[#ccc] py-4 mt-20'>
                    <p className='text-white text-sm'>© Hyperzod 2024. All rights reserved</p>
                </div>

            </div>


        </footer>
    )
}

export default Footer