import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Quote } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';


function Testimony() {
    return (

        <div>
            <main className="container mx-auto flex flex-col lg:flex-row bg-white p-16 gap- lg:gap-10">
                <section className="w-full lg:w-1/2">
                    <div className="container mx-auto">
                        <h6 className="text-xs mt-4 text-[#FD2284]">CE QUE DISENT NOS INTERNAUTES</h6>
                        <h2 className="text-2xl lg:text-3xl text-black ">QUE DISENT LES GENS ?</h2>

                    </div>

                    <div className="flex justify-end mt-6" style={{ transform: 'scaleX(-1)' }}>
                        <Quote color="gray" size={18} />
                    </div>

                    <p className="text-black font-bold text-">Excellents Speakers Ambiance conviviale</p>

                    <div>
                        <p className="text-gray-500 text-[16px] w-full lg:w-[60%] mt-3">
                            "Excellente année, des talks très sympathiques, ambiance de Charme, intervention des membres de l'industrie et de leaders du marché. Il n'y a simplement pas de futur possible sans ce rendez-vous chaque année !"
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <div className="rounded-full bg-gray-300 w-8 h-8"></div>
                        <div className="text-black">
                            <p className="font-bold">Stevano Gonzoles</p>
                            <p className="text-sm text-gray-500">Product Manager oh Google</p>
                        </div>
                    </div>

                    <div className="flex gap-1 mt-1">
                        <Link href="#">
                            <MoveLeft color="gray" size={18} />
                        </Link>
                        <Link href="#">
                            <MoveRight color="#FD2284" size={18} />
                        </Link>
                    </div>
                </section>

                <div className="w-full lg:w-1/2">
                    <Image
                        className="w-[50%] h-[80%] rounded-full ml-24 lg:ml-0 mt-0 lg:mt-10"
                        src="/assets/couleur.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
            </main>
        </div>
    )
}

export default Testimony;