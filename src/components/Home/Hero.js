import React, { useState } from 'react'
import GifImage from "../../assets/home-gif.svg"
import LocateIocn from "../../assets/locate-icon.svg"
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');


    return (
        <section className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-[420px] lg:h-screen'>
                <img src={GifImage} alt="GifImage" className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col items-start justify-center p-4'>

                {/* Search text SHow on Only desktop  */}
                <div className='hidden lg:block w-full'>
                    <h1 className='text-5xl font-semibold leading-[1] pt-4 mt-3 mb-2 text-[#000000De]'>
                        {t('welcome')}
                    </h1>

                    <p className='text-2xl leading-[2rem] mb-3 text-[#000000De]'>
                        {t('homeherotext')}
                    </p>


                    <div
                        className={`input-shadow rounded-[10px] min-h-14 px-3 flex items-center gap-2 border w-full outline-none transition-all duration-200  ${isFocused ? 'border-2 border-[#1976d2]' : 'border-[#E5E7EB]'
                            }`}
                    >
                        <input
                            type="text"
                            placeholder={t('homeherinputplaceholder')}
                            className='w-full h-full border-none outline-none flex-1 placeholder:font-light'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                        <button className='h-9 flex items-center justify-center gap-2 px-4 text-sm rounded font-medium uppercase text-[#000000DE] transition-colors duration-300 hover:bg-[#e7e6e6bf]'>
                            <img src={LocateIocn} alt="LocateIcon" className='h-[18px] w-[18px]' />
                            {t('homeherinputlocatebtn')}
                        </button>
                    </div>
                </div>

                {/* Login Form Only show on desktop  */}
                <form className='block lg:hidden min-h-[60vh] w-full'>
                    <h1 className='text-3xl font-semibold mt-3 mb-1 capitalize'>
                        {t('welcome')}
                    </h1>

                    <p className='text-[#918d8d] text-sm'>
                        {t('logintext')}
                    </p>

                    <p className='text-base font-semibold mt-6'>
                        {t('loginsignup')}
                    </p>

                    <input
                        type="text"
                        placeholder={t('logininputplacholder')}
                        className='mt-6 rounded-[10px] min-h-[50px] px-5 mb-1 border border-[#E5E7EB] placeholder:font-light w-full outline-none transition-all duration-300 hover:border-black focus:border-2 focus:border-[#1976d2] focus:ring-0'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button
                        className='h-[52px] px-5 text-center text-base capitalize rounded-lg mt-12 w-full font-medium transition-colors duration-300'
                        style={{
                            backgroundColor: inputValue ? '#0b1223' : 'rgba(0,0,0,.12)',
                            color: inputValue ? '#ffffff' : 'rgba(0,0,0,.26)',
                        }}
                    >
                        {t('logincontinuebtn')}
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Hero