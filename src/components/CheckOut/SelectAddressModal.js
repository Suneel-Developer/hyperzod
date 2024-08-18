import React, { useState, useEffect } from 'react';
import CloseIcon from "../../assets/close.svg";
import { useTranslation } from 'react-i18next';
import AddNewAddressModal from './AddNewAddressModal';


const SelectAddressModal = ({ isSelectAddressModalOpen, onClose }) => {
    const { t } = useTranslation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAddNewAddressModalOpen, setIsAddNewAddressModalOpen] = useState(false);


    useEffect(() => {
        if (isSelectAddressModalOpen) {
            setIsAnimating(true);
        } else if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isSelectAddressModalOpen, isAnimating]);


    // Open Add new Address Modal 
    const handleAddNewAddressModal = () => {
        setIsAddNewAddressModalOpen(!isAddNewAddressModalOpen);
    };

    return (
        <div>
            <div className={`fixed bottom-0 lg:top-0 left-0 w-full lg:w-[550px] h-fit lg:h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'modalanimated' : 'whennotmodalclose'}`}>
                {/* Header */}
                <div className='flex justify-between items-center w-full p-4'>
                    <h2 className='font-medium text-xl text-[#000000de]'>{t('Select Address')}</h2>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                <div className='bg-white pt-6 pb-6 px-2 w-full'>
                    <button onClick={handleAddNewAddressModal} className='px-5 bg-[#0B1223] h-11 text-white text-sm font-medium btnshadowOne rounded w-full text-center transition-all duration-300 hover:bg-opacity-90'>{t('Add New Address')}</button>
                </div>

                {
                    isAddNewAddressModalOpen && (
                        <AddNewAddressModal
                            onClose={handleAddNewAddressModal}
                            isAddNewAddressModalOpen={isAddNewAddressModalOpen}
                        />
                    )
                }

            </div>

            {/* Overlay */}
            {isSelectAddressModalOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                    onClick={onClose}
                />
            )}
        </div>
    );
};

export default SelectAddressModal;
