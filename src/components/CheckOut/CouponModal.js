import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const CouponModal = ({ isCouponModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [inputValue, setInputValue] = useState('');



    useEffect(() => {
        if (isCouponModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isCouponModalOpen, isAnimating]);



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className={`fixed bottom-0 lg:top-0 right-0 px-4 py-8 left-auto w-full lg:w-[550px] h-[85vh] lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimatedRight' : 'whennotmodalcloseRight'}`}>
                <div className='flex items-center border border-gray-400 rounded px-4 h-11'>
                    <input
                        type="text"
                        placeholder={t('Enter coupon here')}
                        className='flex-1 py-1 border-none outline-none text-xs'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`text-sm uppercase font-medium ${inputValue ? 'text-[#1E88E5]' : 'text-[#9DA0A7]'}`}
                    >
                        {t('Apply')}
                    </button>
                </div>

                <hr className='h-[2px] bg-gray-400 w-full mt-10' />
                <h3 className='text-lg font-semibold text-center bg-white px-3 -mt-4 w-fit mx-auto'>{t('Available Coupons')}</h3>


                <div className='border border-gray-400 mt-8 p-4 rounded flex items-center justify-between'>
                    <p className='text-base uppercase text-[#000000DE]'>Fixed</p>
                    <button
                        className='px-4 text-[#1E88E5] text-sm hover:bg-opacity-50 font-semibold uppercase h-9 flex items-center justify-center transition-all duration-500 hover:bg-[#DAEAFB] rounded'
                    >
                        {t('Apply')}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isCouponModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default CouponModal;
