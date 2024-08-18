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

const Home = () => {
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
        </div>
    )
}

export default Home