import React, { useState, useEffect } from 'react';
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';
import LocateIocn from "../assets/locate-icon.svg"
import LocationIocn from "../assets/location-full-icon.svg"
import { useNavigate } from 'react-router-dom';


const SelectLocationModal = ({ isLocationModalOpen, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isLocationModalOpen) {
      setIsAnimating(true);
    } else if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLocationModalOpen, isAnimating]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full max-w-[550px] h-full bg-white z-50 transition-transform duration-300 ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Icon */}
        <div className='flex justify-between items-center w-full p-4 border-b-2 border-black border-opacity-10'>
          <h2 className='font-medium text-xl text-[#000000de]'>{t('searchlocation')}</h2>
          <button
            className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
            onClick={onClose}
          >
            <img src={CloseIcon} alt="CloseIcon" />
          </button>
        </div>

        <div className='py-6 px-4'>
          <div
            className={`input-shadow rounded-[10px] min-h-14 px-3 flex items-center gap-2 border w-full outline-none transition-all duration-200 `}
          >
            <input
              type="text"
              placeholder={t('homeherinputplaceholder')}
              className='w-full h-full border-none outline-none flex-1 placeholder:font-light'
            />
            <button className='h-9 flex items-center justify-center gap-2 px-4 text-sm rounded font-medium uppercase text-[#000000DE] transition-colors duration-300 hover:bg-[#e7e6e6bf]'>
              <img src={LocateIocn} alt="LocateIcon" className='h-[18px] w-[18px]' />
              <p className='hidden md:block'>{t('homeherinputlocatebtn')}</p>
            </button>
          </div>

          <p className='text-center my-4 text-xs md:text-base text-[#000000DE]'>-or-</p>

          <button onClick={(() => navigate('/service-area'))} className='h-[52px] p-6 text-base text-[#000000DE] rounded w-full flex items-center justify-center gap-2 font-medium uppercase bg-white border border-black transition-colors duration-300 hover:bg-[#e7e6e6bf]'>
            <img src={LocationIocn} alt="LocationIocn" />
            {t('setlocationmap')}
          </button>
        </div>

      </div>



      {/* Overlay */}
      {isLocationModalOpen && (
        <div
          className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
          onClick={onClose}
        />
      )}
    </div>
  );
};

export default SelectLocationModal;
