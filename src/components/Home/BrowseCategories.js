import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';


// Import assets
import Grocery from '../../assets/categories/Grocery.png';
import Flower from '../../assets/categories/Flower.jpeg';
import Breakfast from '../../assets/categories/Breakfast.png';
import Healthy from '../../assets/categories/Healthy.png';
import Piza from '../../assets/categories/Piza.png';
import Mexican from '../../assets/categories/Mexican.png';
import BubbleTea from '../../assets/categories/Bubble-Tea.png';
import Asian from '../../assets/categories/Asian.png';
import Wings from '../../assets/categories/Wings.png';
import PetFood from '../../assets/categories/Pet-Food.jpeg';
import Bakery from '../../assets/categories/Bakery.png';
import IceCream from '../../assets/categories/Ice-Cream.png';
import Burger from '../../assets/categories/Burger.png';
import Clothing from '../../assets/categories/Clothing.png';
import ShoesFootwear from '../../assets/categories/Shoes-&-Footwear.png';

const BrowseCategories = () => {
    const { t } = useTranslation();


    const categoriesdata = [
        { id: "1", name: "Grocery", image: Grocery },
        { id: "2", name: "Flower", image: Flower },
        { id: "3", name: "Breakfast", image: Breakfast },
        { id: "4", name: "Healthy", image: Healthy },
        { id: "5", name: "Piza", image: Piza },
        { id: "6", name: "Mexican", image: Mexican },
        { id: "7", name: "Bubble Tea", image:  BubbleTea },
        { id: "8", name: "Asian", image: Asian },
        { id: "9", name: "Wings", image: Wings },
        { id: "10", name: "Pet Food", image: PetFood },
        { id: "11", name: "Bakery", image: Bakery },
        { id: "12", name: "Ice Cream", image: IceCream },
        { id: "13", name: "Burger", image: Burger },
        { id: "14", name: "Clothing", image: Clothing },
        { id: "15", name: "Shoes & Footwear", image: ShoesFootwear },
    ]

    return (
        <section className="pt-6 px-2 lg:px-5">
            <h2 className='mb-3 text-xl font-semibold text-[#000000DE]'>{t('Browse Categories')}</h2>

            <div className="relative rounded-xl overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        10: {
                            slidesPerView: 3,
                        },
                        500: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 8,
                        },
                        1300: {
                            slidesPerView: 12,
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
                            <div className="flex flex-col items-center cursor-pointer gap-2">
                                <img src={categories.image} alt={categories.name} className='h-[100px]' />
                                <h3 className='text-xs font-medium leading-4 capitalize'>{categories.name}</h3>
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

export default BrowseCategories;
