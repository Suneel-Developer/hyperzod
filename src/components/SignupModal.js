import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';
import { GoEyeClosed, GoEye } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import In from "../assets/flag.svg"
import Af from "../assets/AF.svg"
import Ax from "../assets/AX.svg"
import Al from "../assets/AL.svg"
import Dz from "../assets/DZ.svg"
import As from "../assets/AS.svg"
import Ad from "../assets/AD.svg"
import Ao from "../assets/AO.svg"


const SignupModal = ({ onClose }) => {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ flag: In, code: '+91', name: 'India' });
    const dropdownRef = useRef(null);


    // Show & hide Password 
    const handlePasswordToggle = () => {
        setShowPassword(prevState => !prevState);
    };


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

    return (
        <div className=' z-[100000001]'>
            <div
                className='fixed top-0 right-0 w-full overflow-y-scroll md:overflow-y-hidden max-w-[550px] h-full bg-white z-50 transition-transform duration-300 transform translate-x-0 p-4'
            >
                {/* Close Icon */}
                <div className='flex justify-end w-full pb-4'>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                {/* Form */}
                <form>
                    <h1 className='text-4xl font-semibold mb-3 capitalize'>
                        {t('signup')}
                    </h1>

                    <p className='text-[#918d8d] text-sm'>
                        {t('signuptext')}
                    </p>
                    <p className='text-black text-sm'>
                        xyz@gmail.com
                    </p>

                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>{t('name')} <span className='text-[#ef4444]'>*</span></label>
                        <input
                            type="text"
                            className='rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>{t('email')} <span className='text-[#ef4444]'>*</span></label>
                        <input
                            type="email"
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
                        <label className='mb-2 flex gap-1 items-start text-sm ml-2 font-medium'>
                           {t('enterpassword')} <span className='text-[#ef4444]'>*</span>
                        </label>
                        <div className='flex items-center justify-between gap-2 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='placeholder:font-light w-full outline-none h-full flex-1 bg-transparent border-none'
                            />

                            {/* Show/Hide Password Icon */}
                            <button
                                type="button"
                                onClick={handlePasswordToggle}
                                className='flex items-center justify-center w-10 h-full'
                            >
                                {showPassword ? <GoEye className='w-6 h-6 text-black opacity-55' /> : <GoEyeClosed className='w-6 h-6 text-black opacity-55' />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='h-[52px] px-5 text-center bg-[#0b1223] text-white text-base capitalize rounded-lg mt-6 mb-4 w-full font-medium transition-colors duration-300'
                    >
                        {t('signup')}
                    </button>

                    <div className='mb-3 text-xs text-[#918d8d] flex items-center gap-1 justify-center text-center font-bold'>
                        {t('text1')}
                        <Link to="" className='text-[#1976d2]'>{t('privacy-policy')}</Link>
                    </div>

                    <div className='text-sm text-[#4b5563] flex items-center gap-1 justify-center text-center font-bold'>
                        {t('alreadyaccount')}
                        <Link to="" className='text-[#1976d2]'>{t('login')}</Link>
                    </div>
                </form>
            </div>

            {/* Overlay */}
            <div
                className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                onClick={onClose}
            />
        </div>
    );
};

export default SignupModal;
