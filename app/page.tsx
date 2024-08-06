import React from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import EventInfo from "./Components/EventInfo";
import Schedule from "./Components/Schedule";
import Speakers from "./Components/Speakers"
import Ticket from "./Components/Ticket";

export default function Home() {
  return (
    <main className="h-screen">

      <div className="bg-[#291D5D]">
        <Header />
        <Hero/>
      </div>

      <div>
        <EventInfo/>
      </div>


      <div>
        <Schedule/>
      </div>

      <div>
        <Speakers/>
      </div>


      <div>
        <Ticket/>
      </div>

    </main>
  );
}
