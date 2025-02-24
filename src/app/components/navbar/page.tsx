"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Router = useRouter();
    const menuItems = [
        { title: 'Overview', href: '/components/overview' },
        { title: 'Partners', href: '/components/sponsers' },
        { title: 'Guidelines', href: '/components/guidelines' },
        {title:"Legacy",href:"/components/legacy"},
        { title: 'News', href: '/components/news' },
        
    ];

    return (
        <nav className="h-[10vh] mt-4 text-white relative z-50">
            <div className="max-w-7xl font-manrope mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex justify-start items-center flex-shrink-0">
                       <img src='/1.png' onClick={(e)=>Router.push("/")} className='cursor-pointer w-[8rem] h-[8rem]'></img>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center w-[80%] justify-between">
                        <div className='w-[60%] ml-[3.5%] flex justify-between'>
                            {menuItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="text-white text-[1.5rem] font-bold font-inter hover:text-blue-700 transition-colors duration-200"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div className='w-[30%]'>
                            <button onClick={(e)=>Router.push("/Register")} className="bg-white text-black flex items-center justify-center  font-bold ml-[5rem]  text-[1.3rem] px-14 py-2 rounded-md hover:bg-gray-500 transition-colors duration-200">
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center bg-white text-black justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-5 text-white"
                    >
                        <X className="h-8 w-8" />
                    </button>

                    {/* Mobile Menu Links */}
                    <div className="space-y-4 text-center">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="block text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <button className="mt-6 bg-white text-black text-xl font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
                            Register
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
