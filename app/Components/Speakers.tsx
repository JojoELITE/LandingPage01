import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { ExternalLink } from 'lucide-react';


const users = [
    {
        fullName: "John Doe",
        job: "Software Engineer",
        image: "/assets/nous.jpeg"

    },
    {
        fullName: "Jane Smith",
        job: "Product Manager",
        image: "/assets/daina.jpeg"

    },
    {
        fullName: "Emily Johnson",
        job: "UX Designer",
        image: "/assets/josue.jpeg"

    },
    {
        fullName: "Jean Pierre",
        job: "Chanteuse",
        image: "/assets/daina.jpeg"
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
                            <h2 className="text-3xl uppercase mt-2">Les Speakers</h2>
                            <p className="mt-2 text-xs ">
                                Plus de 40 conférenciers inspirants, rencontrez les meilleurs <br /> spécialistes des produits du monde entier et faites la fête <br /> ensemble après l'événement !
                            </p>
                        </div>


                        <div>

                            <div className="flex flex-wrap gap-20 justify-center mt-8">

                                <div className="flex flex-wrap  gap-8 justify-center mt-8">
                                    {users.map((user) => (
                                        <div className="flex flex-col text-center">
                                            <div className="mb-4 ml-6">
                                                <Image
                                                    className="w-24 h-24 rounded-full absolute "
                                                    src={user.image}
                                                    alt="Logo"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="flex items-center bg-gray-400 rounded-full px-2 py-1 gap-2 mb-4 relative mt-20 ">

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Facebook size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Instagram size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Twitter size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Linkedin size={18} />
                                                </Link>

                                                <Link href="#">
                                                    <ExternalLink size={18} />
                                                </Link>

                                            </div>
                                            <div className=''>
                                                <p className="font-semibold">{user.fullName}</p>
                                                <p className="text-[12px]">{user.job}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>


                            <div className="flex flex-wrap gap-20 justify-center mt-8">

                                <div className="flex flex-wrap  gap-8 justify-center mt-8">
                                    {users.map((user) => (
                                        <div className="flex flex-col text-center">
                                            <div className="mb-4 ml-6">
                                                <Image
                                                    className="w-24 h-24 rounded-full absolute "
                                                    src={user.image}
                                                    alt="Logo"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="flex items-center bg-gray-400 rounded-full px-2 py-1 gap-2 mb-4 relative mt-20 ">

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Facebook size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Instagram size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Twitter size={18} />
                                                </Link>

                                                <Link href="https://www.youtube.com/watch?v=wlSJcbWwzds">
                                                    <Linkedin size={18} />
                                                </Link>

                                                <Link href="#">
                                                    <ExternalLink size={18} />
                                                </Link>

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