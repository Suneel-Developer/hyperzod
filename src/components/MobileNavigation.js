import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiHouseSimple, PiHandbagSimple } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const MobileNavigation = () => {
    const location = useLocation();

    const navItems = [
        { to: "/home", label: "Home", icon: <PiHouseSimple className="text-base" /> },
        { to: "/search", label: "Search", icon: <RiSearchLine className="text-base" /> },
        { to: "/checkout", label: "Cart", icon: <PiHandbagSimple className="text-base" /> },
        { to: "/profile", label: "Account", icon: <FiUser className="text-base" /> }
    ];

    const getLinkClasses = (path) => {
        return location.pathname === path ? 'text-black' : 'text-[#919191]';
    };

    return (
        <nav className='bg-white h-[70px] fixed bottom-0 w-full lg:hidden z-40 flex justify-around items-center gap-4'>
            {navItems.map(({ to, label, icon }) => (
                <Link key={to} to={to} className='flex flex-col items-center gap-[6px]'>
                    <div className={getLinkClasses(to)}>{icon}</div>
                    <p className={`text-[10px] uppercase font-medium ${getLinkClasses(to)}`}>
                        {label}
                    </p>
                </Link>
            ))}
        </nav>
    );
};

export default MobileNavigation;
