import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Images 
import RatingStar from "../../assets/rating-star.png"
import Banner1 from "../../assets/nearby-merchants/banner-1.png"
import Banner2 from "../../assets/nearby-merchants/banner-2.png"
import Banner3 from "../../assets/nearby-merchants/banner-3.png"
import Banner4 from "../../assets/nearby-merchants/banner-4.png"
import Banner5 from "../../assets/nearby-merchants/banner-5.png"
import Banner6 from "../../assets/nearby-merchants/banner-6.jpeg"
import Banner7 from "../../assets/nearby-merchants/banner-7.jpeg"
import Banner8 from "../../assets/nearby-merchants/banner-8.jpeg"
import Banner9 from "../../assets/nearby-merchants/banner-9.png"
import Banner10 from "../../assets/nearby-merchants/banner-10.png"
import Banner11 from "../../assets/nearby-merchants/banner-11.png"
import Banner12 from "../../assets/nearby-merchants/banner-12.png"
import Banner13 from "../../assets/nearby-merchants/banner-13.png"
import Banner14 from "../../assets/nearby-merchants/banner-14.png"
import Banner15 from "../../assets/nearby-merchants/banner-15.png"
import Banner16 from "../../assets/nearby-merchants/banner-16.png"
import Banner17 from "../../assets/nearby-merchants/banner-17.png"
import Banner18 from "../../assets/nearby-merchants/banner-18.png"
import Banner19 from "../../assets/nearby-merchants/banner-19.png"
import Banner20 from "../../assets/nearby-merchants/banner-20.png"
import Banner21 from "../../assets/nearby-merchants/banner-21.png"
import Banner22 from "../../assets/nearby-merchants/banner-22.png"
import Banner23 from "../../assets/nearby-merchants/banner-23.png"

