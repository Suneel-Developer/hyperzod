import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';

// Import assets
import SliderBannerOne from '../../assets/banner-1.svg';
import SliderBannerTwo from '../../assets/banner-2.svg';
import SliderBannerThree from '../../assets/banner-3.svg';
import SliderBannerFour from '../../assets/banner-4.svg';
import SliderBannerFive from '../../assets/banner-5.png';
import SliderBannerSix from '../../assets/banner-6.png';

const BannerSlider = () => {
    return (
        <section className="pt-3 md:pt-5 px-2 lg:px-5">
            <div className="relative rounded-xl overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        10: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    className="mySwiper"
                >
                    {[
                        SliderBannerOne,
                        SliderBannerTwo,
                        SliderBannerThree,
                        SliderBannerFour,
                        SliderBannerFive,
                        SliderBannerSix,
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-xl overflow-hidden cursor-pointer">
                                <img src={src} alt={`Banner ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-prev w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
                        <FaChevronRight className="rotate-180" />
                    </button>
                </div>
                
                <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-next w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
                        <FaChevronRight />
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

export default BannerSlider;
