"use client";

import Image from 'next/image';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';


function Header() {

    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => {
      setIsClick(!isClick);
    };

    return (
        
        <div>
            <header className="bg-[#291D5D] text-white ">
                <nav className="container mx-auto flex justify-between items-center p-12">
                    <div className="flex items-center">
                        <Image src="/logo/Logo.png" alt="Logo" width={100} height={50} />
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#schedule" className="hover:underline">Schedule</a>
                        <a href="#speakers" className="hover:underline">Speakers</a>
                        <a href="#tickets" className="hover:underline">Tickets</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                        <button className="border border-white hover:bg-white hover:text-purple-900 text-white text-sm py-0.5 px-4 rounded-full">
                            Contact
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button className="inline-flex items-center p-2" onClick={toggleNavbar}>
                            {isClick ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
                {isClick && (
                    <div className="md:hidden bg-[#291D5D]">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            <li><a href="#schedule">Schedule</a></li>
                            <li><a href="#speakers">Speakers</a></li>
                            <li><a href="#tickets">Tickets</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <button className="border border-white hover:bg-white hover:text-purple-900 text-white text-sm py-0.5 px-4 rounded-full">
                                Contact
                            </button>
                        </ul>
                    </div>
                )}
            </header>

        </div>


    )
}

export default Header