import React, { useState } from 'react';
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';

const LoginModal = ({ onClose, onContinue }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleContinue = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (email) {
            onContinue(); // Trigger the function to open the signup modal
        }
    };

    return (
        <div>
            <div
                className='fixed top-0 right-0 w-[550px] h-full bg-white z-50 transition-transform duration-300 transform translate-x-0 p-4'
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
                <form onSubmit={handleContinue}>
                    <h1 className='text-4xl font-semibold mt-3 mb-1 capitalize'>
                        {t('welcome')}
                    </h1>

                    <p className='text-[#918d8d] text-sm'>
                        {t('logintext')}
                    </p>

                    <p className='text-base font-semibold mt-6'>
                        {t('loginsignup')}
                    </p>

                    <input
                        type="text"
                        placeholder={t('logininputplacholder')}
                        className='mt-6 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className='h-[52px] px-5 text-center text-base capitalize rounded-lg mt-12 w-full font-medium transition-colors duration-300'
                        style={{
                            backgroundColor: email ? '#0b1223' : 'rgba(0,0,0,.12)',
                            color: email ? '#ffffff' : 'rgba(0,0,0,.26)',
                        }}
                    >
                        {t('logincontinuebtn')}
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

export default LoginModal;
