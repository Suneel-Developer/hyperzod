import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PaymentOptions from '../../components/CheckOut/PaymentOptions';
import CouponModal from '../../components/CheckOut/CouponModal';
import SelectAddressModal from '../../components/CheckOut/SelectAddressModal';
import AddNewAddressModal from '../../components/CheckOut/AddNewAddressModal';
import MobileNavigation from '../../components/MobileNavigation';

import DeliveryBus from "../../assets/delivery-bus.svg"
import Pickupmen from "../../assets/pickup.svg"
import ProductExampleImage from "../../assets/3.png"
import ProductImage from "../../assets/product1.jpeg"
import CouponIcon from "../../assets/coupon.svg"
import DoorIcon from "../../assets/door-icon.svg"
import BellIcon from "../../assets/bell-icon.svg"
import DontdistrubIcon from "../../assets/dontdistrub-icon.svg"
import SecurityIcon from "../../assets/security-icon.svg"
import CashIcon from "../../assets/cash.svg"
import FileIcon from "../../assets/file-icon.svg"
import Asap from "../../assets/asap.svg";
import CalenderIcon from "../../assets/calender-icon.svg";

import { FaAngleRight } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { RxBox } from "react-icons/rx";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import ScheduleOrder from '../../components/CheckOut/ScheduleOrder';








