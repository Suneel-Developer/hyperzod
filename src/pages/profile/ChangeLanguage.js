import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');

  const handleLanguageSelection = (lng) => {
    setSelectedLanguage(lng);
  };

  const handleSave = () => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Header />

      <section className='pt-20 px-3 pb-40'>
        <div className='max-w-[1220px] w-full mx-auto flex gap-20'>
          <div className='hidden lg:block'>
            <ProfileSidebar />
          </div>

          <div className='flex-1 elevation-2 rounded h-fit'>
            {/* card header  */}
            <div className='py-3 px-4 text-[#000000DE] text-xl font-semibold'>
              {t('Choose Language Title')}
            </div>

            {/* select language */}
            <ul className='px-4 pb-4'>
              <li
                className='flex items-center justify-between py-3 text-sm text-[#000000DE] cursor-pointer'
                onClick={() => handleLanguageSelection('en')}
              >
                English
                <input
                  type="radio"
                  className='cursor-pointer'
                  checked={selectedLanguage === 'en'}
                  onChange={() => handleLanguageSelection('en')}
                />
              </li>
              <li
                className='flex items-center justify-between py-3 text-sm text-[#000000DE] cursor-pointer'
                onClick={() => handleLanguageSelection('fr')}
              >
                French
                <input
                  type="radio"
                  className='cursor-pointer'
                  checked={selectedLanguage === 'fr'}
                  onChange={() => handleLanguageSelection('fr')}
                />
              </li>
            </ul>

            {/* save btn  */}
            <div className='flex justify-end p-4'>
              <button className='text-[#0B1223] text-sm uppercase font-semibold' onClick={handleSave}>
                {t('Save')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChangeLanguage;
