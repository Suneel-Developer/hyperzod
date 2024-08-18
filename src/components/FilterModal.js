import React, { useState, useEffect } from 'react';
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';
import { AiOutlineSearch } from "react-icons/ai";
import TikmarkIcon from "../assets/tikmark.svg"

const FilterModal = ({ isFilterModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set());

    useEffect(() => {
        if (isFilterModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isFilterModalOpen, isAnimating]);

    const handleItemClick = (item) => {
        setSelectedItems((prev) => {
            const newSelectedItems = new Set(prev);
            if (newSelectedItems.has(item)) {
                newSelectedItems.delete(item);
            } else {
                newSelectedItems.add(item);
            }
            return newSelectedItems;
        });
    };

    return (
        <div>
            <div
                className={`fixed bottom-0 lg:top-0 left-0 w-full lg:w-[550px] h-fit lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimated' : 'whennotmodalclose'}`}
            >
                {/* Close Icon */}
                <div className='flex justify-between items-center w-full p-4 border-b border-black border-opacity-10'>
                    <h2 className='font-semibold text-xl text-[#000000de]'>{t('sortfilters')}</h2>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                <div className='p-4 border-b border-black border-opacity-10'>
                    <div>
                        <h2 className='text-sm font-semibold'>{t('sortby')}</h2>
                        <ul className='flex flex-wrap gap-[10px] mt-3 mb-5 text-[#000000DE]'>
                            <li
                                className={`px-3 w-fit h-8 flex items-center text-sm font-medium rounded cursor-pointer transition-colors duration-300 ${selectedItems.has('minOrderAmount') ? 'bg-black text-white' : 'bg-[#f3f3f4] hover:bg-[#e0e0e0]'}`}
                                onClick={() => handleItemClick('minOrderAmount')}
                            >
                                Minimum Order Amount
                            </li>
                            <li
                                className={`px-3 w-fit h-8 flex items-center text-sm font-medium rounded cursor-pointer transition-colors duration-300 ${selectedItems.has('avgRating') ? 'bg-black text-white' : 'bg-[#f3f3f4] hover:bg-[#e0e0e0]'}`}
                                onClick={() => handleItemClick('avgRating')}
                            >
                                Average Rating
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-sm font-semibold'>{t('cuisine')}</h2>
                        <div className='bg-[#f3f3f4] flex items-center gap-2 px-3 h-10 rounded w-full mt-3'>
                            <AiOutlineSearch className='text-black opacity-60 text-2xl' />
                            <input type="text" placeholder={t('search')} className='h-full flex-1 outline-none border-none w-full bg-transparent' />
                        </div>
                        <ul className='flex flex-wrap gap-[10px] mt-5 mb-2 text-[#000000DE]'>
                            {['Grocery', 'Flower', 'Breakfast', 'Healthy', 'Pizza', 'Mexican', 'Bubble Tea', 'Asian', 'Wings', 'Pet food', 'Bakery', 'Ice Cream', 'Burger', 'Clothing', 'Shoes & Footwear'].map(item => (
                                <li
                                    key={item}
                                    className={`px-3 w-fit h-8 flex items-center text-sm font-medium rounded cursor-pointer transition-colors duration-400 ${selectedItems.has(item) ? 'bg-[#0b1223] text-white' : 'bg-[#f3f3f4] hover:bg-[#e0e0e0]'}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    {selectedItems.has(item) && <img src={TikmarkIcon} alt="TikmarkIcon" className='mr-2 w-6 h-6' />}
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='px-4 pt-5 pb-7 flex items-center gap-4'>
                    <button className='h-9 px-4 capitalize font-semibold rounded flex items-center justify-center text-sm transition-all duration-300 hover:bg-[#f3f3f4]'>
                        {t('clearall')}
                    </button>
                    <button className='h-9 px-4 capitalize text-white font-semibold bg-[#0b1223] btnshadowOne rounded flex items-center justify-center text-sm transition-all duration-300 hover:opacity-80'>
                        {t('Apply Button')}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isFilterModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default FilterModal;
