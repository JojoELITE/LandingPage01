"use client";

import Hero from './Components/Hero';
import EventInfo from "./Components/EventInfo";
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';
import Contact from './Components/Contact';
import Testimony from './Components/Testimony';
import Ticket from './Components/Ticket';
import Sponsors from './Components/Sponsors'


export default function Home() {

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




    </div>

  )
}   
