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

        /*   <div className='bg-[#291D5D] container p-10'>
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
   
               <Hero />
   
           </div>*/


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