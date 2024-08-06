import React from 'react'
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
    return (
        <div className='p-10 bg-white'>

            <div className='flex justify-between'>

                <div className=''>
                    <h2 className="text-xl font-bold  text-black">PRÊT À COMMENCER</h2>
                    <p className='text-black text-[8px] '>Si vous souhaitez poser des questions, nous <br />répondrons à toutes vos questions</p>

                    <div className='flex items-center gap-2 bg-blue-100 mt-2 rounded-full'>
                        <div>

                            <input className='rounded-full mb-1 ml-1 text-[8px] bg-blue-100 py-1 px-2 border-none focus:outline-none text-black w-full' type="text" id="email" name="email" placeholder='Entrez votre email' />

                        </div>
                        <div className='rounded-full bg-pink-500 w-4 h-4'>
                            <ChevronRight className='ml-0.5' size={14} />
                        </div>
                    </div>

                    <div className='flex  relative items-center rounded-full gap-2 mt-4 '>
                        <Facebook color="black" size={12} />
                        <Instagram color="black" size={12}  />
                        <Twitter color="black" size={12} />

                    </div>

                </div>



                <div className='text-black'>
                    <p className='text-xs font-bold'>Peut-être sue votre question a <br />trouvé une réponse. vérifiez ceci.</p>

                    <div className='flex items-center gap-36 py-4'>
                        <p className='text-xs'>Qu'est-ce qu'Eventi</p>
                        <Link href="#" >
                            <ChevronRight className='ml-0.5' size={14} />

                        </Link>
                    </div>

                    <div className='flex items-center gap-36 '>
                        <p className='text-xs'>Qu'est-ce qu'Eventi</p>
                        <Link href="#" >
                            <ChevronRight className='ml-0.5' size={14} />

                        </Link>
                    </div>


                    <div className='flex items-center gap-36 py-4'>
                        <p className='text-xs'>Qu'est-ce qu'Eventi</p>
                        <Link href="#" >
                            <ChevronRight className='ml-0.5' size={14} />

                        </Link>
                    </div>
                </div>

            </div>

            <div className="border-b-2 border-gray-200 "></div>

            <div className='flex justify-between py-6'>
                <p className='text-black text-[8px]'>® 2024. Eventi, Tous droits réservés</p>
                <p className='text-black text-[8px]'>politiques de confidentialité Term & Condition</p>

            </div>
        </div>


    )
}

export default Footer;