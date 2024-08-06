import React from 'react'

import { SquareMenu } from 'lucide-react';


function Ticket() {
    return (
        <div className='bg-blue-200'>
            <div className=' text-center py-6'>
                <h6 className='text-[8px] mt-4 text-[#FD2284]'>CHOISISSEZ UN TICKET</h6>
                <h2 className="text-xl  text-black">OBTENEZ VOTRE BILLET ICI</h2>

            </div>

            <div className='flex p-10 gap-6'>
                <div className='w-1/3'>
                    <div className='border-4 border-white bg-blue-100 rounded-lg text-center p-6'>
                        <div className=''>
                            <div className=''>
                                <button className="bg-pink-50 hover:bg- hover:text- text-pink-500 text-xs py-0.5 px-4 rounded-full">
                                    Classique
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-white rounded-lg p-3'>
                            <p className='text-[8px] text-black w-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-[#FD2284] hover:bg- hover:text-white text-xs py-0.5 px-4 rounded-full mt-2">
                                    Obtenir un billet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-1/3'>
                    <div className='border-4 border-white bg-blue-100 rounded-lg text-center p-6 '>
                        <div className=''>
                            <div className=''>
                                <button className="bg-orange-500 hover:bg- hover:text- text-xs py-0.5 px-4 rounded-full">
                                    Premium
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-indigo-500 rounded-lg p-3'>
                            <p className='text-[8px] text-black w-'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-white  text-indigo-500 text-xs py-0.5 px-4 rounded-full mt-2">
                                    Obtenir un billet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-1/3'>
                    <div className='border-4 border-white bg-red-100 rounded-lg text-center p-6'>
                        <div className=''>
                            <div className=''>
                                <button className="bg-blue-100 hover:bg- hover:text- text-indigo-500 text-xs py-0.5 px-4 rounded-full">
                                    VIP
                                </button>
                            </div>
                            <h2 className="text-xs font-bold  text-black">5.000FCFA</h2>
                        </div>

                    </div>


                    <div>
                        <div className='bg-white rounded-lg p-3'>
                            <p className='text-[8px] text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturiv excepturi excepturi excepturi,Magni, repellendus?</p>
                            <div className='flex justify-center py-2'>
                                <button className="bg-[#FD2284] hover:bg- hover:text-white text-xs py-0.5 px-4 rounded-full mt-2">
                                    Obtenir un billet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div>
                <div className=' text-center py-6'>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>Nos sponsors</h6>
                    <h2 className="text-xl  text-black">PLUS DE 100 SPONSORS D'UNE GRANDE ENTREPRISE</h2>

                </div>

                <div className='flex  justify-center gap-16 text-xs '>
                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>codecanyon</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>graphicriver</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>photodune</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>themeforest</p>
                    </div>

                </div>


                <div className='flex justify-center gap-10 text-xs p-10'>
                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>videohive</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>codecanyon</p>
                    </div>

                    <div className='flex items-center'>
                        <SquareMenu />
                        <p className='text-black'>themeforest</p>
                    </div>

                </div>
            </div>





        </div>
    )
}

export default Ticket;