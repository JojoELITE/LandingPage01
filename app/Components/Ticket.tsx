import React from 'react'

import { SquareMenu } from 'lucide-react';


function Ticket() {
    return (
        <div className='bg-blue-200'>
            <div className=' text-center py-6'>
                <h6 className='text-[8px] mt-4 text-[#FD2284]'>CHOISISSEZ UN TICKET</h6>
                <h2 className="text-xl font-bold  text-black">OBTENEZ VOTRE BILLET ICI</h2>

            </div>

            <div className='flex p-10'>
                <div>
                    <div className='border-4 border-white bg-red-100 rounded-lg text-center w-2/3'>
                        <div className=''>
                            <div className=''>
                                <button className="bg-pink-100 hover:bg- hover:text- text-pink-500 text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-white rounded-lg p-3 w-2/3'>
                            <p className='text-[8px] text-black w-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-[#FD2284] hover:bg- hover:text-white text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className='border-4 border-white bg-red-100 rounded-lg text-center w-2/3'>
                        <div className=''>
                            <div className=''>
                                <button className="bg-pink-100 hover:bg- hover:text- text-pink-500 text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-white rounded-lg p-3 w-2/3'>
                            <p className='text-[8px] text-black w-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-[#FD2284] hover:bg- hover:text-white text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className='border-4 border-white bg-red-100 rounded-lg text-center w-2/3'>
                        <div className=''>
                            <div className=''>
                                <button className="bg-pink-100 hover:bg- hover:text- text-pink-500 text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-white rounded-lg p-3 w-2/3'>
                            <p className='text-[8px] text-black w-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-[#FD2284] hover:bg- hover:text-white text-xs py-0.5 px-4 rounded-full">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div>
                <div className=' text-center py-6'>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>Nos sponsors</h6>
                    <h2 className="text-xl font-bold  text-black">PLUS DE 100 SPONSORS D'UNE GRANDE ENTREPRISE</h2>

                </div>

                <div className='flex justify-center p-10 gap-16  '>
                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                </div>


                <div className='flex justify-center gap-10'>
                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                </div>
            </div>





        </div>
    )
}

export default Ticket;