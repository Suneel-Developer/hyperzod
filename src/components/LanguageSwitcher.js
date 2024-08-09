import React, { useState } from 'react';
import TransletorIcon from '../assets/transletor.svg';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <button
        className='min-h-10 px-2 rounded flex items-center gap-8 font-medium mb-1 text-[13px] transition-colors duration-300 hover:bg-[#f7f6f6cc] w-full cursor-pointer'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img src={TransletorIcon} alt="TransletorIcon" />
        {t('language')}
      </button>

      {isDropdownOpen && (
        <ul className='absolute -right-[292px] py-2 bg-white top-0 w-[284px] language-translator'>
          <li>
            <button
              className={`min-h-12 px-4 text-start font-normal mb-1 text-base transition-colors duration-300 w-full cursor-pointer ${
                selectedLanguage === 'en' ? 'bg-gray-200' : 'hover:bg-[#f7f6f6cc]'
              }`}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </button>
          </li>
          <li>
            <button
              className={`min-h-12 px-4 text-start font-normal text-base transition-colors duration-300 w-full cursor-pointer ${
                selectedLanguage === 'fr' ? 'bg-gray-200' : 'hover:bg-[#f7f6f6cc]'
              }`}
              onClick={() => handleLanguageChange('fr')}
            >
              French
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
