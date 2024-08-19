import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { BsChevronRight } from "react-icons/bs";

// Import assets
import HalfFameCategoryBannerOne from '../../assets/halffame-1.png';
import HalfFameCategoryBannerTwo from '../../assets/halffame-2.png';
import HalfFameCategoryBannerThree from '../../assets/halffame-3.png';
import HalfFameCategoryBannerFour from '../../assets/halffame-5.png';
import HalfFameCategoryBannerFive from '../../assets/halffame-4.png';

const HalfFameSlider = () => {
    return (
        <section className="py-10 px-2 lg:px-5">
            <h2 className='mb-[30px] text-xl font-semibold text-[#000000DE]'>Half Of Fame</h2>
            <div className="relative rounded-[18px] overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        10: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.custom-swiper-button-next2',
                        prevEl: '.custom-swiper-button-prev2',
                    }}
                    className="mySwiper"
                >
                    {[
                        HalfFameCategoryBannerOne,
                        HalfFameCategoryBannerTwo,
                        HalfFameCategoryBannerThree,
                        HalfFameCategoryBannerFour,
                        HalfFameCategoryBannerFive,
                        HalfFameCategoryBannerThree,

                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-[18px] mb-12 cursor-pointer overflow-hidden">
                                <img src={src} alt={`Banner ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-prev2 -mt-40">
                        <BsChevronRight className="rotate-180 text-[#007AFF] text-5xl" />
                    </button>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-next2 -mt-40">
                        <BsChevronRight className='text-[#007AFF] text-5xl' />
                    </button>
                </div>

                {/* Hide default navigation arrows */}
                <style jsx>{`
                    .swiper-button-prev, .swiper-button-next {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default HalfFameSlider;
