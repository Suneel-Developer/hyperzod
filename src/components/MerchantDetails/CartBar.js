import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CartModal from '../../components/CartModal';
import { HiShoppingCart } from "react-icons/hi";


const CartBar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);


    // Open Cart Modal 
    const handleCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
    };

    return (
        <section className='fixed bottom-0 left-0 w-full bg-white z-20 py-2 px-4 hidden lg:block'>
            <div className='max-w-[1320px] w-full mx-auto flex items-center justify-between gap-3'>
                <div className='flex items-center'>
                    <button onClick={handleCartModal} className='w-12 h-12'><HiShoppingCart className='text-[28px]' /></button>
                    <p className='text-[#9ca3af] text-base font-medium'>{t('items')}: <b className='text-black'>1</b></p>

                    {isCartModalOpen && (
                        <CartModal
                            onClose={handleCartModal}
                            isCartModalOpen={isCartModalOpen}
                        />
                    )}
                </div>

                <div className='flex items-center gap-4'>
                    <p className='text-[#9ca3af] text-base font-medium hidden sm:block'>Subtotal <b className='text-black'>£6.00</b></p>
                    <button
                        onClick={(() => navigate('/checkout'))}
                        className='h-11 px-8 text-xs text-white bg-[#0B1223] rounded flex items-center justify-center gap-1 transition-all duration-500 hover:bg-opacity-90 uppercase'
                    >
                        {t('Checkout')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CartBar