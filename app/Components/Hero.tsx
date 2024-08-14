import React from 'react';
import Link from 'next/link';
import { Calendar, Play, MapPin } from 'lucide-react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const hero = [

  {

    titre: 'LA CONFÉRENCE POUR LES STARTUPS GABONAISES',
    soustitre: 'La Conférence sur les technologies émergentes 2024 aborde la tendance et les meilleures techniques de nouvelle génération. Sauvez votre invitation pour apprendre de votre avenir imminent et actuel.',

  },


];


function Hero() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <main className="bg-[#291D5D]  container mx-auto px-16 py-10 lg:py-32">
      <section className=" flex flex-col md:flex-row items-center justify-between bg-cover bg-no-repeat">


        <div className="relative z-10 md:w-1/2">

          <div className="">
            {hero.map((hero) => (
              <div>


                <div className='flex gap-2 items-center'>
                  <div className="border-b-2 border-[#FEAE37] w-10 my-2"></div>
                  <h5 className='font-bold text-2xl text-white'>2024</h5>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-6xl font-sans font-medium text-white">
                  {hero.titre}
                </h1>

                <p className="text-white text-sm lg:text-xl  mt-5">
                  {hero.soustitre}
                </p>



                <Link href="https://youtube.com/" className="flex items-center gap-2">
                  <div className="w-5 h-5 mt-8 border border-[#B82078] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full ">
                      <Play className='mt-0.5 ml-0.5' color="black" size={8} />
                    </div>
                  </div>
                  <div className='mt-8 text-[18px] text-white'>
                    Regarder le teaser
                  </div>
                </Link>


              </div>


            ))}
          </div>


        </div>


        <div className="w-full md:w-1/2 lg:w-[25%]  bg-[#FEDE00] p-5 lg:p-8 rounded-lg text-white text-center mt-10 lg:mt-0">
          <p className=" text-sm lg:text-xl text-black">Evénement à venir 2024</p>
          <h6 className=" text-sm lg:text-xl font-bold text-black">Digital Technologies</h6>
          <div className="border-b-2 border-gray-50 my-2 lg:my-5 ml-14 lg:ml-0"></div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <MapPin color="black" size={20} />
              <h6 className="text-black">ABC Mail Libreville</h6>
            </div>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <Calendar color="black" size={20} />
              <h6 className="text-black">22-24 March 2024</h6>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Hero;
