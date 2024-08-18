import React from 'react'
import { useTranslation } from 'react-i18next';
import Header from "../../components/Header"
import CartBar from "../../components/MerchantDetails/CartBar"
import Footer from "../../components/Footer"
import { AiOutlineSearch } from "react-icons/ai";
import SearchedProducts from './SearchedProducts';
import MobileNavigation from '../../components/MobileNavigation';


const Search = () => {
  const { t } = useTranslation();

  return (
    <div className='mb-20 lg:mb-0'>
      <Header />
      <MobileNavigation />

      <section className='pb-32'>

        {/* Search bar  */}
        <div className='px-3 md:px-7 py-6 my-4 sticky top-[57px] lg:top-16 z-20 bg-white border-b border-[#0000001a]'>
          <div className='rounded-lg flex items-center gap-2 px-3 bg-[#eee] h-12 cursor-pointer'>
            <AiOutlineSearch className='text-2xl opacity-60' />
            <input type="search" className='flex-1 h-full outline-none border-none bg-transparent' placeholder={t('search')} />
          </div>
        </div>

        {/* Recently searched keywords  */}
        <div className='mt-6 px-3 md:px-7 mb-10'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-medium'>{t('Recent Search')}</h2>
            <button className='px-4 text-[#1E88E5] text-sm font-semibold h-9 flex items-center justify-center transition-all duration-500 capitalize hover:bg-[#DAEAFB] rounded'>{t('Clear')}</button>
          </div>

          <ul className='flex gap-2 flex-wrap my-2'>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>onion chicken</li>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>onion</li>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>chocklate</li>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>cho</li>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>sweet</li>
            <li className='h-7 rounded px-[10px] text-sm font-medium text-[#000000DE] border-2 flex items-center justify-center cursor-pointer'>chicken</li>
          </ul>
        </div>

        <SearchedProducts />
      </section>

      <CartBar />
      <Footer />
    </div>
  )
}

export default Search