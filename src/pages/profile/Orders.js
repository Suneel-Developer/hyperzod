import React from 'react'
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MdChevronRight, MdWatchLater } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';




const Order = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <section className='pt-20 lg:px-3 pb-40'>
        <div className='max-w-[1220px] w-full mx-auto flex gap-20'>
          <div className='hidden lg:block'>
            <ProfileSidebar />
          </div>

          <div className='flex-1 flex-col flex gap-5'>
            <div className='lg:border border-gray-900 rounded-sm overflow-hidden w-full'>
              <div className='py-3 px-4 bg-gray-900'>
                <div className='flex items-center justify-between mb-1'>
                  <p className='font-semibold text-sm'>QuickCart Grocery</p>
                  <div className='flex items-center font-semibold text-[#0671E3] text-sm'>
                    £84.00
                    <MdChevronRight className='text-xl' />
                  </div>
                </div>

                <div className='flex font-medium text-[11px] items-start leading-4 text-[#727272] flex-wrap'>
                  <span className='flex items-center'><MdWatchLater className='mr-1 text-orange-500' />Accepted&nbsp; | &nbsp;</span>
                  <span> Order #4811&nbsp; | &nbsp; </span>
                  <span>17 Aug 2024, 4:09 am&nbsp; </span>
                  <span> | &nbsp;Delivery</span>
                </div>
              </div>

              <div className='p-3'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className=''>
                      <th className='text-start pt-[5px] pb-3 font-semibold uppercase text-[.75rem] leading-4'>Product</th>
                      <th className='text-center pt-[5px] pb-3 font-semibold uppercase text-[.75rem] leading-4'>Qty</th>
                      <th className='text-end pt-[5px] pb-3 font-semibold uppercase text-[.75rem] leading-4'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className='text-start font-medium uppercase text-[#666666] text-sm leading-5 py-[5px] pr-[5px] line-clamp-2 truncate text-balance'>RINNIG Apron</th>
                      <th className='text-center font-medium uppercase text-[#666666] text-sm leading-5 p-[5px]'>2</th>
                      <th className='text-end font-medium uppercase text-[#666666] text-sm leading-5 py-[5px] pl-[5px]'>£40.00</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='py-2 px-4 bg-gray-900 min-h-[46px] flex items-center'>
                <button onClick={(() => navigate('/checkout'))} className='flex-1 h-7 px-4 flex items-center justify-center text-sm uppercase text-[#0671E3] font-semibold border-r border-[#b8bbbf]'>{t('Re-order')}</button>
                <button onClick={(() => navigate('/profile/track-order'))} className='flex-1 h-7 px-4 flex items-center justify-center text-sm uppercase text-[#0671E3] font-semibold'>{t('Track order')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Order