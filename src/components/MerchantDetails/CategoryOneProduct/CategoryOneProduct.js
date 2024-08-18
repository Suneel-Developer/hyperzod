import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SingleProductDetails from './SingleProductDetails';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';

import FlowerPotsImage from "../../../assets/flower-pots.jpeg";
import SubProductImage from "../../../assets/sub-product.png";
import PlusIcon from "../../../assets/plus-icon.svg";
import ScanIcon from "../../../assets/scan-icon.svg";
import QrScaner from "../../../assets/qr-code.png";

const categoryOneProduct = [
    { id: "1", name: "DAIDAI Plant Pot (6 Pcs)", image: SubProductImage },
    { id: "2", name: "Shoes & Footwear", image: FlowerPotsImage },
    { id: "3", name: "Shoes & Footwear", image: SubProductImage },
    { id: "4", name: "Shoes & Footwear", image: FlowerPotsImage },
    { id: "5", name: "Shoes & Footwear", image: SubProductImage },
    { id: "6", name: "Shoes & Footwear", image: FlowerPotsImage },
    { id: "7", name: "Shoes & Footwear", image: SubProductImage },
];

const CategoryOneProduct = () => {
    const { t } = useTranslation();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [addedProduct, setAddedProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleQuantityChange = (id, amount) => {
        setAddedProduct(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                quantity: Math.max((prevState[id]?.quantity || 1) + amount, 1)
            }
        }));
    };

    const handleAddClick = (id) => {
        setAddedProduct(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                isAdded: true,
                quantity: 1,
            }
        }));
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    // Toggle the no-scroll class on the body element when the popup is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [selectedProduct]);

    return (
        <section className='py-8 px-3 md:px-7'>
            <h2 className='text-xl text-[#111111] mb-4 capitalize font-semibold'>Subs</h2>

            <div className="relative rounded-xl overflow-hidden">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        10: {
                            slidesPerView: 1,
                        },
                        568: {
                            slidesPerView: 2,
                        },
                        924: {
                            slidesPerView: 3,
                        },
                        1300: {
                            slidesPerView: 5,
                        }
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-swiper-button-next3',
                        prevEl: '.custom-swiper-button-prev3',
                    }}
                    className="mySwiper"
                >
                    {categoryOneProduct.map((flowerpot) => (
                        <SwiperSlide key={flowerpot.id}>
                            <div
                                className="flex flex-col cursor-pointer"
                                onClick={() => handleProductClick(flowerpot)}
                            >
                                <div className='w-full relative'>
                                    <img src={flowerpot.image} alt={flowerpot.name} className='rounded-lg object-cover h-full w-full' />

                                    <div className='absolute left-0 right-0 top-4 mx-auto'>
                                        <button
                                            className='px-2 py-1 bg-gray-500 rounded-[100px] flex items-center justify-center relative mx-auto w-fit h-8 hover:bg-[#E5E7EB] transition-all duration-500'
                                            onMouseEnter={() => setHoveredProduct(flowerpot.id)}
                                            onMouseLeave={() => setHoveredProduct(null)}
                                        >
                                            <img src={ScanIcon} alt="ScanIcon" className='ml-2 w-4' />
                                            <p className='font-semibold mx-2 text-sm text-[#000000DE]'>{t('View in 3D AR')}</p>
                                        </button>

                                        {hoveredProduct === flowerpot.id && (
                                            <div className='cardShadow p-5 rounded-md bg-white w-fit absolute top-9 left-0 right-0 mx-auto flex flex-col items-center juc'>
                                                <p className='text-sm mb-6 text-center'>{t('Scan to view in 3D AR')}</p>
                                                <img src={QrScaner} alt="QrScaner" className='w-[180px] h-[180px]' />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='px-[10px] py-4'>
                                    <h3 className='text-base font-semibold leading-6 truncate'>{flowerpot.name}</h3>
                                    <p className='text-[#808080] text-sm font-medium leading-5 min-h-10 max-h-10 h-full line-clamp-2'>Enhance your gardening experience with the DAIDAI Plant Pot set of 6, crafted to elevate your indoor or outdoor space with a touch of elegance and sophistication.</p>

                                    <div className='mt-4 flex items-center gap-2 justify-between'>
                                        <div>
                                            <small className='text-[#A3A3A3] text-xs leading-4 line-through'>£90.00</small>
                                            <h4 className='text-lg font-semibold leading-7'>£60.00</h4>
                                        </div>

                                        <div>
                                            {!addedProduct[flowerpot.id]?.isAdded ? (
                                                <button
                                                    className='h-9 px-4 text-xs text-white bg-[#0B1223] rounded flex items-center justify-center gap-1 transition-all duration-500 hover:bg-opacity-90'
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleAddClick(flowerpot.id);
                                                    }}
                                                >
                                                    {t('add')}
                                                    <img src={PlusIcon} alt="PlusIcon" className='w-4 h-4' />
                                                </button>
                                            ) : (
                                                <div className='border border-[#E6E6E6] rounded flex items-center h-9'>
                                                    <button
                                                        className='px-2 font-semibold text-sm'
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleQuantityChange(flowerpot.id, -1);
                                                        }}
                                                        disabled={addedProduct[flowerpot.id].quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span className='font-semibold text-sm text-center min-w-6'>{addedProduct[flowerpot.id]?.quantity}</span>
                                                    <button
                                                        className='px-2 font-semibold text-sm'
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleQuantityChange(flowerpot.id, 1);
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="custom-swiper-button-next3 absolute top-1/2 right-4 z-10 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
                    <FaChevronRight />
                </button>
                <button className="custom-swiper-button-prev3 absolute top-1/2 left-4 z-10 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
                    <FaChevronRight className="transform rotate-180" />
                </button>
            </div>

            {/* Single Product Details Modal */}
            {selectedProduct && (
                <SingleProductDetails
                    product={selectedProduct}
                    onClose={handleCloseDetails}
                />
            )}
        </section>
    );
};

export default CategoryOneProduct;
