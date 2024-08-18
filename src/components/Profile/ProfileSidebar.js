import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { RiEdit2Fill } from "react-icons/ri"
import { BsFillHandbagFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { PiTranslateFill, PiPowerFill } from "react-icons/pi";
import { BiSolidLock } from "react-icons/bi";

import { Link, useLocation } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';


const ProfileSidebar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

    // Open Change Password Modal 
    const handleChangePasswordModal = () => {
        setIsChangePasswordModalOpen(!isChangePasswordModalOpen);
    };

    // Open Change Password Modal 
    const handleEditProfileModal = () => {
        setIsEditProfileModalOpen(!isEditProfileModalOpen);
    };


    return (
        <div className='w-full lg:w-[320px]'>

            {/* User details  */}
            <div className='flex items-end justify-between gap-2 lg:relative fixed top-0 lg:top-auto bg-white py-3 lg:py-0 px-4 lg:px-0 lg:border-b-0 border-b border-gray-600 left-0 right-0 w-full'>
                <div>
                    <h4 className='font-semibold text-lg'>Suneel Kumar</h4>
                    <p className='font-medium text-sm text-[#6D717B]'>+923410039833</p>
                    <p className='font-medium text-sm text-[#6D717B]'>testuser0111@gmail.com</p>
                </div>

                <div>
                    <button onClick={handleEditProfileModal} className='w-[35px] h-[35px] bg-gray-300 rounded-lg flex items-center justify-center'>
                        <RiEdit2Fill className='text-xl' />
                    </button>

                    {isEditProfileModalOpen && (
                        <EditProfile onClose={handleEditProfileModal} isEditProfileModalOpen={isEditProfileModalOpen} />
                    )}
                </div>
            </div>

            {/* Links  */}

            <ul className='flex flex-col gap-4 px-2 mt-[120px] lg:mt-16'>
                <li className='w-full'>
                    <Link to="/profile/orders" className={`py-1 px-2 lg:px-4 flex items-center gap-4 lg:gap-8 w-full text-[13px] font-semibold capitalize h-11 rounded-lg transition-all duration-300 ${pathname === "/profile/orders" ? "bg-[#0B1223] opacity-90 text-white" : "hover:bg-[#eee] text-black"}`}>
                        <BsFillHandbagFill className='w-6 h-6' />
                        {t('My Orders')}
                    </Link>
                </li>

                <li className='w-full'>
                    <Link to="/profile/manage-address" className={`py-1 px-2 lg:px-4 flex items-center gap-4 lg:gap-8 w-full text-[13px] font-semibold capitalize h-11 rounded-lg transition-all duration-300 ${pathname === "/profile/manage-address" ? "bg-[#0B1223] opacity-90 text-white" : "hover:bg-[#eee] text-black"}`}>
                        <TiLocation className='w-6 h-6' />
                        {t('Manage addresses')}
                    </Link>
                </li>

                <li className='w-full'>
                    <Link to="/profile/change-language" className={`py-1 px-2 lg:px-4 flex items-center gap-4 lg:gap-8 w-full text-[13px] font-semibold capitalize h-11 rounded-lg transition-all duration-300 ${pathname === "/profile/change-language" ? "bg-[#0B1223] opacity-90 text-white" : "hover:bg-[#eee] text-black"}`}>
                        <PiTranslateFill className='w-6 h-6' />
                        {t('Change language')}
                    </Link>
                </li>

                <li className='w-full'>
                    <button onClick={handleChangePasswordModal} className={`py-1 px-2 lg:px-4 flex items-center gap-4 lg:gap-8 w-full text-[13px] font-semibold capitalize h-11 rounded-lg transition-all duration-300 hover:bg-[#eee] text-black`}>
                        <BiSolidLock className='w-6 h-6' />
                        {t('Change Password')}
                    </button>

                    {isChangePasswordModalOpen && (
                        <ChangePassword
                            onClose={handleChangePasswordModal}
                            isChangePasswordModalOpen={isChangePasswordModalOpen}
                        />
                    )}
                </li>

                <li className='w-full'>
                    <Link className={`py-1 px-2 lg:px-4 flex items-center gap-4 lg:gap-8 w-full text-[13px] font-semibold capitalize h-11 rounded-lg transition-all duration-300 hover:bg-[#eee] text-black`}>
                        <PiPowerFill className='w-6 h-6' />
                        {t('Log Out')}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileSidebar