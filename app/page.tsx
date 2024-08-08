"use client";

import Hero from './Components/Hero';
import EventInfo from "./Components/EventInfo";
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';
import Contact from './Components/Contact';
import Sponsors from './Components/Sponsors';
import Testimony from './Components/Testimony';
import Ticket from './Components/Ticket';


export default function Home() {


  const data = [
    {
      name: `Jean Pierre`,
      img: `/assets/photo.png`,
      review: `lorem ipsum`,
    },

    {
      name: `Jean `,
      img: `/assets/photo.png`,
      review: `lorem ipsum`,
    },

    {
      name: ` Pierre`,
      img: `/assets/photo.png`,
      review: `lorem ipsumnkkl,k,k,`,
    },
  ];


  return (
    <div>

      <main className="container mx-auto">

        <Hero />

        <EventInfo />

        <Schedule />

        <Speakers />

        <Ticket />

        <Sponsors />

        <Testimony />

        <Contact />


      </main>



      <div className="border-b-[0.3px] w-[10%]"></div>

      <div className='w-3/4 m-auto '>

        <div className='mt-20 '>

          {data.map((d) => (
            <div>

              <div>
                <img src={d.img} alt="" />
              </div>


              <div>
                <p>{d.name}</p>
                <p>{d.review}</p>
              </div>

            </div>
          ))}



        </div>

      </div>


    </div>

  )
}   