import Categoryimage1 from "../../assets/nearby-merchants/1.png"
import Categoryimage2 from "../../assets/nearby-merchants/2.png"
import Categoryimage3 from "../../assets/nearby-merchants/3.png"
import Categoryimage4 from "../../assets/nearby-merchants/4.png"
import Categoryimage5 from "../../assets/nearby-merchants/5.png"
import Categoryimage6 from "../../assets/nearby-merchants/6.png"
import Categoryimage7 from "../../assets/nearby-merchants/7.png"
import Categoryimage8 from "../../assets/nearby-merchants/8.svg"
import Categoryimage9 from "../../assets/nearby-merchants/9.png"
import Categoryimage10 from "../../assets/nearby-merchants/10.png"
import Categoryimage11 from "../../assets/nearby-merchants/11.png"
import Categoryimage12 from "../../assets/nearby-merchants/12.png"
import Categoryimage13 from "../../assets/nearby-merchants/13.png"
import Categoryimage14 from "../../assets/nearby-merchants/14.png"
import Categoryimage15 from "../../assets/nearby-merchants/15.png"
import Categoryimage16 from "../../assets/nearby-merchants/16.png"
import Categoryimage17 from "../../assets/nearby-merchants/17.png"
import Categoryimage18 from "../../assets/nearby-merchants/18.png"
import Categoryimage19 from "../../assets/nearby-merchants/19.png"
import Categoryimage20 from "../../assets/nearby-merchants/20.png"
import Categoryimage21 from "../../assets/nearby-merchants/21.png"
import Categoryimage22 from "../../assets/nearby-merchants/22.png"
import Categoryimage23 from "../../assets/nearby-merchants/23.png"

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
        bannerimage: Banner3,
        name: "Max Clothing Store",
        categoryimage: Categoryimage3,
        time: "10 mins",
        distance: "12315.9 km",
        delivery: "£10.00 Delivery",
        tags: "Clothing, Shoes & Footwear",
        rating: "3.5",
        sponsored: "Sponsored",
        message: "Use coupon 'iconic30' for $30 discount ✨"
    },
    {
        id: 4,
        bannerimage: Banner4,
        name: "Lumina Decor",
        categoryimage: Categoryimage4,
        time: "30 mins",
        distance: "6308.4 km",
        sponsored: "Sponsored",
        message: "Experience Decor in 3D Clarity! 🌟"
    },
    {
        id: 5,
        bannerimage: Banner5,
        name: "Blossom Flower Store",
        categoryimage: Categoryimage5,
        time: "30 mins",
        distance: "6309.37 km",
        sponsored: "Sponsored",
        message: "Vibrant Blooms, Instantly Delivered! 🌸"
    },
    {
        id: 6,
        bannerimage: Banner6,
        name: "Morris Electrician & Appliance Repair",
        categoryimage: Categoryimage6,
        time: "30 mins",
    },
    {
        id: 7,
        bannerimage: Banner7,
        name: "Women Hair Studio",
        categoryimage: Categoryimage7,
        time: "30 mins",
    },
    {
        id: 8,
        bannerimage: Banner8,
        name: "Buck's Restaurant",
        categoryimage: Categoryimage8,
        time: "60 mins",
        distance: "1095.91 km",
        delivery: " £5.00 Delivery",
        tags: "Bubble Tea",
        rating: "4.5",
    },
    {
        id: 9,
        bannerimage: Banner9,
        name: "Duke's Pet Shop",
        categoryimage: Categoryimage9,
        distance: "1274.15 km",
        tags: "Pet food",
    },
    {
        id: 10,
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
        id: 11,
        bannerimage: Banner11,
        name: "The Milkshake Hub",
        categoryimage: Categoryimage11,
        time: "30 mins",
        distance: "1609.65 km",
        delivery: "",
        tags: "Grocery",
        rating: "3.7",
    },
    {
        id: 12,
        bannerimage: Banner12,
        name: "Henry Car Parts",
        categoryimage: Categoryimage12,
        time: "0",
        distance: "5274.54 km",
    },
    {
        id: 13,
        bannerimage: Banner13,
        name: "Drake's",
        categoryimage: Categoryimage13,
        time: "30 mins",
        distance: "5274.68 km",
        tags: "Breakfast, Burger",
        rating: "5",
    },
    {
        id: 14,
        bannerimage: Banner14,
        name: "Charlie's chicken",
        categoryimage: Categoryimage14,
        time: "30 mins",
        distance: "5274.68 km",
        delivery: "",
        tags: "Asian, Wings, Burger",
        rating: "5",
    },
    {
        id: 15,
        bannerimage: Banner15,
        name: "Tom's Bakery",
        categoryimage: Categoryimage15,
        time: "30 mins",
        distance: "5274.68 km",
        delivery: "£50.00 Delivery",
        tags: "Grocery, Bakery",
    },
    {
        id: 16,
        bannerimage: Banner16,
        name: "The Good Egg",
        categoryimage: Categoryimage16,
        time: "15 mins",
        distance: "5274.68 km",
        delivery: "",
        tags: "Breakfast, Healthy",
    },
    {
        id: 17,
        bannerimage: Banner17,
        name: "Shoes & Footwear",
        categoryimage: Categoryimage17,
        time: "30 mins",
        distance: "5274.68 km",
        tags: "Shoes & Footwear",
    },
    {
        id: 18,
        bannerimage: Banner18,
        name: "Handbags",
        categoryimage: Categoryimage18,
        time: "30 mins",
        distance: "5274.68 km",
    },
    {
        id: 19,
        bannerimage: Banner19,
        name: "Yankees Electronics Store",
        categoryimage: Categoryimage19,
        time: "30 mins",
        distance: "5274.68 km",
    },
    {
        id: 20,
        bannerimage: Banner20,
        name: "Manish Men Saloon",
        categoryimage: Categoryimage20,
        time: "30 mins",
        distance: "5299.01 km",
    },
    {
        id: 21,
        bannerimage: Banner21,
        name: "Archie's Gift Shop",
        categoryimage: Categoryimage21,
        time: "30 mins",
        distance: "11685.3 km",
    },
    {
        id: 22,
        bannerimage: Banner22,
        name: "Delta Sports",
        categoryimage: Categoryimage22,
        time: "30 mins",
        distance: "12892.7 km",
    },
    {
        id: 23,
        bannerimage: Banner23,
        name: "Roma Antiques",
        categoryimage: Categoryimage23,
        time: "30 mins",
        distance: "13224.9 km",
    },
]

const NearbyMerchants = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <section className='pb-40 px-2 lg:px-5'>
            <h2 className='mb-3 text-xl font-semibold text-[#000000DE]'>{t('Nearby Merchants')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {nearbymerchantsdata.map((merchants, index) => (
                    <div onClick={(() => navigate('/merchants-details'))} key={index} className='nearby-merchants-card rounded-lg overflow-hidden cursor-pointer'>
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

                            <div className='flex flex-col gap-1 flex-1'>
                                <h3 className='leading-[1.2] capitalize truncate font-semibold mb-[1px] text-[15.2px] text-balance line-clamp-1 '>{merchants.name}</h3>
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
    )
}

export default NearbyMerchants
