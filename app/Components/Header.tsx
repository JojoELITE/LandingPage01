"use client";

import React, { useState } from 'react'
import Image from 'next/image';

function Header() {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar = (): void => {
        setisClick(!isClick);
    }

    return (

        <nav className='flex justify-between p-10 cursor-pointer'>

            <div>
                <Image
                    src="/logo/Logo.png"
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </div>


            <div className='hidden md:block'>
                <div className='ml-4 flex items-center space-x-4'>

                    <ul className='flex gap-6 text-sm'>
                        <li className=''>Schedule</li>
                        <li className=''>Speakers</li>
                        <li className=''>Ticket</li>
                        <li className=''>Contact</li>
                    </ul>

                </div>

            </div>






            <div className='md:hidden '>

                <button className='inline-flex items-center  p-2 ' onClick={toggleNavbar}>
                    {isClick ? (

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            fill="none" stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-x">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>

                    ) : (

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-square-menu">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M7 8h10" />
                            <path d="M7 12h10" />
                            <path d="M7 16h10" />
                        </svg>

                    )}
                </button>

            </div>

            {
                isClick && (
                    <div className='md:hidden'>
                        <ul className=' block text-sm py-20'>
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

        </nav>



    )
}

export default Header