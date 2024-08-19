import React, { useState } from 'react';
import Asap from "../../assets/asap.svg";
import CalenderIcon from "../../assets/calender-icon.svg";
import { IoMdClose } from "react-icons/io";

const ScheduleOrder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const days = [
        { date: '19', day: 'Monday', month: 'Aug' },
        { date: '20', day: 'Tuesday', month: 'Aug' },
        { date: '21', day: 'Wednesday', month: 'Aug' },
        { date: '22', day: 'Thursday', month: 'Aug' },
        { date: '23', day: 'Friday', month: 'Aug' }
    ];

    const timeSlots = [
        '12:00 - 12:30', '12:30 - 01:00', '01:00 - 01:30', '01:30 - 02:00',
        '02:00 - 02:30', '02:30 - 03:00', '03:00 - 03:30', '03:30 - 04:00',
        '04:00 - 04:30', '04:30 - 05:00', '05:00 - 05:30', '05:30 - 06:00',
        '06:00 - 06:30', '06:30 - 07:00', '07:00 - 07:30', '07:30 - 08:00',
        '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30', '09:30 - 10:00'
    ];

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleDaySelect = (index) => {
        setSelectedDay(index);
        setSelectedSlot(null); 
    };

    const handleTimeSelect = (time) => {
        setSelectedSlot(time);
    };

    const handleProceedToCheckout = () => {
        if (selectedSlot) {
            const selectedDate = `${days[selectedDay].day}, ${days[selectedDay].month} ${days[selectedDay].date}`;
            setSelectedTime(`${selectedDate} at ${selectedSlot}`);
            setIsToggled(true);
            setIsModalOpen(false);
        }
    };

    return (
        <div className='flex justify-between mt-8'>
            <div>
                <h2 className='text-base font-semibold'>Schedule Order</h2>
                {isToggled ? (
                    <div className='hidden lg:flex items-center gap-2 mt-5 text-sm font-medium text-[#0671E3] uppercase cursor-pointer'>
                        <img src={CalenderIcon} alt="CalenderIcon" />
                        {selectedTime}
                    </div>
                ) : (
                    <div className='hidden lg:flex items-center gap-2 mt-5 text-sm font-medium'>
                        <img src={Asap} alt="Asap" />
                        ASAP delivery
                        <p className='text-[#A8A29E]'>(30 mins)</p>
                    </div>
                )}
            </div>

            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only"
                    onChange={toggleModal}
                    checked={isToggled}
                />
                <div
                    className={`w-14 h-8 rounded-full shadow-inner ${isToggled ? 'bg-blue-500 bg-opacity-70' : 'bg-black-100'}`}
                ></div>
                <div
                    className={`absolute w-6 h-6 bg-white rounded-full transform transition-transform  mx-1 ${isToggled ? 'translate-x-6' : ''}`}
                ></div>
            </label>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-[12%] z-50 flex justify-center items-center">
                    <div className="bg-white lg:relative fixed bottom-0 lg:bottom-auto lg:rounded-md w-full max-w-[600px]">
                        <div className="flex justify-between items-center py-2 px-4">
                            <h3 className="text-xl font-semibold text-[#000000DE] leading-10">Select Date</h3>
                            <button onClick={toggleModal} className="h-7 px-4 flex items-center justify-center rounded bg-[#eee]"><IoMdClose /></button>
                        </div>

                        <div className='px-4 leading-6 text-sm text-[#000000DE]'>Choose a date for order scheduling</div>

                        {/* Days Tabs */}
                        <ul className='px-3 md:px-6 py-1 flex overflow-x-auto gap-4 boxscrollbar2'>
                            {days.map((day, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleDaySelect(index)}
                                    className={`min-w-[86px] w-[86px] py-3 px-1 flex flex-col items-center cursor-pointer rounded transition-all duration-500 ${selectedDay === index ? 'bg-[#e6f1fc] border border-[#4494ea]' : 'hover:bg-[#E0E0E0] border border-transparent'}`}
                                >
                                    <h3 className='uppercase text-sm font-medium'>{day.month}</h3>
                                    <h3 className='text-lg font-semibold leading-7'>{day.date}</h3>
                                    <h3 className='uppercase text-xs font-medium'>{day.day}</h3>
                                </li>
                            ))}
                        </ul>

                        {/* Time Slots */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#000000DE] px-4 pt-2 pb-3">Select Time Slot</h3>
                            <div className='px-3 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 h-[197px] overflow-y-auto boxscrollbar2'>
                                {timeSlots.map((time, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTimeSelect(time)}
                                        className={`px-4 h-9 rounded font-medium border border-[#e0e0e0] text-sm flex items-center justify-center transition-colors duration-500 ${selectedSlot === time ? 'bg-[#e6f1fc]' : 'hover:bg-[#eee] hover:bg-opacity-60'}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Proceed to Checkout Button */}
                        <div className='pt-9 px-2 pb-6 bg-white sticky bottom-0 w-full'>
                            <button
                                onClick={handleProceedToCheckout}
                                className='bg-[#0B1223] px-3 text-center text-white text-base font-semibold uppercase w-full h-11 rounded transition-all duration-500 hover:bg-opacity-90'
                                disabled={!selectedSlot}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleOrder;
