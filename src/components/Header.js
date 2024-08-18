import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components 
import LanguageSwitcher from './LanguageSwitcher';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import LoginModalHome from './LoginModalHome';

// Icons 
import ToggleIcon from '../assets/toggle-icon.svg';
import Logo from '../assets/logo.png';
import LocationIcon from '../assets/location-icon.svg';
import DownArrow from '../assets/down-arrow.svg';
import LocateIcon from '../assets/locate-blue-icon.svg';
import TranslatorIcon from '../assets/language-convter-white-icon.svg';
import FilterIcon from '../assets/filter-icon.svg';
import ProfileIcon from '../assets/profile-avator.svg';
import CartIcon from '../assets/cart-icon.svg';
import SearchIcon from '../assets/search.svg';
import { FaAngleDown } from "react-icons/fa6";
import SelectLocation from './SelectLocationModal';
import FilterModal from './FilterModal';
import CartModal from './CartModal';





const Header = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isLoginHomeModalOpen, setIsLoginHomeModalOpen] = useState(false);
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Open Location Modal 
    const handlelocationModal = () => {
        setIsLocationModalOpen(!isLocationModalOpen);
    };

    // Open Filter Modal 
    const handlefilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };

    // Open Cart Modal 
    const handleCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
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
        i18n.changeLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <header className='sticky bg-white z-30 top-0 left-0 w-full h-[60px] lg:h-[65px] py-1 px-2 md:px-4 flex items-center justify-between nav-shadow'>
            <div className='flex items-center justify-between w-full'>
                <div className='hidden lg:flex items-center gap-5'>
                    <button onClick={handleToggleMenu}>
                        <img src={ToggleIcon} alt="ToggleIcon" />
                    </button>
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className='h-11' />
                    </Link>
                </div>

                {/* Select Location */}
                <div className='block'>
                    <div className='flex items-center cursor-pointer' onClick={handlelocationModal}>
                        <img src={LocationIcon} alt="LocationIcon" className='mt-1' />
                        <p className='mx-2 pt-2 pb-1 border-b border-dashed text-sm border-black max-w-[110px] truncate'>Select Location</p>
                        <img src={DownArrow} alt="DownArrow" />
                    </div>

                    {isLocationModalOpen && (
                        <SelectLocation
                            onClose={handlelocationModal}
                            isLocationModalOpen={isLocationModalOpen}
                        />
                    )}
                </div>

                {/* Search Box  */}
                <div className='hidden lg:flex items-center input-shadowtwo h-10 px-3 gap-3 bg-white rounded max-w-[420px] w-full'>
                    <img src={SearchIcon} alt="SearchIcon" className='h-4 w-4' />
                    <input type="text" placeholder={t('searchitemsplachholder')} className='outline-none border-none w-full h-full flex-1 text-sm' />
                </div>

                <div className='flex items-center'>

                    {/* Before login  */}
                    {/* <div>
                        <button
                            className='h-[42px] px-4 text-center capitalize text-sm hidden lg:block rounded-lg font-semibold transition-colors duration-500 hover:bg-[#e5e7eb]'
                            onClick={handleToggleLoginModal}
                        >
                            {t('login')}
                        </button>

                        {isLoginModalOpen && (
                            <LoginModal
                                onClose={handleToggleLoginModal}
                                onContinue={() => {
                                    handleToggleLoginModal();
                                    handleToggleSignupModal();
                                }}
                            />
                        )}

                        {isLoginHomeModalOpen && (
                            <LoginModalHome
                                onClose={handleToggleLoginModalHome}
                            />
                        )}

                        {isSignupModalOpen && (
                            <SignupModal onClose={handleToggleSignupModal} />
                        )}

                    </div> */}


                    {/* After Login  */}
                    <div className='flex items-center lg:pl-2 lg:gap-3'>
                        {/* Filter btn with Filter Modal  */}
                        <div>
                            <button onClick={handlefilterModal} className='flex items-center px-4 h-[42px] gap-3 font-semibold text-sm rounded-lg transition-colors duration-500 hover:bg-[#e5e7eb]'>
                                <img src={FilterIcon} alt="FilterIcon" />
                                <span className='hidden md:block'>{t('filter')}</span>
                            </button>

                            {isFilterModalOpen && (
                                <FilterModal
                                    onClose={handlefilterModal}
                                    isFilterModalOpen={isFilterModalOpen}
                                />
                            )}
                        </div>

                        {/* Profile btn  */}
                        <div>
                            <button onClick={(() => navigate('/profile/orders'))} className='hidden lg:flex items-center px-4 h-[42px] uppercase gap-3 font-semibold text-sm rounded-lg transition-colors duration-500 hover:bg-[#e5e7eb]'>
                                <img src={ProfileIcon} alt="ProfileIcon" />
                                {t('profile')}
                            </button>
                        </div>

                        {/* Cart btn & Modal  */}
                        <div>
                            <button onClick={handleCartModal} className='hidden lg:flex items-center px-5 h-[42px] relative text-white bg-[#0b1223] gap-5 font-medium text-sm rounded-lg'>
                                <img src={CartIcon} alt="CartIcon" className='w-6 h-6' />
                                {t('cart')}
                                <span className='bg-[#ff1e1e] w-[22px] h-[22px] flex items-center justify-center rounded-full text-xs border-2 border-white text-white absolute -top-2 -right-2'>1</span>
                            </button>

                            {isCartModalOpen && (
                                <CartModal
                                    onClose={handleCartModal}
                                    isCartModalOpen={isCartModalOpen}
                                />
                            )}
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


            </div>

            {/* Links Navigation */}
            <div
                className={`fixed top-0 left-0 w-[330px] h-full bg-white z-[100001] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='p-2 z-50'>
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
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-50'
                    onClick={handleToggleMenu}
                />
            )}

        </header>
    );
};

export default Header;
