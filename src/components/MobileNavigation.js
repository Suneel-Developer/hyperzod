import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "../assets/h-icon.svg";
import SearchIcon from "../assets/s-icon.svg";
import CartIcon from "../assets/c-icon.svg";
import ProfileIcon from "../assets/p-icon.svg";

const MobileNavigation = () => {
    const location = useLocation();

    const navItems = [
        { to: "/home", label: "Home", icon: HomeIcon },
        { to: "/search", label: "Search", icon: SearchIcon },
        { to: "/checkout", label: "Cart", icon: CartIcon },
        { to: "/profile", label: "Account", icon: ProfileIcon }
    ];

    const getLinkClasses = (path) => {
        return location.pathname === path ? 'text-black opacity-100' : 'text-[#919191] opacity-50';
    };

    return (
        <nav className='bg-white h-[70px] fixed bottom-0 w-full lg:hidden z-40 flex justify-around items-center gap-4'>
            {navItems.map(({ to, label, icon }) => (
                <Link key={to} to={to} className='flex flex-col items-center gap-[6px]'>
                    <img src={icon} alt={label} className={`w-[19px] h-[19px] transition-opacity duration-200 ${getLinkClasses(to)}`} />
                    <p className={`text-[10px] uppercase font-medium ${getLinkClasses(to)}`}>
                        {label}
                    </p>
                </Link>
            ))}
        </nav>
    );
};

export default MobileNavigation;
