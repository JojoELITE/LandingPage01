import React from 'react'
import Link from 'next/link';
import { Calendar } from 'lucide-react';

import { Play } from 'lucide-react';
import { MapPin } from 'lucide-react';



function Hero() {
  return (
    <main className="container mx-auto bg-[#291D5D] p-12">
      <section className="flex flex-col md:flex-row items-center justify-between py-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className='flex gap-2 items-center'>
            <div className="border-b-2 border-[#FEAE37] w-10 my-2">
            </div>
            <h5 className='font-bold text-2xl'>2024</h5>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            LA CONFÉRENCE <br />POUR LES STARTUPS <br />GABONAISE
          </h1>
          <p className="text-white text-[18px] mt-4">
            La Conférence sur les technologies émergentes 2024 aborde la tendance et
            les meilleures techniques de nouvelle génération. Sauvez votre invitation pour
            apprendre l'avenir imminent et actuel.
          </p>

          <Link href="#" className="flex items-center gap-2">
            <div className="w-5 h-5 mt-8 border border-[#B82078] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full ">
                <Play className='mt-0.5 ml-0.5' color="black" size={8} />
              </div>

            </div>

            <div className='mt-8 '>
              Regarder le teaser
            </div>
          </Link>
        </div>

        <div className="md:w-1/3 bg-[#FEDE00] rounded-lg p-8 text-center">
          <p className=" text-black text-xl">Evénement à venir 2024</p>
          <h6 className=" text-black text-xl font-bold">Digital Technologies</h6>
          <div className="border-b-2 border-white my-3 mx-3 w-[80%] ml-8"></div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <MapPin color="black" size={20} />
              <h6 className=" text-black">ABC Mail Libreville</h6>
            </div>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <Calendar color="black" size={20} />
              <h6 className=" text-black">22-24 March 2024</h6>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Hero;
