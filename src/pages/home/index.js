import React from 'react'
import Header from '../../components/Header'
import BannerSlider from '../../components/Home/BannerSlider'
import BrowseCategories from '../../components/Home/BrowseCategories'
import HalfFameSlider from '../../components/Home/HalfFameSlider'
import HotHappeningSlider from '../../components/Home/HotHappeningSlider'
import Footer from '../../components/Footer'
import DealBanner from '../../components/Home/DealBanner'
import FearuredMerchants from '../../components/Home/FeaturedMerchants'
import NearbyMerchants from '../../components/Home/NearbyMerchants'
import MobileNavigation from '../../components/MobileNavigation'
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='mb-20 lg:mb-0'>
            <Header />
            <MobileNavigation />
            <BannerSlider />
            <BrowseCategories />
            <DealBanner />
            <HotHappeningSlider />
            <FearuredMerchants />
            <HalfFameSlider />
            <NearbyMerchants />
            <Footer />
            {/* Confrim message when order is accepted  */}
            <div onClick={(() => navigate('/profile/track-order'))} className='p-[10px] bg-white bg-opacity-95 lg:hidden flex items-center justify-between fixed bottom-[69px] w-full z-50'>
                <div className='flex gap-[10px] opacity-70'>
                    <div className='bg-[#0671e2] py-2 px-4 rounded-xl text-center text-white'>
                        <h2 className='text-base font-medium leading-6'>#4840</h2>
                        <p className='text-xs font-medium leading-4'>6m ago</p>
                    </div>
                    <div className='flex flex-col justify-between py-1'>
                        <h3 className='text-sm font-semibold leading-5'>Your Order is Pending</h3>
                        <h3 className='text-sm font-semibold leading-5 text-[#6b7280]'>Delta Sports</h3>
                    </div>
                </div>
                <div><FaAngleRight className='opacity-60' /></div>
            </div>
        </div>
    )
}

export default Home