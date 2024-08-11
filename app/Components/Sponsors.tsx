import React from 'react'
import Image from 'next/image'



const sponsors0 = [
    {
        name: "Video Hive",
        image: "/logo/vide.png",
        link: "https://videohive.net/",


    },

    {
        name: "Code Canyon",
        image: "/logo/code.png",
        link: "https://codecanyon.net/",

    },


    {
        name: "Graphic River",
        image: "/logo/graph.png",
        link: "https://graphicriver.net/",

    },


    {
        name: "Photo Dune",
        image: "/logo/photo.png",
        link: "https://photodune.net/",


    },
];


export default function Sponsors() {
    return (
        <div>
            <section className="container mx-auto bg-cover text-black p-6 lg:p-12"
                style={{ backgroundImage: "url('/assets/Overlay.png')" }}>


                <div className=' text-center '>
                    <h6 className='text-sm text-[#FD2284]'>NOS SPONSORS</h6>
                    <h2 className="text-xl lg:text-3xl text-black mt-2">PLUS DE 100 SPONSORS D'UNE GRANDE ENTREPRISE</h2>

                </div>


                <div>

                    <div className="flex flex-wrap gap-20 justify-center py-12 ">

                        <div className="flex flex-wrap  gap-8 justify-center">
                            {sponsors0.map((entreprise) => (
                                <div className="flex flex-col text-center">


                                    <div className=''>
                                        <p className="font-semibold text-xl mt-2">{entreprise.name}</p>
                                    </div>

                                    <div className="flex items-center gap-2   ">

                                        <a className='flex gap-2' href={entreprise.link} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                className="w-28 h-10  "
                                                src={entreprise.image}
                                                alt="Logo"
                                                width={100}
                                                height={100}
                                            />
                                        </a>

                                    </div>

                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
