import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { LuLocateFixed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';



const ServiceArea = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <div className="relative w-full h-screen">
            {/* Map iframe */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.312291638803!2d-122.41941558468184!3d37.77492927975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cb4b1c1f1%3A0x7a50e477e6f8451b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1604589400155!5m2!1sen!2sus&controls=0"
                title="Map"
                className="absolute top-0 left-0 w-full h-full border-0 outline-none"
                allowFullScreen
                loading="lazy"
            ></iframe>

            {/* Back Button */}
            <div className="absolute top-5 left-5 flex" >
                <button onClick={(() => navigate('/home'))} className='w-9 h-9 bg-[#e5e5e5] rounded-lg flex items-center justify-center mr-3 input-shadow'>
                    <FaAngleLeft className='text-base' />
                </button>

                <button className='w-9 h-9 bg-black rounded-full flex items-center justify-center mr-2 input-shadow'>
                    <LuLocateFixed className='text-base text-white' />
                </button>
            </div>

            {/* Bottom Centered Text */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center flex-col">
                <div className="bg-white max-w-[800px] w-full rounded-t-2xl boxshadowOne">
                    {/* header  */}
                    <div className='text-xl text-center font-semibold p-2 border-b border-black border-opacity-10'>
                        {t('yourlocation')}
                    </div>

                    <div className='px-2 pt-10 pb-2'>
                        <button className='h-11 w-full bg-black text-sm capitalize mt-5 text-white flex items-center justify-center rounded font-medium gap-2'>
                            <FaLocationDot />
                            {t('setdeliverylocation')}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceArea;
