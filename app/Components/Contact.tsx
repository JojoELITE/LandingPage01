import React from 'react'
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
    return (

        <div>
            <main className="container mx-auto flex flex-col lg:flex-row bg-blue-50 p-6 lg:p-16 gap-6 lg:gap-10">
                <section className="bg-blue-50 text-black w-full lg:w-1/2">
                    <div className="container mx-auto">
                        <h2 className="text-xl lg:text-2xl">PRÊT À COMMENCER</h2>
                        <p className="text-black text-[12px]">
                            Si vous souhaitez poser des questions, nous
                            <br />
                            répondrons à toutes vos questions
                        </p>
                    </div>

                    <form className="w-full max-w-sm bg-white rounded-full mt-5">
                        <div className="flex items-center py-2 px-3">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Entrez votre mail" id="email"
                                name="email" aria-label="Full name" />
                            <button className="flex-shrink-0 bg-pink-500 text-sm border-4 text-white py-1 px-2 w-10 h-10 rounded-full" type="button">
                                <ChevronRight color="white" size={18} />
                            </button>
                        </div>
                    </form>


                    <div className="flex items-center gap-2 mt-5">
                        <Link href="#">
                            <Facebook fill="black" stroke="none" size={18} />
                        </Link>
                        <Link href="#">
                            <Instagram color="black" size={18} />
                        </Link>
                        <Link href="#">
                            <Twitter fill="black" stroke="none" size={18} />
                        </Link>
                    </div>
                </section>

                <div className="text-black w-full lg:w-1/2">
                    <p className="font-bold">
                        Peut-être que votre question a
                        <br />
                        trouvé une réponse. Vérifiez ceci.
                    </p>

                    <div className="flex items-center justify-between py-2 lg:py-4 gap-6 lg:gap-24">
                        <p className="text-[14px] lg:text-[18px]">Qu'est-ce qu'Eventi</p>
                        <Link href="#">
                            <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="flex items-center justify-between gap-6 lg:gap-24">
                        <p className="text-[14px] lg:text-[18px]">Comment s'inscrire à Eventi ?</p>
                        <Link href="#">
                            <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="flex items-center justify-between py-2 lg:py-4 gap-6 lg:gap-24">
                        <p className="text-[14px] lg:text-[18px]">Comment acheter des billets à Eventi ?</p>
                        <Link href="#">
                            <ChevronRight size={14} />
                        </Link>
                    </div>
                </div>
            </main>
        </div>



    )
}

export default Footer;