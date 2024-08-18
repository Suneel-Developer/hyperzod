import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import In from "../../assets/flag.svg"
import Af from "../../assets/AF.svg"
import Ax from "../../assets/AX.svg"
import Al from "../../assets/AL.svg"
import Dz from "../../assets/DZ.svg"
import As from "../../assets/AS.svg"
import Ad from "../../assets/AD.svg"
import Ao from "../../assets/AO.svg"


const EditProfile = ({ isEditProfileModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ flag: In, code: '+91', name: 'India' });
    const dropdownRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);



    // Open Country Codes Dropdown & select country 
    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleDropdownToggle = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false);
    };


    useEffect(() => {
        if (isEditProfileModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isEditProfileModalOpen, isAnimating]);

    return (
        <div>
            <div
                className={`fixed bottom-0 lg:top-0 left-0 w-full max-w-full lg:max-w-[550px] h-[80vh] lg:h-full bg-white z-50 p-6 transition-transform duration-300 ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`}
            >


                {/* Form */}
                <form>
                    <h1 className='text-2xl font-normal mb-3 capitalize'>
                        {t('Edit Profile')}
                    </h1>

                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>{t('First name')} <span className='text-[#ef4444]'>*</span></label>
                        <input
                            type="text"
                            className='rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>{t('Last name')} <span className='text-[#ef4444]'>*</span></label>
                        <input
                            type="text"
                            className='rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        />
                    </div>

                    {/* Phone Number  */}
                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>
                            {t('phone')} <span className='text-[#ef4444]'>*</span>
                        </label>
                        <div className='flex items-center relative justify-between gap-2 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'>
                            <div
                                className='flex items-center gap-1 cursor-pointer'
                                onClick={handleDropdownToggle}
                            >
                                <img src={selectedCountry.flag} alt="flag" className='w-[23px] h-[23px]' />
                                <IoMdArrowDropdown />
                            </div>

                            <input
                                type="text"
                                className='placeholder:font-light w-full outline-none h-full flex-1 bg-transparent border-none'
                            />

                            {/* Countries Dropdown  */}
                            {dropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    className='bg-white border border-[#ccc] p-[9px] w-[390px] rounded-[.3rem] absolute top-[55px] left-0 z-50'
                                >
                                    <input
                                        type="text"
                                        placeholder='Search'
                                        className='placeholder:font-light w-full outline-none h-[2.5rem] flex-1 bg-transparent border-2 border-black border-opacity-30 rounded-[.4rem] px-[.4rem]'
                                    />

                                    <ul className='min-h-[8.5rem] h-[8.5rem] overflow-y-scroll boxscrollbar my-2'>
                                        {[{
                                            flag: Af,
                                            code: '+93',
                                            name: 'Afghanistan'
                                        }, {
                                            flag: Ax,
                                            code: '+358',
                                            name: 'Aland Islands'
                                        }, {
                                            flag: Al,
                                            code: '+355',
                                            name: 'Albania'
                                        }, {
                                            flag: Dz,
                                            code: '+213',
                                            name: 'Algeria'
                                        }, {
                                            flag: As,
                                            code: '+1684',
                                            name: 'American Samoa'
                                        }, {
                                            flag: Ad,
                                            code: '+376',
                                            name: 'Andorra'
                                        }, {
                                            flag: Ao,
                                            code: '+244',
                                            name: 'Angola'
                                        }, {
                                            flag: In,
                                            code: '+91',
                                            name: 'India'
                                        }].map(country => (
                                            <li
                                                key={country.code}
                                                className='py-1 px-[.4rem] flex items-center cursor-pointer text-base'
                                                onClick={() => handleCountrySelect(country)}
                                            >
                                                <img src={country.flag} alt="flag" className='w-[23px] h-[23px] mr-2' />
                                                <p className='mr-1 font-semibold'>{country.name}</p>
                                                <p>{country.code}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>{t('email')} <span className='text-[#ef4444]'>*</span></label>
                        <input
                            type="email"
                            className='rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        />
                    </div>

                    <div className='flex items-center justify-between gap-2 my-10'>
                        <button className='text-[#E53935] font-medium text-sm uppercase h-9 flex items-center justify-center  hover:bg-[#E53935] px-4 hover:bg-opacity-10 rounded-md transition-all duration-500'>{t('Delete Account')}</button>

                        <div className='flex gap-2'>
                            <button onClick={onClose} className='text-[#1E88E5] font-medium h-9 px-4 flex items-center justify-center text-sm uppercase hover:bg-[#1E88E5] hover:bg-opacity-10 rounded-md transition-all duration-500'>{t('Close')}</button>
                            <button className='text-[#1E88E5] font-medium h-9 px-4 flex items-center justify-center text-sm uppercase hover:bg-[#1E88E5] hover:bg-opacity-10 rounded-md transition-all duration-500'>{t('Save')}</button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Overlay */}
            {isEditProfileModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default EditProfile;
