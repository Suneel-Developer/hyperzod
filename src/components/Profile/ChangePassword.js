import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { GoEyeClosed, GoEye } from "react-icons/go";

const ChangePassword = ({ isChangePasswordModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (isChangePasswordModalOpen) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsAnimating(false);
            document.body.style.overflow = '';
        }
    }, [isChangePasswordModalOpen]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const isButtonEnabled = password && confirmPassword;

    return (
        <div>
            <div
                className={`fixed bottom-0 lg:top-0 right-0 left-auto w-full lg:w-[550px] h-fit lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimatedRight' : 'whennotmodalcloseRight'}`}
            >
                {/* Close Icon */}
                <div className='absolute top-6 right-4'>
                    <button onClick={onClose}>
                        <IoCloseSharp className='text-2xl' />
                    </button>
                </div>

                {/* Form */}
                <div className='px-4 mt-20'>
                    <h2 className='text-3xl lg:text-4xl my-3 font-semibold'>{t('Change password')}</h2>
                    <p className='text-[#918D8D] text-sm'>{t('Please enter your new password down below')}</p>

                    <div className='flex items-center justify-between gap-2 rounded-[10px] min-h-12 px-3 mt-10 border border-gray-600 w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={t('New password')}
                            className='placeholder:font-light font-medium w-full outline-none h-full flex-1 bg-transparent border-none'
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        {/* Show/Hide Password Icon */}
                        <button
                            type="button"
                            className='flex items-center justify-center w-10 h-full'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <GoEye className='w-6 h-6 text-black opacity-55' />
                            ) : (
                                <GoEyeClosed className='w-6 h-6 text-black opacity-55' />
                            )}
                        </button>
                    </div>

                    <div className='flex items-center justify-between gap-2 rounded-[10px] min-h-12 px-3 mt-5 border border-gray-600 w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder={t('Confirm password')}
                            className='placeholder:font-light font-medium w-full outline-none h-full flex-1 bg-transparent border-none'
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />

                        {/* Show/Hide Password Icon */}
                        <button
                            type="button"
                            className='flex items-center justify-center w-10 h-full'
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? (
                                <GoEye className='w-6 h-6 text-black opacity-55' />
                            ) : (
                                <GoEyeClosed className='w-6 h-6 text-black opacity-55' />
                            )}
                        </button>
                    </div>

                    <button
                        className={`h-[52px] px-4 text-center bg-[#0b1223] text-white text-base capitalize rounded-lg my-10 w-full font-medium transition-opacity duration-300 ${isButtonEnabled ? 'opacity-100' : 'opacity-60'}`}
                        disabled={!isButtonEnabled}
                    >
                        {t('Update')}
                    </button>
                </div>

            </div>

            {/* Overlay */}
            {isChangePasswordModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
}

export default ChangePassword;
