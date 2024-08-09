import React from 'react'
import Image from 'next/image';


import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { ExternalLink } from 'lucide-react';


const users = [
    {
        fullName: "John Doe",
        job: "Software Engineer",
        image: "/assets/josue.jpeg",
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",

    },
    {
        fullName: "Jane Smith",
        job: "Product Manager",
        image: "/assets/daina.jpeg",
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",

    },
    {
        fullName: "Emily Johnson",
        job: "UX Designer",
        image: "/assets/josue.jpeg",
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",

    },
    {
        fullName: "Jean Pierre",
        job: "Chanteuse",
        image: "/assets/daina.jpeg",
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
];




function Speakers() {
    return (

        <div>

            <main className="container mx-auto">
                <section className="bg-gray-900 text-white ">
                    <div className="bg-[#1D1E25] p-6">
                        <div className="text-center py-6">
                            <h6 className="text-sm text-[#FD2284] uppercase">Intervenants de la Conférence et Événements</h6>
                            <h2 className="text-xl lg:text-3xl uppercase mt-2">Les Speakers</h2>
                            <p className="mt-2 text-sm lg:text-xl ">
                                Plus de 40 conférenciers inspirants, rencontrez les meilleurs <br /> spécialistes des produits du monde entier et faites la fête <br /> ensemble après l'événement !
                            </p>
                        </div>


                        <div>

                            <div className="flex flex-wrap gap-20 justify-center mt-8">

                                <div className="flex flex-wrap  gap-8 justify-center mt-8">
                                    {users.map((user) => (
                                        <div className="flex flex-col text-center">
                                            <div className="mb-4">
                                                <Image
                                                    className=" h-32 w-32 rounded-full absolute "
                                                    src={user.image}
                                                    alt="Logo"
                                                    width={100} 
                                                    height={100}
                                                />
                                            </div>
                                            <div className="flex items-center bg-white rounded-full px-2 py-1 gap-2 relative mt-32 ml-1">
                                                <a className='flex gap-2' href={user.link} target="_blank" rel="noopener noreferrer">
                                                    <Facebook size={14} color='gray' />
                                                  
                                                </a>


                                                <a className='' href={user.link1} target="_blank" rel="noopener noreferrer">
                                                    <Instagram size={14} color='gray' />
                                                 
                                                </a>

                                                <a className='' href={user.link2} target="_blank" rel="noopener noreferrer">
                                                  
                                                    <Twitter size={14} color='gray' />
                                                   
                                                </a>

                                                <a className='' href={user.link3} target="_blank" rel="noopener noreferrer">
                                                 
                                                    <Linkedin size={14} color='gray'/>
                                                </a>


                                                <a className='' href={user.link4} target="_blank" rel="noopener noreferrer">
                            
                                                    <ExternalLink size={14} color='gray'  />
                                                </a>
                                            </div>

                                            <div className=''>
                                                <p className="font-semibold">{user.fullName}</p>
                                                <p className="text-[12px]">{user.job}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                         

                        </div>







                        <div className="flex justify-center p-10">
                            <button className="border border-white text-white hover:bg-white hover:text-[#291D5D] text-sm py-1 px-4 rounded-full">
                                Voir tous les speakers
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Speakers;