import React from 'react'
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";







const TrackOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <>
      <div className='hidden lg:block'> <Header /></div>

      <section className='pt-20 lg:px-3 pb-20 lg:pb-40'>
        <div className='max-w-[1220px] w-full mx-auto flex gap-20'>
          <div className='hidden lg:block'>
            <ProfileSidebar />
          </div>

          <div className='elevation-2 rounded flex-1 h-fit'>

            {/* Header  */}
            <div className='px-4 lg:px-8 py-4 flex items-center gap-5 bg-white fixed lg:relative top-0 lg:top-auto w-full z-40'>
              <button onClick={(() => navigate('/home'))} className='w-9 h-9 rounded-lg bg-[#eee] flex items-center justify-center text-xl'><MdOutlineChevronLeft /></button>
              <div>
                <p className='font-semibold text-lg leading-7'>Order #4811</p>
                <p className='font-semibold text-xs text-[#A6A6A6] leading-5'>17 Aug 2024, 4:09 am</p>
              </div>
            </div>

            {/* Map  */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.312291638803!2d-122.41941558468184!3d37.77492927975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cb4b1c1f1%3A0x7a50e477e6f8451b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1604589400155!5m2!1sen!2sus&controls=0"
                title="Map"
                className="w-full h-[300px] lg:h-[400px] border-0 outline-none"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>


            {/* Track Order  */}
            <div className='py-8 px-3 md:px-8'>
              <ul>
                <li className='flex pb-8'>
                  <div className='relative'>
                    <div className='bg-[#f3f3f4] h-10 w-10 rounded-lg flex items-center justify-center text-2xl'><MdLocationOn /></div>
                    <div className='w-[2px] h-[45px] bg-black absolute top-10 left-0 right-0 mx-auto'></div>
                  </div>
                  <div className='pl-3 md:pl-6 flex-1'>
                    <div className='text-sm font-semibold text-balance truncate line-clamp-1'>QuickCart Grocery</div>
                    <div className='text-balance truncate line-clamp-1 font-medium leading-4 text-xs mt-[7px] text-[#A6A6A6]'>123 Maple Street, Springfield, IL 62701</div>
                  </div>
                </li>

                <li className='flex pb-5'>
                  <div className='relative flex justify-center w-10'>
                    <div className='bg-green h-[18px] w-[18px] rounded-full bg-green-600'></div>
                    <div className='w-[2px] h-[45px] bg-black absolute top-[18px] left-0 right-0 mx-auto'></div>
                  </div>
                  <div className='pl-3 md:pl-6 flex-1'>
                    <div className='text-sm font-semibold text-balance truncate line-clamp-1'>Pending</div>
                    <div className='text-balance truncate line-clamp-1 font-medium leading-4 text-xs mt-[7px] text-[#A6A6A6]'>4:09 am 17 Aug 2024</div>
                  </div>
                </li>

                <li className='flex pb-5'>
                  <div className='relative flex justify-center w-10'>
                    <div className='bg-green h-[18px] w-[18px] rounded-full bg-green-600'></div>
                    <div className='  absolute top-[18px] left-0 right-0 mx-auto flex justify-center'>
                      <div className='border-l-2 h-[45px] border-dashed'></div>
                    </div>
                  </div>
                  <div className='pl-3 md:pl-6 flex-1'>
                    <div className='text-sm font-semibold text-balance truncate line-clamp-1'>Accepted</div>
                    <div className='text-balance truncate line-clamp-1 font-medium leading-4 text-xs mt-[7px] text-[#A6A6A6]'>4:09 am 17 Aug 2024</div>
                  </div>
                </li>

                <li className='flex pb-6'>
                  <div className='relative'>
                    <div className='bg-[#f3f3f4] h-10 w-10 rounded-lg flex items-center justify-center text-lg'><FaHouse /></div>
                  </div>
                  <div className='pl-3 md:pl-6 flex-1'>
                    <div className='text-balance truncate line-clamp-1 font-medium leading-4 text-xs text-[#A6A6A6] mb-1'>Drop</div>
                    <div className='text-sm font-semibold text-balance truncate line-clamp-1 mb-1'>L201, Karachi, joahr</div>
                    <div className='text-sm font-semibold text-balance truncate line-clamp-1'> 205 City Bakery St, Block 17 Gulistan-e-Johar, Karachi, Karachi City, Sindh, Pakistan</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bill details  */}
            <div>
              <h3 className='py-4 px-3 lg:px-6 text-[3D3D3D] text-lg font-medium bg-gray-900'>{t('Bill Details')}</h3>

              <div className='px-3 lg:px-6 pt-5 pb-9'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr>
                      <th className='font-semibold uppercase text-xs text-start'>{t('Product')}</th>
                      <th className='font-semibold uppercase text-xs text-center'>{t('Qty')}</th>
                      <th className='font-semibold uppercase text-xs text-end'>{t('Price')}</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className='font-medium text-[#666666] uppercase text-sm text-start py-[5px] pr-[5px]'>RINNIG Apron</td>
                      <td className='font-medium text-[#666666] uppercase text-sm text-center p-[5px]'>2</td>
                      <td className='font-medium text-[#666666] uppercase text-sm text-end py-[5px] pl-[5px]'>£40.00</td>
                    </tr>
                  </tbody>
                </table>

                <hr className='mt-4 mb-3 opacity-30' />

                <table className='w-full border-collapse'>
                  <thead>
                    <tr>
                      <th colSpan="2" className='font-semibold text-xs text-start leading-8'>{t("Subtotal")}</th>
                      <th className='font-semibold text-xs text-end leading-8'>£80.00</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td colSpan="2" className='font-semibold text-xs text-start leading-8'>Commission</td>
                      <td className='font-semibold text-xs text-end leading-8'>£4.00</td>
                    </tr>
                  </tbody>
                </table>

                <hr className='mt-4 mb-3 opacity-30' />

                <table className='w-full border-collapse'>
                  <tbody>
                    <tr>
                      <td colSpan="2" className='font-semibold text-base text-start py-[5px] pr-[5px]'>{t('Grand Total')}</td>
                      <td className='font-semibold text-base text-end py-[5px] pl-[5px]'>£84.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TrackOrder