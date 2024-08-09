"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';


function Header() {

    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (

        <div>
            <header className="bg-[#291D5D] text-white ">
                <nav className="container mx-auto flex justify-between items-center px-16 py-8">
                    <div className="flex items-center">
                        <Link href="#">
                            <Image src="/logo/Logo.png" alt="Logo" width={100} height={50} />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6 text-xl">
                        <Link href="#schedule" className="hover:underline">Schedule</Link>
                        <Link href="#speakers" className="hover:underline">Speakers</Link>
                        <Link href="#tickets" className="hover:underline">Tickets</Link>
                        <Link href="#contact" className="hover:underline">Contact</Link>
                        <button className="border border-white hover:bg-white hover:text-purple-900 text-white text-xl py-0.5 px-4 rounded-full">
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
                        <ul className="flex flex-col items-center space-y-4 py-4 text-xl">
                            <li><Link href="#schedule">Schedule</Link></li>
                            <li><Link href="#speakers">Speakers</Link></li>
                            <li><Link href="#tickets">Tickets</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                            <button className="border border-white hover:bg-white hover:text-purple-900 text-white text-xl py-0.5 px-4 rounded-full">
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