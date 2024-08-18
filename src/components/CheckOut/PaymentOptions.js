import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StripeLogo from "../../assets/stripe-logo.svg";
import PayOnDelivery from "../../assets/pay-on-delivery.svg";
import BankDeposit from "../../assets/bank-deposit.svg";
import Kiapay from "../../assets/kiapay.svg";

const paymentMethods = [
    { id: 'stripe', label: 'Stripe', image: StripeLogo },
    { id: 'payOnDelivery', label: 'Pay On Delivery', image: PayOnDelivery },
    { id: 'bankDeposit', label: 'Bank Deposit', image: BankDeposit },
    { id: 'kiapay', label: 'Kiapay', image: Kiapay },
];

const PaymentOptions = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div className='lg:border border-black border-opacity-[12%] mb-7 px-4 lg:px-5 pt-4 rounded-lg pb-10'>
            <h3 className='text-lg font-semibold mb-7'>{t('Payment Method')}</h3>
            <ul>
                {paymentMethods.map(({ id, label, image }) => (
                    <li
                        key={id}
                        className={`py-[13px] lg:px-[15px] lg:border border-black border-opacity-[12%] rounded-md cursor-pointer lg:my-2 flex items-center gap-3 ${selectedOption === id ? 'bg-[#E5E7EB]' : ''}`}
                        onClick={() => setSelectedOption(id)}
                    >
                        <div className='w-[50px] h-[50px] rounded-lg border border-black border-opacity-[12%] flex items-center justify-center overflow-hidden'>
                            <img src={image} alt={label} />
                        </div>
                        <p className="flex-1 font-medium text-sm text-black text-opacity-60">{t(label)}</p>
                        <input
                            type="radio"
                            checked={selectedOption === id}
                            readOnly
                            id='specifyColor'
                            className="mr-2 w-5 h-5 cursor-pointer"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentOptions;
