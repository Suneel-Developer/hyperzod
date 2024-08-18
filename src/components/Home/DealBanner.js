import React from 'react'
import DealsBannerDesktop from "../../assets/deal-banner.png"
import DealsBannerMobile from "../../assets/deal-banner-mobile.png"

const DealBanner = () => {
  return (
    <section className='pt-8 px-2 lg:px-5'>
        <img src={DealsBannerDesktop} alt="DealsBannerDesktop" className='hidden md:block cursor-pointer' />
        <img src={DealsBannerMobile} alt="DealsBannerMobile" className='block md:hidden cursor-pointer' />
    </section>
  )
}

export default DealBanner