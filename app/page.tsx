"use client";

import Hero from './Components/Hero';
import EventInfo from "./Components/EventInfo";
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';


export default function Home() {


  return (
    <div>

      <main className="container mx-auto">

        <Hero />

        <EventInfo />

        <Schedule/>

        <Speakers/>


        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl text-black font-bold mb-10">OBTENEZ VOTRE BILLET ICI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-pink-500">Classique</h3>
                <p className="text-4xl  text-black font-bold my-4">5,000 FCFA</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-6 bg-purple-900 text-white py-2 px-4 rounded-full">Obtenez un Billet</button>
              </div>
              <div className="border border-gray-300 p-6 rounded-lg bg-purple-100">
                <h3 className="text-lg font-bold">Première</h3>
                <p className="text-4xl font-bold my-4">15,000 FCFA</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-6 bg-purple-900 text-white py-2 px-4 rounded-full">Obtenez un Billet</button>
              </div>
              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="text-lg font-bold">VIP</h3>
                <p className="text-4xl font-bold my-4">50,000 FCFA</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-6 bg-purple-900 text-white py-2 px-4 rounded-full">Obtenez un Billet</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-10">QUE DISENT LES GENS ?</h2>
            <div className="flex justify-center">
              <blockquote className="max-w-2xl">
                <p className="italic">"Excellents Speakers! Ambiance conviviale et enrichissante."</p>
                <footer className="mt-4">— Témoignage</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-10">PRÊT À COMMENCER</h2>
            <p>Si vous avez n'importe quelle question, nous répondrons à toutes vos questions.</p>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Conférence des Startups Gabonaises. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>

  )
}   
