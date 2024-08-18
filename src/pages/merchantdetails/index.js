import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


import BannerImage from "../../assets/nearby-merchants/banner-1.png";
import MerchantCategory from "../../assets/nearby-merchants/1.png";
import StarIcon from "../../assets/rating-star.png";
import { AiOutlineSearch } from "react-icons/ai";


// Components 
import Header from '../../components/Header';
import CategoryOneProduct from '../../components/MerchantDetails/CategoryOneProduct/CategoryOneProduct';
import CategoryTwoProduct from '../../components/MerchantDetails/CategoryTwoProduct/CategoryTwoProduct';
import CategoryThreeProduct from '../../components/MerchantDetails/CategoryThreeProduct/CategoryThreeProduct';
import CategoryFourProduct from '../../components/MerchantDetails/CategoryFourProduct/CategoryFourProduct';
import Footer from '../../components/Footer';
import CartBar from '../../components/MerchantDetails/CartBar';

const MerchantsDetails = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('sub');

    const subRef = useRef(null);
    const wrapsRef = useRef(null);
    const fastfoodRef = useRef(null);
    const snacksRef = useRef(null);

    const handleScroll = () => {
        const subPosition = subRef.current.offsetTop;
        const wrapsPosition = wrapsRef.current.offsetTop;
        const fastfoodPosition = fastfoodRef.current.offsetTop;
        const snacksPosition = snacksRef.current.offsetTop;
        const scrollPosition = window.scrollY + 150;

        if (scrollPosition >= snacksPosition) {
            setActiveTab('snacks');
        } else if (scrollPosition >= fastfoodPosition) {
            setActiveTab('fastfood');
        } else if (scrollPosition >= wrapsPosition) {
            setActiveTab('wraps');
        } else if (scrollPosition >= subPosition) {
            setActiveTab('sub');
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'sub') {
            subRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'wraps') {
            wrapsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'fastfood') {
            fastfoodRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'snacks') {
            snacksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <>
            <Header />

            {/* Hero section */}
            <section>
                <div className='h-[140px] md:h-[230px] bg-cover bg-bottom md:bg-center' style={{ backgroundImage: `url(${BannerImage})` }}></div>
                <div className='pt-3 px-3 md:px-7'>
                    <div className='flex items-center -mt-6'>
                        <div className='boxshadowTwo rounded-[20px] bg-gray-500 border-4 border-gray-500 overflow-hidden  min-w-[92px] md:w-[120px] h-[92px] md:h-[120px]'>
                            <img src={MerchantCategory} alt="MerchantCategory" className='w-full h-full' />
                        </div>

                        <div className='ml-4 flex-1 w-full flex flex-col mt-4 md:mt-0'>
                            <h1 className='font-semibold capitalize text-base md:text-2xl leading-4 md:leading-8 text-[#1F2937] truncate line-clamp-1 text-balance'>Blossom Flower Store</h1>
                            <p className='font-medium capitalize text-xs md:text-sm text-[#909090] my-1  truncate line-clamp-1 text-balance'>32 Saville Row</p>
                            <p className='font-medium capitalize text-xs md:text-sm  truncate line-clamp-1 text-balance'>Healthy, Mexican, Burger</p>
                        </div>
                    </div>

                    <div className='mt-6 relative'>
                        <div className='font-semibold text-xs md:text-sm flex gap-3 items-center'>
                            <p className='flex items-center gap-1'><img src={StarIcon} alt="StarIcon" className='w-3 h-3' /> 3.9</p>
                            <div className='w-1 h-1 rounded-full bg-black'></div>
                            <div>30 min</div>
                            <div className='w-1 h-1 rounded-full bg-black'></div>
                            <p>6309.37 km</p>
                        </div>
                        <div className='bg-[#f2f2f2] mt-2 font-bold text-xs md:text-sm py-2 px-6 leading-5 w-fit rounded-[100px]'>Every Bite is a Delight!🍴✨</div>
                    </div>
                </div>

            </section>

            {/* Search bar */}
            <div className='my-10 md:my-6 px-3 md:px-7'>
                <div onClick={(() => navigate('/search'))} className='rounded-lg flex items-center gap-2 px-3 bg-[#eee] h-12 cursor-pointer'>
                    <AiOutlineSearch className='text-2xl opacity-60' />
                    <p className='text-base opacity-60 capitalize'>{t('search')}</p>
                </div>
            </div>

            {/* Products & Tabs */}
            <div className='pb-40'>
                <div className='border-b-2 pb-0 border-gray-700 px-3 md:px-7 flex overflow-x-auto boxscrollbar2 sticky top-[58px] lg:top-16 pt-4 bg-white z-20'>
                    <button
                        onClick={() => handleTabClick('sub')}
                        className={`py-2 px-[15px] capitalize text-base text-center ${activeTab === 'sub' ? 'border-b-[3px] border-black font-medium' : ''}`}
                    >
                        Sub
                    </button>
                    <button
                        onClick={() => handleTabClick('wraps')}
                        className={`py-2 px-[15px] capitalize text-base text-center ${activeTab === 'wraps' ? 'border-b-[3px] border-black font-medium' : ''}`}
                    >
                        Wraps
                    </button>
                    <button
                        onClick={() => handleTabClick('fastfood')}
                        className={`py-2 px-[15px] capitalize text-base text-center ${activeTab === 'fastfood' ? 'border-b-[3px] border-black font-medium' : ''}`}
                    >
                        FastFood
                    </button>
                    <button
                        onClick={() => handleTabClick('snacks')}
                        className={`py-2 px-[15px] capitalize text-base text-center ${activeTab === 'snacks' ? 'border-b-[3px] border-black font-medium' : ''}`}
                    >
                        Snacks
                    </button>
                </div>

                {/* Sub tab */}
                <div ref={subRef}>
                    <CategoryOneProduct />
                </div>
                {/* Wrap tab */}
                <div ref={wrapsRef}>
                    <CategoryTwoProduct />
                </div>
                {/* FastFood tab */}
                <div ref={fastfoodRef}>
                    <CategoryThreeProduct />
                </div>
                {/* Snacks tab */}
                <div ref={snacksRef}>
                    <CategoryFourProduct />
                </div>
            </div>


            {/* Cart Items Checkout btn  */}
            <CartBar />

            <Footer />
        </>
    );
}

export default MerchantsDetails;
