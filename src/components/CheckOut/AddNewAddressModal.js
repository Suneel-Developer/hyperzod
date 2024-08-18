import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from "../../assets/close.svg";
import LocateIocn from "../../assets/locate-icon.svg";
import { TiLocation } from "react-icons/ti";
import { FaHouse, FaLocationDot, FaAngleLeft } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";

const AddNewAddressModal = ({ isAddNewAddressModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showChangeLocation, setShowChangeLocation] = useState(false);

    useEffect(() => {
        if (isAddNewAddressModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isAddNewAddressModalOpen, isAnimating]);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    const handleChangeLocationClick = () => {
        setShowChangeLocation(true);
    };

    const handleBackClick = () => {
        setShowChangeLocation(false);
    };

    return (
        <div>
            <div
                className={`fixed bottom-0 lg:top-0 left-0 w-full lg:w-[550px] h-fit lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimated' : 'whennotmodalclose'}`}
            >
                {/* Header */}
                <div className='flex justify-between items-center bg-white p-4 sticky top-0 w-full'>
                    <h2 className='font-medium text-xl text-[#000000de]'>{t('Add New Address')}</h2>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                {/* Main Content */}
                <div>
                    <div className='overflow-y-auto h-screen pb-20 lg:pb-40 boxscrollbar'>
                        {/* Map iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.312291638803!2d-122.41941558468184!3d37.77492927975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cb4b1c1f1%3A0x7a50e477e6f8451b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1604589400155!5m2!1sen!2sus&controls=0"
                            title="Map"
                            className="w-full h-[300px] lg:h-[375px] border-t border-black border-opacity-50 border-0 outline-none"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div className='flex gap-2 px-4 pt-5 border-b border-gray-600'>
                            <TiLocation className='text-2xl' />
                            <div className='flex-1'>
                                <div className='flex items-center justify-between mb-1'>
                                    <h3 className='text-[15px] font-semibold'>Karachi</h3>
                                    <button
                                        className='px-4 text-[#1E88E5] text-sm hover:bg-opacity-50 font-semibold uppercase h-9 flex items-center justify-center transition-all duration-500 hover:bg-[#DAEAFB] rounded'
                                        onClick={handleChangeLocationClick}
                                    >
                                        {t('change')}
                                    </button>
                                </div>
                                <p className='font-medium text-[13px] text-[#6B7280] mb-3'>Karachi, Pakistan</p>
                            </div>
                        </div>

                        <form className='py-5 px-4'>
                            <input type="text" placeholder={t('House / Flat no.')} className='py-2 focus:border-blue-700 border-b border-gray-600 outline-none text-sm text-black placeholder:text-opacity-60 w-full mt-5' />
                            <input type="text" placeholder={t('Landmark')} className='py-2 focus:border-blue-700 border-b border-gray-600 outline-none text-sm text-black placeholder:text-opacity-60 w-full mt-9' />
                            <input type="text" placeholder={t('City')} className='py-2 focus:border-blue-700 border-b border-gray-600 outline-none text-sm text-black placeholder:text-opacity-60 w-full mt-9' />
                            <input type="text" placeholder={t('Area')} className='py-2 focus:border-blue-700 border-b border-gray-600 outline-none text-sm text-black placeholder:text-opacity-60 w-full mt-9' />

                            <ul className='flex items-center justify-between gap-2 mt-5'>
                                <li
                                    className={`flex items-center px-4 justify-center gap-[6px] font-semibold text-[13px] rounded-2xl h-9 border cursor-pointer transition-all duration-500 ${selectedOption === 'home'
                                        ? 'text-[#0976D2] bg-[#DAEAFB]'
                                        : 'text-black bg-white border-gray-400'
                                        }`}
                                    onClick={() => handleClick('home')}
                                >
                                    <FaHouse />
                                    {t('Home')}
                                </li>
                                <li
                                    className={`flex items-center px-4 justify-center gap-[6px] font-semibold text-[13px] rounded-2xl h-9 border cursor-pointer transition-all duration-500 ${selectedOption === 'office'
                                        ? 'text-[#0976D2] bg-[#DAEAFB]'
                                        : 'text-black bg-white border-gray-400'
                                        }`}
                                    onClick={() => handleClick('office')}
                                >
                                    <PiBagSimpleFill className='text-lg' />
                                    {t('Office')}
                                </li>
                                <li
                                    className={`flex items-center px-4 justify-center gap-[6px] font-semibold text-[13px] rounded-2xl h-9 border cursor-pointer transition-all duration-500 ${selectedOption === 'others'
                                        ? 'text-[#0976D2] bg-[#DAEAFB]'
                                        : 'text-black bg-white border-gray-400'
                                        }`}
                                    onClick={() => handleClick('others')}
                                >
                                    <FaLocationDot />
                                    {t('Others')}
                                </li>
                            </ul>
                        </form>
                    </div>

                    {/* Proceed Button */}
                    <div className='bg-white p-2 fixed bottom-0 w-full left-0'>
                        <button className='px-5 bg-[#0B1223] h-[52px] text-white text-base font-semibold btnshadowOne rounded-lg w-full text-center transition-all duration-300 hover:bg-opacity-90'>{t('Proceed')}</button>
                    </div>
                </div>

                {/* Change Location */}
                {showChangeLocation && (
                    <div className='fixed bottom-0 w-full bg-white h-full top-[69px] p-4'>
                        <button
                            className='w-9 h-9 bg-[#E5E5E5] rounded-lg flex items-center justify-center'
                            onClick={handleBackClick}
                        >
                            <FaAngleLeft />
                        </button>

                        <div className='input-shadow rounded-[10px] min-h-14 px-3 flex items-center gap-2 border w-full outline-none mt-4 transition-all duration-200'>
                            <input
                                type="text"
                                placeholder={t('homeherinputplaceholder')}
                                className='w-full h-full border-none outline-none flex-1 placeholder:font-light'
                            />
                            <button className='h-9 flex items-center justify-center gap-2 px-4 text-sm rounded font-medium uppercase text-[#000000DE] transition-colors duration-300 hover:bg-[#e7e6e6bf]'>
                                <img src={LocateIocn} alt="LocateIcon" className='h-[18px] w-[18px]' />
                                <p className='hidden md:block'>{t('homeherinputlocatebtn')}</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay */}
            {isAddNewAddressModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default AddNewAddressModal;