const Checkout = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1);
    const [selectedTip, setSelectedTip] = useState(null);
    const [showCustomTip, setShowCustomTip] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [fileName, setFileName] = useState('');
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const [isSelectAddressModalOpen, setIsSelectAddressModalOpen] = useState(false);
    const [isAddNewAddressModalOpen, setIsAddNewAddressModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Delivery');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);



    // Increase & Decrease Products 
    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            return Math.max(newQuantity, 1);
        });
    };

    // Select Tip 
    const handleTipClick = (tip) => {
        if (tip === 'custom') {
            if (showCustomTip) {
                setShowCustomTip(false);
                setSelectedTip(null);
            } else {
                setShowCustomTip(true);
                setSelectedTip(tip);
            }
        } else {
            setSelectedTip(tip);
            setShowCustomTip(false);
        }
    };

    // Delivery instructions where user select Options
    const handleItemClick = (item) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item)
                : [...prevSelectedItems, item]
        );
    };

    // Delivery instructions Data 
    const items = [
        { id: 'door', icon: DoorIcon, label: 'Leave at door' },
        { id: 'bell', icon: BellIcon, label: 'Do not ring bell' },
        { id: 'dont-disturb', icon: DontdistrubIcon, label: 'Do not call' },
        { id: 'security', icon: SecurityIcon, label: 'Leave with security' },
        { id: 'cash', icon: CashIcon, label: 'Bring change' },
    ];

    // Upload file 
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    // Open Coupon Modal 
    const handleCouponModal = () => {
        setIsCouponModalOpen(!isCouponModalOpen);
    };

    // Open Select Address Modal 
    const handleSelectAddressModal = () => {
        setIsSelectAddressModalOpen(!isSelectAddressModalOpen);
    };

    // Open Add new Address Modal 
    const handleAddNewAddressModal = () => {
        setIsAddNewAddressModalOpen(!isAddNewAddressModalOpen);
    };


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className='mb-20 lg:mb-0'>
            {/* Header for Large Devices  */}
            <div className='hidden lg:block'>
                <Header />
            </div>

            <MobileNavigation />

            {/* Header for Small Devices  */}
            <div className='py-[13px] px-4 lg:hidden flex items-center justify-between gap-3 bg-white border-b border-black border-opacity-[12%] h-[60px] sticky top-0 w-full left-0'>
                <button onClick={(() => navigate('/home'))} className='h-9 w-9 bg-[#f5f5f5] rounded-lg flex items-center justify-center'>
                    <FaAngleRight className='rotate-180' />
                </button>
                <p className='text-base font-semibold truncate'>Women Hair Studio</p>
                <span></span>
            </div>


            <section className='pb-12 pt-2 lg:pt-8 lg:px-3 w-full'>
                <div className='max-w-[1350px] w-full mx-auto flex flex-col lg:flex-row lg:gap-8'>

                    {/* Left Side  */}
                    <div className='max-w-full lg:max-w-[744px] w-full order-2 lg:order-1'>
                        <div className='lg:border border-y border-black border-opacity-[12%] pt-4 pb-5 px-4 lg:px-5 lg:mb-7 lg:rounded-lg'>
                            <div className='flex items-center justify-between'>
                                <p className='text-lg hidden lg:block uppercase font-semibold'>{t('Order Type')}</p>
                                <div className='relative w-full lg:w-auto' ref={dropdownRef}>
                                    <div
                                        className='flex items-center cursor-pointer justify-between lg:justify-center lg:w-auto w-full'
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <div className='flex items-center'>
                                            <img
                                                src={selectedOption === 'Delivery' ? DeliveryBus : Pickupmen}
                                                alt={selectedOption}
                                                className='w-5 h-5'
                                            />
                                            <span className='text-sm pl-4 pr-6 font-semibold'>{selectedOption}</span>
                                        </div>
                                        <IoCaretDownSharp className='text-sm opacity-60' />
                                    </div>

                                    {isDropdownOpen && (
                                        <ul className='absolute elevation-2 rounded w-full top-8 bg-white py-2'>
                                            <li
                                                className={`px-3 py-2 text-sm font-medium hover:bg-[#eee] cursor-pointer transition-all duration-500 ${selectedOption === 'Delivery' ? 'bg-[#eee]' : ''
                                                    }`}
                                                onClick={() => handleOptionClick('Delivery')}
                                            >
                                                Delivery
                                            </li>
                                            <li
                                                className={`px-3 py-2 text-sm font-medium hover:bg-[#eee] cursor-pointer transition-all duration-500 ${selectedOption === 'Pickup' ? 'bg-[#eee]' : ''
                                                    }`}
                                                onClick={() => handleOptionClick('Pickup')}
                                            >
                                                Pickup
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <ScheduleOrder />
                        </div>

                        <div className='border border-black border-opacity-[12%] mb-7 px-5 py-3 rounded-lg hidden lg:block'>
                            {/* Delivery Section  */}

                            {selectedOption === "Delivery" ? (
                                <div>
                                    <div className='flex items-center justify-between gap-2 mb-2'>
                                        <h2 className='text-lg font-semibold uppercase'>{t('Delivery Location')}</h2>
                                        <button className='px-4 text-[#1E88E5] text-sm font-semibold h-9 flex items-center justify-center transition-all duration-500 hover:bg-[#DAEAFB] rounded' onClick={handleAddNewAddressModal}>{t('Add New')}</button>
                                    </div>
                                    <button onClick={handleSelectAddressModal} className='text-black text-opacity-60 text-base h-10 flex items-center justify-between w-full'>
                                        {t('Select Address')}
                                        <IoCaretDownSharp />
                                    </button>
                                </div>
                            )
                                :
                                (
                                    <div>
                                        <h2 className='text-lg font-semibold mb-2'>Merchant Location</h2>
                                        <div className='flex items-center gap-2 text-sm opacity-80 font-medium'>
                                            <IoLocationSharp className='opacity-50' />
                                            123 Maple Street, Springfield, IL 62701
                                        </div>
                                    </div>
                                )}
                        </div>

                        <div className='lg:border border-black border-opacity-[12%] lg:mb-7 px-4 lg:px-5 pt-4 pb-6 rounded-lg'>
                            <h3 className='mb-2 font-semibold text-sm'>{t('File Upload')}</h3>

                            <label className='cursor-pointer'>
                                <input type="file" className='hidden' onChange={handleFileChange} />
                                <div className='px-3 h-11 border border-black border-opacity-30 rounded w-full gap-2 flex items-center'>
                                    <img src={FileIcon} alt="FileIcon" />
                                    {fileName && (
                                        <p className='bg-[#e0e0e0] px-3 text-sm text-[#000000DE] rounded-2xl h-8 flex items-center justify-center'>
                                            {fileName}
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>

                        <PaymentOptions />
                    </div>


                    {/* Right Side  */}
                    <div className='max-w-full lg:max-w-[550px] w-full rounded-lg lg:border border-black border-opacity-[12%] order-1 lg:order-2'>
                        <div className='py-3 px-5 hidden lg:flex items-center gap-5 border-b-2 border-gray-300'>
                            <div className='h-[55px] w-[55px] boxshadowTwo border-4 rounded-xl' style={{ borderColor: "rgb(255 255 255" }}>
                                <img src={ProductExampleImage} alt="ProductExampleImage" />
                            </div>

                            <div>
                                <span className='text-sm leading-4 text-[#6b7280]'>{t("You're ordering from")}</span>
                                <h3 className='font-semibold capitalize text-xl leading-5'>Women Hair Studio</h3>
                            </div>
                        </div>

                        <div className='pt-1 px-4 pb-4 hidden lg:block'>
                            <button onClick={handleAddNewAddressModal} className='px-5 bg-[#0B1223] h-11 text-white text-sm font-semibold uppercase btnshadowOne rounded w-full text-center transition-all duration-300 hover:bg-opacity-90'>{t('Place Order')}</button>
                        </div>

                        {/* Selected Cart Items  */}
                        <ul className='mt-3 mb-1 overflow-y-auto flex flex-col gap-4 px-4 lg:px-5 max-h-[384px] boxscrollbar3'>
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


                        {/* Search Box  */}
                        <div className='my-7 px-4 lg:px-5'>
                            <input type="text" placeholder={t('Enter message here')} className='h-10 px-3 border border-[#e5e5e5] outline-none rounded text-sm w-full' />
                        </div>


                        {/* Coupoun  */}
                        <div>
                            <div onClick={handleCouponModal} className='border-y border-[#e5e5e5] cursor-pointer px-4 lg:px-5 py-2 flex items-center gap-1'>
                                <img src={CouponIcon} alt="CouponIcon" className='w-7 h-7' />
                                <h3 className='text-base ml-2 font-semibold text-[#000000DE] flex-1'>{t('Use Coupons')}</h3>
                                <FaAngleRight className='text-[#000000DE]' />
                            </div>

                            {isCouponModalOpen && (
                                <CouponModal
                                    onClose={handleCouponModal}
                                    isCouponModalOpen={isCouponModalOpen}
                                />
                            )}
                        </div>


                        {/* Select Tip  */}
                        <div className='px-4 lg:px-5 mt-3 pb-5 border-b border-[#e5e5e5]'>
                            <h3 className='text-base leading-5 font-semibold uppercase'>{t('Tip')}</h3>
                            <ul className='mt-2 grid grid-cols-4 gap-2'>
                                {['£5', '£10', '£15', 'custom'].map((tip) => (
                                    <li
                                        key={tip}
                                        className={`text-[13px] font-semibold py-2 px-1 rounded text-center border-gray-400 border cursor-pointer transition-all duration-500 ${selectedTip === tip ? 'bg-[#DAEAFB]' : 'hover:bg-[#E5E7EB]'
                                            }`}
                                        onClick={() => handleTipClick(tip)}
                                    >
                                        {tip}
                                    </li>
                                ))}
                            </ul>

                            {showCustomTip && (
                                <div className='mt-4 flex gap-2 items-end'>
                                    <div className='mt-1 pt-3 flex items-center border-b flex-1'>
                                        <p className='font-semibold text-sm mr-1'>£</p>
                                        <input type="text" className='py-2 flex-1 text-sm font-medium outline-none border-none' />
                                    </div>

                                    <button className='bg-[#0B1223] ml-3 px-3 text-center text-white text-sm font-semibold capitalize min-w-20 h-10 rounded transition-all duration-500 hover:bg-opacity-90'>
                                        {t('add')}
                                    </button>
                                </div>
                            )}
                        </div>


                        {/* Delivery Instruction  */}
                        {selectedOption === "Delivery" && (
                            <div className='pt-5 px-4 lg:px-5'>
                                <h3 className='text-base leading-5 font-semibold mb-4'>{t('Delivery instructions')}</h3>
                                <ul className='flex gap-2 overflow-x-auto boxscrollbar2'>
                                    {items.map((item) => (
                                        <li
                                            key={item.id}
                                            className={`min-w-[85px] w-[85px] h-[85px] min-h-[85px] p-2 border border-gray-400 rounded cursor-pointer flex flex-col gap-4 transition-all duration-500 ${selectedItems.includes(item.id) ? 'bg-[#DAEAFB]' : 'hover:bg-[#E5E7EB]'
                                                }`}
                                            onClick={() => handleItemClick(item.id)}
                                        >
                                            <div className='flex justify-between'>
                                                <img src={item.icon} alt={item.label} className='w-[18px]' />
                                                {selectedItems.includes(item.id) ? (
                                                    <IoIosCheckbox className='text-[#0671E3] text-lg' />
                                                ) : (
                                                    <RxBox className='text-[#0671E3] text-base' />
                                                )}
                                            </div>
                                            <p className='text-center text-xs text-[#000000DE] font-semibold'>{item.label}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {/* Bill details  */}
                        <div className='boxshadowBillDetails pt-4 mt-6 pb-2 lg:px-5 rounded-lg mx-4 lg:mb-5'>
                            <h3 className='text-lg leading-5 font-semibold uppercase mb-3'>{t('Bill Details')}</h3>

                            <ul>
                                <li className='flex items-center justify-between text-xs font-semibold leading-8 pb-2 mb-3 border-b'>
                                    {t('Subtotal')}
                                    <p>£58.00</p>
                                </li>
                                <li className='flex items-center justify-between text-base font-semibold leading-6'>
                                    {t('Grand Total')}
                                    <p>£58.00</p>
                                </li>
                            </ul>
                        </div>

                        <div className='pt-2 px-4 pb-6 hidden lg:block'>
                            <button onClick={handleAddNewAddressModal} className='px-5 bg-[#0B1223] h-11 text-white text-sm font-semibold uppercase btnshadowOne rounded w-full text-center transition-all duration-300 hover:bg-opacity-90'>{t('Place Order')}</button>
                        </div>

                    </div>
                </div>
            </section>


            {/* Add Address Btn Only Show on Small Devices  */}
            <div className='bg-white pt-2 pb-5 fixed bottom-0 z-40 w-full left-0 border-t border-black border-opacity-[12%] block lg:hidden'>
                {/* when address not add  */}
                {/* <div className='px-2'>
                    <button onClick={handleAddNewAddressModal} className='px-5 bg-[#0B1223] h-[54px] text-white text-base font-semibold btnshadowOne rounded-lg w-full text-center transition-all duration-300 hover:bg-opacity-90'>{t('Add Address')}</button>
                </div> */}

                <div className='px-2'>
                    {/* <div className='flex items-center gap-2 pt-2 pb-[14px] mb-[10px] px-[6px] text-sm font-medium border-b border-black border-opacity-[12%] text-[#0671E3] uppercase cursor-pointer'>
                        <img src={CalenderIcon} alt="CalenderIcon" />
                        Tuesday 20 Aug, 01:30 - 02:00
                    </div> */}
                    <div className='flex items-center gap-2 pt-2 pb-[14px] mb-[10px] px-[6px] text-sm font-medium border-b border-black border-opacity-[12%]'>
                        <img src={Asap} alt="Asap" />
                        ASAP delivery
                        <p className='text-[#A8A29E]'>(30 mins)</p>
                    </div>

                    <div className='flex items-center gap-2 pt-1 px-[6px] mb-4 text-sm font-medium'>
                        <IoLocationSharp />
                        <p className='text-[#333] truncate line-clamp-1 text-balance flex-1'> 205 City Bakery St, Block 17 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan</p>
                    </div>

                    <div
                        className='bg-[#0B1223] px-3 text-center text-white text-base font-semibold uppercase w-full h-[54px] rounded-lg transition-all duration-500 hover:bg-opacity-90 flex items-center justify-between'
                    >
                        <ul className='flex'>
                            <li className='pr-2 text-xs font-medium text-white'>2 Items</li>
                            <li className='pl-2 text-xs font-medium text-white border-l-2 border-white'>£63.00</li>
                        </ul>
                        <button className='text-white text-xs uppercase font-medium'>Place Order</button>
                    </div>
                </div>
            </div>


            {
                isSelectAddressModalOpen && (
                    <SelectAddressModal
                        onClose={handleSelectAddressModal}
                        isSelectAddressModalOpen={isSelectAddressModalOpen}
                    />
                )
            }

            {
                isAddNewAddressModalOpen && (
                    <AddNewAddressModal
                        onClose={handleAddNewAddressModal}
                        isAddNewAddressModalOpen={isAddNewAddressModalOpen}
                    />
                )
            }



            {/* Footer  */}
            <div className='mb-[100px] lg:mb-0'>
                <Footer />
            </div>
        </section >
    )
}

export default Checkout