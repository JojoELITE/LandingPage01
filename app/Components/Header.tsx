"use client";

import React, { useState } from 'react'
import { X } from 'lucide-react';
import { SquareMenu } from 'lucide-react';

import Image from 'next/image';

function Header() {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar = (): void => {
        setisClick(!isClick);
    }

    return (

        <nav className=' flex justify-between p-10 cursor-pointer sticky top-0 z-50'>

            <div>
                <Image
                    src="/logo/Logo.png"
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </div>


            <div className='hidden sm:flex gap-6'>
                <div className='ml-4 flex items-center space-x-4'>

                    <ul className="flex space-x-6">
                        <li><a href="#schedule" className="hover:underline">Schedule</a></li>
                        <li><a href="#speakers" className="hover:underline">Speakers</a></li>
                        <li><a href="#tickets" className="hover:underline">Tickets</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>

                </div>

                <button className="border border-white hover:bg-white hover:text-[#291D5D] text-white text-sm py-0.5 px-4 rounded-full">
                    Contact
                </button>

            </div>


            <div className='md:hidden '>

                <button className='inline-flex  items-center p-2' onClick={toggleNavbar}>
                    {isClick ? (

                        <X className='ml-8 ' />


                    ) : (

                        <SquareMenu />


                    )}
                </button>


                {
                    isClick && (
                        <div className='md:hidden mt-6'>
                            <ul className=' text-sm'>
                                <li className=''>Schedule</li>
                                <li className=''>Speakers</li>
                                <li className=''>Ticket</li>
                                <li className=''>Contact</li>
                            </ul>

                            <button className="border border-white hover:bg-white hover:text-[#291D5D] text-white text-sm py-0.5 px-4 rounded-full">
                                Contact
                            </button>

                        </div>

                    )}

            </div>


        </nav>



    )
}

export default Header