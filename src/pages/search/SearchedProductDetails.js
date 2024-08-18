import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SubProductImage1 from "../../assets/snacks-category.jpeg";
import SubProductImage2 from "../../assets/sub-product2.png";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SearchedProductDetails = ({ onClose }) => {
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            return Math.max(newQuantity, 1);
        });
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded max-w-[1200px] h-screen lg:overflow-hidden overflow-y-auto lg:h-[600px] mx-auto w-full overflow-hidden animate-slide-up grid grid-cols-1 lg:grid-cols-2">

                {/* Header Only show at small screens  */}
                <div className='bg-white sticky top-0 w-full px-4 py-3 lg:hidden flex items-center justify-between gap-2 z-50'>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-lg bg-[#f3f3f4]'
                        onClick={onClose}
                    >
                        <FaAngleLeft />
                    </button>
                    <h2 className='font-semibold text-lg text-[#000000DE] truncate'>Beetroot Herring Delight</h2>
                    <div></div>
                </div>

                {/* Product Image Carousel */}
                <div className='relative h-full bg-white'>
                    <Swiper
                        spaceBetween={10}
                        loop={true}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.custom-swiper-button-next2',
                            prevEl: '.custom-swiper-button-prev2',
                        }}
                        className="mySwiper h-full"
                    >
                        {[
                            SubProductImage1,
                            SubProductImage2,
                        ].map((src, index) => (
                            <SwiperSlide key={index} className='h-full'>
                                <img src={src} alt={`Banner ${index + 1}`} className='w-full h-full object-cover' />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Next & Previous Buttons */}
                    <button className="custom-swiper-button-prev2 absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden md:block">
                        <BsChevronRight className="rotate-180 text-[#007AFF] text-4xl" />
                    </button>

                    <button className="custom-swiper-button-next2 absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden md:block">
                        <BsChevronRight className='text-[#007AFF] text-4xl' />
                    </button>
                </div>

                {/* Product Details */}
                <div className='relative'>
                    {/* Close button */}
                    <div className='absolute right-4 top-4 mr-4 hidden lg:flex justify-end'>
                        <button onClick={onClose} className=" w-10 h-10 rounded-lg bg-gray-300 flex items-center justify-center z-30">
                            <IoMdClose className="text-xl" />
                        </button>
                    </div>

                    <div className='h-auto lg:h-[600px] overflow-y-auto boxscrollbar pt-10 pb-20 px-4'>
                        <h4 className="font-medium text-sm">Snacks</h4>
                        <h2 className="font-semibold text-xl leading-7">Chocolate Chip</h2>
                        <small className="text-[#A3A3A3] text-sm leading-4 line-through mt-1">£4.00</small>
                        <p className="text-sm leading-5 mb-1 text-[#9CA3AF]">Soft, buttery, chock full of chips. What more can we say? Enjoy.</p>
                    </div>

                    {/* Quantity & Add to Cart button */}
                    <div className="py-3 px-2 border-t bg-white border-gray-800 flex gap-2 fixed lg:absolute bottom-0 left-0 w-full z-40">
                        <div className="border border-[#E6E6E6] rounded flex items-center justify-center h-11 w-[125px]">
                            <button
                                className="px-2 font-semibold text-sm min-w-10"
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="font-semibold text-sm text-center w-full">{quantity}</span>
                            <button
                                className="px-2 font-semibold text-sm min-w-10"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>

                        <button className="px-2 h-11 flex-1 rounded bg-[#0B1223] text-sm text-white font-medium flex items-center justify-between transition-all duration-500 hover:bg-opacity-90">
                            <p className='hidden md:block'></p>
                            <p>{t('Add to cart')}</p>
                            <p>£50.00</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedProductDetails