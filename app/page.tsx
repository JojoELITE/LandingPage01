import React from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

export default function Home() {
  return (
    <main className="">

      <div className="bg-[#291D5D]">
        <Header />
        <Hero/>
      </div>

      <div>
        <About/>
      </div>


    </main>
  );
}
