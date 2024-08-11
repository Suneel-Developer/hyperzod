import React, { useState } from 'react';
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';
import { GoEyeClosed, GoEye } from "react-icons/go";
import { Link } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal';


const LoginModalHome = ({ onClose }) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);




    // Show & hide Password 
    const handlePasswordToggle = () => {
        setShowPassword(prevState => !prevState);
    };




    // Handle Forgot Password Modal
    const handleToggleForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(!isForgotPasswordModalOpen);
    };

    return (
        <div>
            <div
                className='fixed top-0 right-0 w-full max-w-[550px] h-full bg-white z-50 transition-transform duration-300 transform translate-x-0 p-4'
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
                    <h1 className='text-4xl font-semibold mt-3 mb-1 capitalize'>
                        {t('welcome')}
                    </h1>

                    <p className='text-[#918d8d] text-sm'>
                        {t('logintext')}
                    </p>


                    <p className='text-base font-semibold mt-6 mb-1'>
                        {t('login')}
                    </p>

                    <p className='text-[#918d8d] text-sm'>
                        {t('welcomeback')}
                    </p>

                    <div className='mt-6 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] w-full flex items-center justify-between'>
                        <p className='opacity-50'>xyzzz@gmail.com</p>
                        <button className='text-sm font-medium text-[#0671e3] uppercase'>{t('change')}</button>
                    </div>


                    <div className='mt-5'>
                        <div className='flex items-center justify-between gap-2 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t('enterpassword')}
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

                    <Link to="" onClick={handleToggleForgotPasswordModal} className='text-[#0671e3] mt-2 px-1 text-sm font-semibold'>{t('forgotpassword')}</Link>

                    {isForgotPasswordModalOpen && (
                        <ForgotPasswordModal
                            onClose={handleToggleForgotPasswordModal}
                        />
                    )}

                    <button
                        type="submit"
                        className='h-[52px] px-5 text-center bg-[#0b1223] text-white text-base capitalize rounded-lg mt-12 w-full font-medium transition-colors duration-300'
                    >
                        {t('login')}
                    </button>
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

export default LoginModalHome;
