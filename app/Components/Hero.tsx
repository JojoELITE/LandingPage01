import React from 'react';
import Link from 'next/link';
import { Calendar, Play, MapPin } from 'lucide-react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/spek3.jpg",
  "/assets/spek4.jpg",

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
    <main className="relative container mx-auto px-16 py-10 lg:py-52">
      <section className=" flex flex-col md:flex-row items-center justify-between bg-cover bg-no-repeat">

        <div className="absolute inset-0 h-full w-full z-[-1] overflow-hidden">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="h-full relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full  h-[700px] lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative z-10 md:w-1/2">
          <div className='flex gap-2 items-center'>
            <div className="border-b-2 border-[#FEAE37] w-10 my-2"></div>
            <h5 className='font-bold text-2xl text-white'>2024</h5>
          </div>
          <h1 className="text-xl lg:text-4xl font-bold text-white ">
            LA CONFÉRENCE <br />POUR LES STARTUPS GABONAISE
          </h1>
          <p className="text-white text-sm lg:text-xl mt-4">
            La Conférence sur les technologies émergentes 2024 aborde la tendance et
            les meilleures techniques de nouvelle génération. Sauvez votre invitation pour
            apprendre l'avenir imminent et actuel.
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

        <div className="relative z-10 md:w-1/3  rounded-lg text-white text-center">
          <p className=" text-sm lg:text-xl">Evénement à venir 2024</p>
          <h6 className=" text-sm lg:text-xl font-bold">Digital Technologies</h6>
          <div className="border-b-2 border-white my-2 lg:my-5 w-[50%] ml-14 lg:ml-28"></div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <MapPin color="white" size={20} />
              <h6 className="">ABC Mail Libreville</h6>
            </div>
            <div className="flex items-center gap-2 mt-1 justify-center">
              <Calendar color="white" size={20} />
              <h6 className="">22-24 March 2024</h6>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero;
