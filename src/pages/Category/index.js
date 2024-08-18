import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

// Images 
import RatingStar from "../../assets/rating-star.png"
import Banner1 from "../../assets/nearby-merchants/banner-1.png"
import Banner2 from "../../assets/nearby-merchants/banner-2.png"
import Banner10 from "../../assets/nearby-merchants/banner-10.png"
import Banner16 from "../../assets/nearby-merchants/banner-16.png"

import Categoryimage1 from "../../assets/nearby-merchants/1.png"
import Categoryimage2 from "../../assets/nearby-merchants/2.png"
import Categoryimage10 from "../../assets/nearby-merchants/10.png"
import Categoryimage16 from "../../assets/nearby-merchants/16.png"

// data 
const nearbymerchantsdata = [
    {
        id: 1,
        bannerimage: Banner1,
        name: "John's Dining",
        categoryimage: Categoryimage1,
        time: "30 mins",
        distance: "6308.4 km",
        delivery: "£10.00 Delivery",
        tags: "Healthy, Mexican, Burger",
        rating: "3.9",
        sponsored: "Sponsored",
        message: "Every Bite is a Delight!🍴✨"
    },
    {
        id: 2,
        bannerimage: Banner2,
        name: "QuickCart Grocery",
        categoryimage: Categoryimage2,
        time: "30 mins",
        distance: "5274.68 km",
        tags: "Grocery, Healthy",
        sponsored: "Sponsored",
        message: "Freshness Delivered in Minutes! 🛒🚀"
    },
    {
        id: 3,
        bannerimage: Banner10,
        name: "Alex Medicine",
        categoryimage: Categoryimage10,
        time: "15 mins",
        distance: "1417.24 km",
        delivery: "£10.00 Delivery",
        tags: "Healthy, Mexican, Burger",
        rating: "4",
        message: 'Use Coupon code "NEW" for 10% discount'
    },
    {
        id: 4,
        bannerimage: Banner16,
        name: "The Good Egg",
        categoryimage: Categoryimage16,
        time: "15 mins",
        distance: "5274.68 km",
        delivery: "",
        tags: "Breakfast, Healthy",
    },
    {
        id: 5,
        bannerimage: Banner1,
        name: "John's Dining",
        categoryimage: Categoryimage1,
        time: "30 mins",
        distance: "6308.4 km",
        delivery: "£10.00 Delivery",
        tags: "Healthy, Mexican, Burger",
        rating: "3.9",
        sponsored: "Sponsored",
        message: "Every Bite is a Delight!🍴✨"
    },
    {
        id: 6,
        bannerimage: Banner16,
        name: "The Good Egg",
        categoryimage: Categoryimage16,
        time: "15 mins",
        distance: "5274.68 km",
        delivery: "",
        tags: "Breakfast, Healthy",
    },
]


const Category = () => {
    return (
        <>
            <Header />

            <section className='pb-20 lg:pb-40 pt-8 lg:pt-20 px-2 lg:px-5'>
                <h2 className='mb-4 text-xl font-medium text-[#000000DE] max-w-[1300px] mx-auto w-full'>Healthy</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto w-full'>
                    {nearbymerchantsdata.map((merchants, index) => (
                        <div key={index} className='nearby-merchants-card rounded-lg overflow-hidden cursor-pointer'>
                            <div className='h-[200px] w-full relative bg-cover bg-center' style={{ backgroundImage: `url(${merchants.bannerimage})` }}>
                                {merchants.rating && (
                                    <div className='text-xs leading-4 flex items-center justify-center gap-1 py-[6px] px-3 bg-black text-white rounded-[100px] absolute right-2 bottom-2'>
                                        <img src={RatingStar} alt="star" className='w-[14px]' />
                                        {merchants.rating}
                                    </div>
                                )}
                                {merchants.sponsored && (
                                    <span className='bg-[#000000B3] py-1 px-2 text-xs text-white leading-4 rounded-tr text-center absolute left-0 bottom-0'>{merchants.sponsored}</span>
                                )}
                                {merchants.message && (
                                    <div className='absolute left-0 right-0 mx-auto top-4 rounded-full text-xs text-white bg-[#0B1223] py-[6px] px-4 w-fit'>{merchants.message}</div>
                                )}
                            </div>

                            {/* Details  */}
                            <div className='bg-white py-[14px] px-3 md:px-4 flex items-center gap-3 flex-1'>
                                <div className='w-[62px] h-[62px] rounded-lg overflow-hidden'>
                                    <img src={merchants.categoryimage} alt={merchants.name} className='w-full h-full' />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <h3 className='leading-[1.2] capitalize truncate font-semibold mb-[1px] text-[15.2px]'>{merchants.name}</h3>
                                    <ul className='text-xs flex items-center font-medium'>
                                        <li>{merchants.time}</li>
                                        {merchants.distance && (
                                            <li className='flex items-center'>
                                                <div className='w-1 h-1 bg-black rounded-full mx-2'></div>
                                                {merchants.distance}
                                            </li>
                                        )}
                                        {merchants.delivery && (
                                            <li className='flex items-center'>
                                                <div className='w-1 h-1 bg-black rounded-full mx-2'></div>
                                                {merchants.delivery}
                                            </li>
                                        )}
                                    </ul>
                                    <p className='font-medium text-xs leading-4 truncate text-[#8F8F8F]'>{merchants.tags}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Category