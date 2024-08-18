import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaHouse } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import AddNewAddressModal from '../../components/CheckOut/AddNewAddressModal';


const ManageAddress = () => {
  const { t } = useTranslation();
  const [isAddNewAddressModalOpen, setIsAddNewAddressModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const handleAddNewAddressModal = () => {
    setIsAddNewAddressModalOpen(!isAddNewAddressModalOpen);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };


  return (
    <>
      <Header />

      <section className='pt-5 lg:pt-20 px-3 pb-40'>
        <div className='max-w-[1220px] w-full mx-auto flex gap-20'>
          <div className='hidden lg:block'>
            <ProfileSidebar />
          </div>

          <div className='flex-1 elevation-2 rounded h-fit'>
            <div className='hidden lg:flex items-center justify-between p-4'>
              <h2 className='font-semibold text-xl text-[#000000DE]'>{t('Manage addreses')}</h2>
              <button
                onClick={handleAddNewAddressModal}
                className={`h-9 px-4 text-center bg-[#0b1223] text-white text-base capitalize rounded font-medium transition-opacity duration-300 hover:bg-opacity-90`}
              >
                {t('Add Address')}
              </button>
            </div>

            <div className='py-4 px-4 md:px-8 flex gap-8'>
              <FaHouse className='mt-1 text-[#666666]' />
              <div className='flex-1'>
                <h2 className='font-semibold capitalize text-base'>Home</h2>
                <p className='text-sm text-[#666666] py-[2px]'>L201, Karachi, Karachi, joahr</p>
                <p className='text-sm text-[#666666]'>205 City Bakery St, Block 17 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan</p>

                <div className='flex gap-4 mt-4'>
                  <button onClick={handleAddNewAddressModal} className='text-[#0671E3] text-sm uppercase font-semibold'>{t('Edit')}</button>
                  <button onClick={handleDeleteModal} className='text-[#0671E3] text-sm uppercase font-semibold'>{t('Delete')}</button>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddNewAddressModal}
              className={`h-11 px-4 text-center bg-[#0b1223] text-white text-base capitalize block lg:hidden mt-5 w-full rounded font-medium transition-opacity duration-300 hover:bg-opacity-90`}
            >
              {t('Add Address')}
            </button>
          </div>
        </div>


        {isAddNewAddressModalOpen && (
          <AddNewAddressModal
            onClose={handleAddNewAddressModal}
            isAddNewAddressModalOpen={isAddNewAddressModalOpen}
          />
        )}


        {/* Confrim Delete Modal  */}
        {isDeleteModalOpen && (
          <div className='bg-[#212121] bg-opacity-[0.46] fixed top-0 left-0 w-full h-screen flex items-center justify-center px-4'>
            <div className='bg-white pt-4 px-6 pb-6 max-w-[500px] mx-auto w-full rounded-lg'>
              <div className='flex items-center justify-between pt-5 pb-3 text-base font-medium'>
                {t('Delete Address')}
                <button onClick={handleCloseDeleteModal}><MdOutlineClose className='text-xl' /></button>
              </div>

              <div className='p-3'>
                <div className='text-base text-[#000000DE] mb-5 text-center'>
                  {t('Are you sure you want to Delete Address')} <span className='text-[#F44336]'>"205 City Bakery St, Block 17 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan"</span> ?
                </div>

                <div className='flex gap-2 justify-center'>
                  <button
                    className={`h-9 px-4 text-center bg-[#0b1223] text-white text-sm uppercase rounded font-medium transition-opacity duration-300 hover:bg-opacity-90`}
                  >
                    {t('Yes')}
                  </button>
                  <button
                    onClick={handleCloseDeleteModal}
                    className={`h-9 px-4 text-center bg-[#0b1223] text-white text-sm uppercase rounded font-medium transition-opacity duration-300 hover:bg-opacity-90`}
                  >
                    {t('No')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>
      <Footer />
    </>
  )
}

export default ManageAddress