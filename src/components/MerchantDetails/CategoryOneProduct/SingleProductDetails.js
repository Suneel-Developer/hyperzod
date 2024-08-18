import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SubProductImage1 from "../../../assets/sub-product.png";
import SubProductImage2 from "../../../assets/sub-product2.png";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import ScanIcon from "../../../assets/scan-icon.svg";
import QrScaner from "../../../assets/qr-code.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronRight } from "react-icons/bs";


const SingleProductDetails = ({ onClose }) => {
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(1);
    const [hoveredProduct, setHoveredProduct] = useState(false);

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

                    {/* 3D AR Button */}
                    <div className='absolute left-0 right-0 top-4 mx-auto z-40'>
                        <button
                            className='px-2 py-1 bg-gray-500 rounded-[100px] flex items-center justify-center relative mx-auto w-fit h-8 hover:bg-[#E5E7EB] transition-all duration-500'
                            onMouseEnter={() => setHoveredProduct(true)}
                            onMouseLeave={() => setHoveredProduct(false)}
                        >
                            <img src={ScanIcon} alt="ScanIcon" className='ml-2 w-4' />
                            <p className='font-semibold mx-2 text-sm text-[#000000DE]'>{t('View in 3D AR')}</p>
                        </button>

                        {hoveredProduct && (
                            <div className='cardShadow p-5 rounded-md bg-white w-fit absolute top-9 left-0 right-0 mx-auto flex flex-col justify-center items-center'>
                                <p className='text-sm mb-6 text-center'>{t('Scan to view in 3D AR')}</p>
                                <img src={QrScaner} alt="QrScaner" className='w-[180px] h-[180px]' />
                            </div>
                        )}
                    </div>
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
                        <h4 className="font-medium text-sm">Sub</h4>
                        <h2 className="font-semibold text-xl leading-7">Beetroot Herring Delight</h2>
                        <small className="text-[#A3A3A3] text-sm leading-4 line-through mt-1">£90.00</small>
                        <h4 className="text-lg font-semibold leading-7 mb-2">£60.00</h4>
                        <p className="text-sm leading-5 mb-1 text-[#9CA3AF]">Experience a delectable fusion of flavors with our Beetroot Herring Delight - a vibrant and enticing treat that will tantalize your taste buds like never before.</p>
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
    );
};

export default SingleProductDetails;
