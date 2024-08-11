import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components 
import LanguageSwitcher from './LanguageSwitcher';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

// Icons 
import ToggleIcon from '../assets/toggle-icon.svg';
import Logo from '../assets/logo.png';
import LocationIcon from '../assets/location-icon.svg';
import DownArrow from '../assets/down-arrow.svg';
import LocateIcon from '../assets/locate-blue-icon.svg';
import TranslatorIcon from '../assets/language-convter-white-icon.svg';
import { FaAngleDown } from "react-icons/fa6";
import LoginModalHome from './LoginModalHome';
import ForgotPasswordModal from './ForgotPasswordModal';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isLoginHomeModalOpen, setIsLoginHomeModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Open Drawer 
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Open toggle Navigation Menu 
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Login Modal
    const handleToggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    // Handle Signup Modal
    const handleToggleSignupModal = () => {
        setIsSignupModalOpen(!isSignupModalOpen);
    };


       // Handle Login Home Modal
       const handleToggleLoginModalHome = () => {
        setIsLoginHomeModalOpen(!isLoginHomeModalOpen);
    };





    // LanguageSwitcher dropdown for mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle language change
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language); // Change the language globally
        setIsDropdownOpen(false);
    };

    return (
        <header className='fixed bg-white z-30 top-0 left-0 w-full h-[60px] lg:h-[65px] py-1 px-4 flex items-center justify-between nav-shadow'>
            <div className='flex items-center justify-between w-full'>
                <div className='hidden lg:flex items-center gap-5'>
                    <button onClick={handleToggleMenu}>
                        <img src={ToggleIcon} alt="ToggleIcon" />
                    </button>
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className='h-11' />
                    </Link>
                </div>

                {/* Login Btn */}
                <button
                    className='h-[42px] px-4 text-center capitalize text-sm hidden lg:block rounded-lg font-semibold transition-colors duration-500 hover:bg-[#e5e7eb]'
                    onClick={handleToggleLoginModal}
                    // onClick={handleToggleLoginModalHome}
                >
                    {t('login')}
                </button>

                {/* Select Location */}
                <div className='block lg:hidden'>
                    <div className='flex items-center cursor-pointer' onClick={toggleDrawer}>
                        <img src={LocationIcon} alt="LocationIcon" className='mt-1' />
                        <p className='mx-2 pt-2 pb-1 border-b border-dashed text-sm border-black'>Select Location</p>
                        <img src={DownArrow} alt="DownArrow" />
                    </div>

                    {/* Select Location Drawer */}
                    <div
                        className={`fixed top-0 left-0 w-full bg-white z-50 p-4 transition-transform h-screen duration-300 ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    >
                        {/* Back btn */}
                        <button
                            className='bg-[#e5e5e5] w-9 h-9 flex items-center justify-center rounded-lg'
                            onClick={toggleDrawer}
                        >
                            <img src={DownArrow} alt="DownArrow" className='rotate-90' />
                        </button>

                        {/* Search Input */}
                        <div
                            className={`rounded-[10px] mt-4 min-h-14 px-3 flex items-center gap-2 border w-full outline-none transition-all duration-200 ${isFocused ? 'border-[#1976d2] outline-2' : 'border-[#E5E7EB]'}`}
                        >
                            <input
                                type="text"
                                placeholder={t('homeherinputplaceholder')}
                                className='w-full h-full border-none outline-none flex-1 placeholder:font-light'
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            <button>
                                <img src={LocateIcon} alt="LocateIcon" className='h-6 w-6' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Select Language only for Mobile screens */}
                <div className='block lg:hidden relative' ref={dropdownRef}>
                    <button
                        className='h-9 px-3 bg-black flex items-center gap-2 capitalize font-medium rounded text-sm text-white'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img src={TranslatorIcon} alt="TranslatorIcon" className='h-[14px] w-4' />
                        <p>{i18n.language === 'en' ? 'English' : 'French'}</p>
                        <FaAngleDown />
                    </button>

                    {isDropdownOpen && (
                        <ul className='absolute left-0 py-2 bg-white top-9 w-full rounded shadow-lg'>
                            <li>
                                <button
                                    className={`min-h-12 px-4 text-start font-normal mb-1 text-base transition-colors duration-300 w-full cursor-pointer ${i18n.language === 'en' ? 'bg-gray-200' : 'hover:bg-[#e0e0e0]'}`}
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    English
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`min-h-12 px-4 text-start font-normal text-base transition-colors duration-300 w-full cursor-pointer ${i18n.language === 'fr' ? 'bg-gray-200' : 'hover:bg-[#e0e0e0]'}`}
                                    onClick={() => handleLanguageChange('fr')}
                                >
                                    French
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Links Navigation */}
            <div
                className={`fixed top-0 left-0 w-[330px] h-full bg-white z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='p-2'>
                    <LanguageSwitcher />
                    <button className='min-h-10 px-2 rounded text-start font-medium text-[13px] text-[#000000De] transition-colors duration-300 hover:bg-[#f7f6f6cc] w-full cursor-pointer mb-1'>
                        About Us
                    </button>
                    <button className='min-h-10 px-2 rounded text-start font-medium text-[13px] text-[#000000De] transition-colors duration-300 hover:bg-[#f7f6f6cc] w-full cursor-pointer mb-1'>
                        Contact Us
                    </button>
                    <button className='min-h-10 px-2 rounded text-start font-medium text-[13px] text-[#000000De] transition-colors duration-300 hover:bg-[#f7f6f6cc] w-full cursor-pointer mb-1'>
                        Merchant Sign Up
                    </button>
                    <button className='min-h-10 px-2 rounded text-start font-medium text-[13px] text-[#000000De] transition-colors duration-300 hover:bg-[#f7f6f6cc] w-full cursor-pointer mb-1'>
                        Driver Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={handleToggleMenu}
                />
            )}

            {/* Login Modal */}
            {isLoginModalOpen && (
                <LoginModal
                    onClose={handleToggleLoginModal}
                    onContinue={() => {
                        handleToggleLoginModal();
                        handleToggleSignupModal();
                    }}
                />
            )}


            {/* Login Modal After Once Login At Home  */}
            {/* {isLoginHomeModalOpen && (
                <LoginModalHome
                    onClose={handleToggleLoginModalHome}
                />
            )} */}

            {/* Signup Modal */}
            {isSignupModalOpen && (
                <SignupModal onClose={handleToggleSignupModal} />
            )}
        </header>
    );
};

export default Header;
