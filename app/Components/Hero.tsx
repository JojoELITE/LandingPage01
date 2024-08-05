import React from 'react'
import { Calendar } from 'lucide-react';

import { Play } from 'lucide-react';
import { MapPin } from 'lucide-react';



function Hero() {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row justify-between p-10'>

      <div className=''>
        <div className='flex gap-2 items-center'>
          <div className="border-b-2 border-[#FEAE37] w-10 my-2">
          </div>
          <h5 className='font-bold'>2024</h5>
        </div>

        <div>
          <h1 className="sm:text-6xl md:text-4xl lg:text-3xl font-bold">
            LA CONFÉRENCE <br />POUR LES STARTUPS <br />GABONAISE</h1>
        </div>

        <div className=''>
        <p className="sm:text-[6px] md:text-[8px] lg:text-[px]">
            La Conférence sur les technologies numériques 2024 célèbre l'innovation et <br /> les startups dans les nouvelles technologies. Sauvez les moments pour <br /> vous engager et réseauter comme jamais.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 mt-8 border border-[#B82078] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full ">
              <Play className='mt-0.5 ml-0.5' color="black" size={8} />
            </div>

          </div>

          <div className='text-[8px] mt-8 '>
            Regarder le teaser
          </div>
        </div>


      </div>








      <div className='bg-[#FEDE00] rounded-lg p-12  text-center	'>
        <p className='text-[12px] text-black '>Evénement à venir 2024</p>
        <h6 className='text-[14px] text-black font-bold '>Digital Technologies</h6>

        <div className="border-b-2 border-white m-3">
        </div>


        <div className='text-center'>

          <div className='flex items-center gap-2'>

            <MapPin color="black" size={20} />


            <h6 className='text-xs text-black'>
              ABC Mail Libreville
            </h6>
          </div>

          <div className='flex items-center gap-2 mt-1'>

            <Calendar color="black" size={20} />

            <h6 className='text-xs text-black'>
              22-24 March 2024
            </h6>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Hero;
