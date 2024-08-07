import React from 'react'
import Link from 'next/link';

import { Quote } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';


function Testimony() {
    return (
        <div className='p-20 bg-white flex'>
            <div>
                <div className=''>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>CE QUE DISENT NOS INTERNAUTES</h6>
                    <h2 className="text-xl font-bold  text-black">QUE DISENT LES GENS ?</h2>
                </div>

                <div className='py-2'>
                    <Quote className='mt-0.5 ml-0.5' color="black" size={8} />
                    <p className='text-black font-bold text-[8px]'>Excellents Speakers Ambiance conviviale</p>
                </div>

                <div>
                    <p className='text-black text-[8px] w-1/3 py-1'>
                        "Excellente année, des talks très sympathiques, ambiance de Charme, intervention des membres de l'industrie et de leaders du marché. Il n'y a simplement pas de futur possible sans ce rendez-vous chaque année !"
                    </p>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-gray-500 w-5 h-5'></div>
                    <div className='text-black'>
                        <p className='text-[8px] font-bold'>Stevano Gonzoles</p>
                        <p className='text-[8px]'>Product Manager oh Google</p>
                    </div>
                </div>

                <div className='flex gap-1'>
                    <Link href="#">
                        <MoveLeft className='' color="gray" size={16} />
                    </Link>

                    <Link href="#">
                        <MoveRight color="pink" size={16} />
                    </Link>
                </div>


            </div>

            <div className='text-black'>IMAGE</div>
        </div>
    )
}

export default Testimony;