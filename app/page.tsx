import React from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import EventInfo from "./Components/EventInfo";

export default function Home() {
  return (
    <main className="">

      <div className="bg-[#291D5D]">
        <Header />
        <Hero/>
      </div>

      <div>
        <EventInfo/>
      </div>


    </main>
  );
}
