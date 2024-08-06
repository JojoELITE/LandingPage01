import React from 'react'
import Image from 'next/image';

import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';





function Speakers() {
    return (
        <div className='bg-[#1D1E25]'>

            <div>
                <div className=' text-center py-6'>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                    <h2 className="text-xl font-bold ">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                    <p className="mt-2  text-[6px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, esse nam nostrum <br />dolor veniam placeat sit blanditiis brarchitecto qui vero odio cumque vitae <br /> minima laudantium rem id? Labore, sapiente recusandae.
                    </p>

                </div>
            </div>

            <div className='flex justify-between flex-col sm:flex-row md:flex-row p-10'>
                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>

                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

            </div>

            <div className='flex justify-between flex-col sm:flex-row md:flex-row p-10'>
            <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>

                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

                <div>
                    <Image
                        className='absolute'
                        src="/assets/photo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />

                    <div className='flex w-14 relative items-center rounded-full bg-gray-400 ml-5 px-2 gap-1 mt-20 '>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <Linkedin />

                    </div>


                    <div className=''>
                        <p className='text-xs'>Cheline Agustine</p>
                        <p className='text-[6px]'>Product Designer at Facebook</p>
                    </div>
                </div>

            </div>

            <div className='flex justify-center '>
                <button className="border border-white hover:bg-white hover:text-[#291D5D] text-white text-sm py-0.5 px-4 rounded-full">
                    Contact
                </button>
            </div>



        </div>
    )
}

export default Speakers;