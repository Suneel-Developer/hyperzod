import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import MobileNavigation from '../../components/MobileNavigation';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="flex flex-col">
            <div className='hidden lg:block'><Header /></div>
            <MobileNavigation />

            <div className='max-w-[1220px] w-full mx-auto flex gap-20 py-0 lg:py-20'>
                <div className='w-full lg:w-[320px]'>
                    <ProfileSidebar />
                    <ul className="flex lg:hidden flex-col gap-7 px-4 my-10">
                        {[
                            { text: 'About Us', path: '#' },
                            { text: 'Contact Us', path: '#' },
                            { text: 'Merchant Sign Up', path: '#' },
                            { text: 'Driver Sign Up', path: '#' },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="text-[#000000DE] font-semibold text-sm">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex-1 hidden lg:flex'></div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
