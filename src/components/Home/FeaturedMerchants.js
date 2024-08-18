import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


// Import assets
import JohnsDining from '../../assets/featured-merchants/Johns-Dining.png';
import QuickCartGrocery from '../../assets/featured-merchants/QuickCart-Grocery.png';
import LuminaDecor from '../../assets/featured-merchants/Lumina-Decor.png';
import WomenHairStudio from '../../assets/featured-merchants/Women-Hair-Studio.png';
import CarParts from '../../assets/featured-merchants/Henry-Car-Parts.png';
import ShoesFootwear from '../../assets/featured-merchants/Shoes-Footwear.png';
import Handbags from '../../assets/featured-merchants/Handbags.png';
import ElectronicsStore from '../../assets/featured-merchants/Yankees-Electronics-Store.png';
import MenSaloon from '../../assets/featured-merchants/Manish-Men-Saloon.png';
import RomaAntiques from '../../assets/featured-merchants/Roma-Antiques.png';

const FearuredMerchants = () => {
    const { t } = useTranslation();


    const categoriesdata = [
        { id: "1", name: "John's Dining", image: JohnsDining },
        { id: "2", name: "QuickCart Grocery", image: QuickCartGrocery },
        { id: "3", name: "Lumina Decor", image: LuminaDecor },
        { id: "4", name: "Women Hair Studio", image: WomenHairStudio },
        { id: "5", name: "Henry Car Parts", image: CarParts },
        { id: "6", name: "Shoes & Footwear", image: ShoesFootwear },
        { id: "7", name: "Handbags", image: Handbags },
        { id: "8", name: "Yankees Electronics Store", image: ElectronicsStore },
        { id: "9", name: "Manish Men Saloon", image: MenSaloon },
        { id: "10", name: "Roma Antiques", image: RomaAntiques },
    ]

    return (
        <section className="pt-6 px-2 lg:px-5">
            <h2 className='mb-3 text-xl font-semibold text-[#000000DE]'>{t('Fearured Merchants')}</h2>

            <div className="relative rounded-xl overflow-hidden">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        10: {
                            slidesPerView: 2,
                        },
                        450: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1350: {
                            slidesPerView: 7,
                        }
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-swiper-button-next3',
                        prevEl: '.custom-swiper-button-prev3',
                    }}
                    className="mySwiper"
                >
                    {categoriesdata.map((categories, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-3 cursor-pointer">
                                <img src={categories.image} alt={categories.name} className='h-[150px] md:h-[198px] rounded-xl' />
                                <h3 className='text-sm md:text-base truncate font-semibold leading-6 capitalize'>{categories.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-prev3 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
                        <FaChevronRight className="rotate-180" />
                    </button>
                </div>

                <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 hidden md:block">
                    <button className="custom-swiper-button-next3 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md transition-all duration-500 hover:bg-gray-300">
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

export default FearuredMerchants;
