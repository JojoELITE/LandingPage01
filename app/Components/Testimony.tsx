import React from 'react'

import { Play } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';


function Testimony() {
    return (
        <div className='p-10 bg-white flex'>
            <div>
                <div className=''>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                    <h2 className="text-sm font-bold  text-black">QUE DISENT LES GENS ?</h2>
                </div>

                <div className='flex'>
                    <Play className='mt-0.5 ml-0.5' color="black" size={8} />
                    <p className='text-black font-bold text-[8px]'>Excellents Speakers Ambiance conviviale</p>
                </div>

                <div>
                    <p className='text-black text-[8px] w-1/3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium, consectetur illo, commodi deleniti aut fugit quaerat nihil nemo iusto dolorem sint!"</p>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-gray-500 w-10 h-10'></div>
                    <div className='text-black'>
                        <p className='text-[8px] font-bold'>Stevano Gonzoles</p>
                        <p className='text-[8px]'>Product Manager oh Google</p>
                    </div>
                </div>

                <div className='flex gap-1'>
                    <MoveLeft className='' color="gray" size={16} />
                    <MoveRight  color="pink" size={16}/>
                </div>


            </div>

            <div className='text-black'>IMAGE</div>
        </div>
    )
}

export default Testimony;