import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Quote, MoveLeft, MoveRight } from 'lucide-react';

const testimonyData = {
    sectionTitle: 'CE QUE DISENT NOS INTERNAUTES',
    mainTitle: 'QUE DISENT LES GENS ?',
    quote: {
        text: 'Excellents Speakers Ambiance conviviale',
        description: "Excellente année, des talks très sympathiques, ambiance de Charme, intervention des membres de l'industrie et de leaders du marché. Il n'y a simplement pas de futur possible sans ce rendez-vous chaque année !"
    },
    speaker: {
        name: 'Stevano Gonzoles',
        position: 'Product Manager on Google'
    },
    image: {
        src: '/assets/couleur.png',
        alt: 'Logo'
    }
};

function Testimony() {
    return (
        <div>
            <main className="container mx-auto flex flex-col lg:flex-row bg-white p-16 gap- lg:gap-10">
                <section className="w-full lg:w-1/2">
                    <div className="container mx-auto">
                        <h6 className="text-sm mt-4 text-[#FD2284]">{testimonyData.sectionTitle}</h6>
                        <h2 className="text-xl lg:text-3xl text-black mt-2">{testimonyData.mainTitle}</h2>
                    </div>

                    <div className="flex justify-end mt-6" style={{ transform: 'scaleX(-1)' }}>
                        <Quote color="gray" size={18} />
                    </div>

                    <p className="text-black font-bold text-">{testimonyData.quote.text}</p>

                    <div>
                        <p className="text-gray-500 text-[16px] w-full lg:w-[60%] mt-3">
                            "{testimonyData.quote.description}"
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <div className="rounded-full bg-gray-300 w-8 h-8"></div>
                        <div className="text-black">
                            <p className="font-bold">{testimonyData.speaker.name}</p>
                            <p className="text-sm text-gray-500">{testimonyData.speaker.position}</p>
                        </div>
                    </div>

                    <div className="flex gap-1 mt-1">
                        <Link href="#">
                                <MoveLeft color="gray" size={50} />
                        </Link>
                        <Link href="#">
                                <MoveRight color="#FD2284" size={50} />
                        </Link>
                    </div>
                </section>

                <div className="w-full lg:w-1/2 hidden lg:block">
                    <Image
                        className="w-[60%] rounded-full"
                        src={testimonyData.image.src}
                        alt={testimonyData.image.alt}
                        width={100}
                        height={100}
                    />
                </div>
            </main>
        </div>
    );
}

export default Testimony;
