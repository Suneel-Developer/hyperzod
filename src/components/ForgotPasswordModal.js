import React, {useState, useEffect, useRef} from 'react'
import CloseIcon from "../assets/close.svg";
import { useTranslation } from 'react-i18next';

const ForgotPasswordModal = ({ onClose }) => {
    const { t } = useTranslation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputsRef = useRef([]);

    useEffect(() => {
        const allFilled = otp.every(val => val.length === 1);
        if (allFilled) {
            inputsRef.current[3].focus(); // Focus on the last input when all are filled
        }
    }, [otp]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < otp.length - 1 && value) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const isButtonActive = otp.every(val => val.length === 1);

    return (
        <div>
            <div
                className='fixed top-0 right-0 w-[550px] h-full bg-white z-50 transition-transform duration-300 transform translate-x-0 p-4'
            >
                {/* Close Icon */}
                <div className='flex justify-end w-full pb-4'>
                    <button
                        className='w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[#e7e6e6bf]'
                        onClick={onClose}
                    >
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                {/* Form */}
                <form>
                    <h1 className='text-4xl font-semibold mt-3 mb-1 capitalize'>
                        {t('forgotpassword')}
                    </h1>

                    <p className='text-[#918d8d] text-sm text-center mt-3'>
                        {t('forgotasswordtext')}
                    </p>

                    <p className='text-base font-semibold mt-2 text-center'>
                        xyzzz@gmail.com
                    </p>

                    {/* OTP pasword  */}

                    <div>
                        <div className='flex items-center justify-center gap-2 mt-6'>
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={value}
                                    maxLength={1}
                                    className={`max-h-[46px] text-center py-2 text-black text-opacity-85 text-3xl font-bold max-w-[62px] w-full border-b outline-none ${index === 0 ? 'border-b-opacity-50' : 'border-b-opacity-100'
                                        } border-black transition-all`}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => inputsRef.current[index] = el}
                                />
                            ))}
                        </div>


                        <p className='text-[#918d8d] text-sm text-right mt-10'>{t('resend')} OTP 25s</p>
                        {/* <p className='text-black uppercase font-bold underline text-sm text-right mt-10'>{t('resend)} OTP</p> */}

                        
                        <button
                            type="submit"
                            className='h-[52px] px-5 text-center text-base capitalize rounded-lg mt-12 w-full font-medium transition-colors duration-300'
                            style={{
                                backgroundColor: isButtonActive ? '#0b1223' : 'rgba(0,0,0,.12)',
                                color: isButtonActive ? '#ffffff' : 'rgba(0,0,0,.26)',
                            }}
                        >
                            {t('verifynow')}
                        </button>
                    </div>
                </form>
            </div>

            {/* Overlay */}
            <div
                className='fixed top-0 left-0 w-full h-screen bg-[#212121] bg-opacity-[0.46] z-40'
                onClick={onClose}
            />
        </div>
    )
}

export default ForgotPasswordModal