import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import assets
import HotHappeningOne from '../../assets/hot-happening-1.png';
import HotHappeningTwo from '../../assets/hot-happening-2.png';
import HotHappeningThree from '../../assets/hot-happening-3.png';
import HotHappeningFour from '../../assets/hot-happening-4.png';

const HotHappeningSlider = () => {
    return (
        <section className="py-5 px-2 lg:px-5">
            <h2 className='mb-3 text-xl font-semibold text-[#000000DE]'>Hot and Happening</h2>

            <div className="relative rounded-xl overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    pagination={false}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        10: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {[
                        HotHappeningOne,
                        HotHappeningTwo,
                        HotHappeningThree,
                        HotHappeningFour,
                        HotHappeningTwo,
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-xl cursor-pointer overflow-hidden">
                                <img src={src} alt={`Banner ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HotHappeningSlider;
