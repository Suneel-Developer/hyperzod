import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import EmptyCart from "../assets/empty_cart.svg"
import ProductImage from "../assets/product1.jpeg"
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const CartModal = ({ isCartModalOpen, onClose }) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [isAnimating, setIsAnimating] = useState(false);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        if (isCartModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isCartModalOpen, isAnimating]);



    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            return Math.max(newQuantity, 1);
        });
    };

    
    return (
        <div>
            <div
                className={`fixed bottom-0 lg:top-0 right-0 left-auto w-full lg:w-[550px] h-fit lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimatedRight' : 'whennotmodalcloseRight'}`}
            >
                {/* Close Icon */}
                <div className='flex justify-between sticky top-0 items-center w-full py-3 px-4 border-b border-black border-opacity-10'>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-lg bg-[#f3f3f4]'
                        onClick={onClose}
                    >
                        <IoCloseSharp />
                    </button>
                    <h2 className='font-semibold text-lg text-[#000000DE]'>{t('cart')}</h2>
                    <h2></h2>
                </div>

                {/* When Cart Is Empty  */}
                {/* <div className='flex items-center justify-center flex-col mt-24'>
                    <img src={EmptyCart} alt="EmptyCart" className='max-w-[200px] md:max-w-[280px] w-full' />
                    <h2 className='mt-10 mb-1 font-semibold text-2xl leading-8'>{t('Your cart is empty')}</h2>
                    <p className='mb-4 text-base text-[#898989] max-w-[262px] w-full mx-auto text-center'>{t('Once you add items to your cart, they will appear here')}</p>
                </div> */}

                {/* When Add Item  */}
                <div className='h-full relative'>
                    {/* Slected Porducts Items  */}
                    <ul className='px-4 pt-6 pb-[60px] lg:pb-[120px] flex flex-col gap-3 overflow-y-scroll h-full max-h-[500px] lg:max-h-screen min-h-[500px] lg:min-h-screen boxscrollbar2'>
                        <li className='flex items-center gap-2 w-full'>
                            <img src={ProductImage} alt="ProductImage" className='w-14 h-14 object-cover rounded-lg' />
                            <div className='flex-1'>
                                <p className='text-xs font-medium leading-[1.375] mb-1 truncate'>Hair Cut</p>
                                <p className='text-xs font-semibold leading-[1.2]'>£15.00</p>
                            </div>

                            <div className='border border-[#E6E6E6] rounded flex items-center h-8'>
                                <button
                                    className='px-2 font-semibold text-sm'
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span className='font-semibold text-sm text-center min-w-6'>{quantity}</span>
                                <button
                                    className='px-2 font-semibold text-sm'
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    </ul>

                    {/* CheckOut btn  */}
                    <div className='fixed bottom-0 w-full p-3 bg-white'>
                        <div onClick={(() => navigate("/checkout"))} className='min-h-[60px] bg-[#0b1223] p-2 rounded-lg flex items-center justify-between gap-2 transition-all duration-300 hover:bg-opacity-90 cursor-pointer'>
                            <ul className='flex pl-3'>
                                <li className='pr-2 border-r-2 border-white font-semibold text-sm text-white leading-5'>10 {t('items')}</li>
                                <li className='pl-2 font-semibold text-sm text-white leading-5'>£179.00</li>
                            </ul>

                            <button className='flex items-center gap-2 px-2 text-xs uppercase text-white font-semibold'>
                                <RiShoppingBag4Fill className='text-lg' />
                                {t('Checkout')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isCartModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default CartModal;
