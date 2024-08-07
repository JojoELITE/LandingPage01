import React from 'react'

function Schedule() {
    return (

        <div>
            <main className="container mx-auto">
                <section className="bg-gray-100 p-16">
                    <div className="flex flex-col md:flex-row gap-0 lg:gap-8">
                        <div className="md:w-1/2">
                            <h6 className="text-xs mt-4 text-[#FD2284] uppercase">HORAIRE DE L'ÉVÉNEMENT</h6>
                            <h2 className="text-3xl text-black uppercase">
                                LISTE DES <br />ÉVÉNEMENTS <br />PRÉVUS
                            </h2>
                            <p className="mt-2 text-gray-500 text-[16px]">
                                Inscrivez-vous à notre série de webinaires <br />et de sessions interactives pour en savoir plus <br /> sur les dernières technologies et innovations.
                            </p>
                            <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full">
                                Télécharger le calendrier
                            </button>

                            <div className="flex gap-4 items-center py-6">
                                <div>
                                    <div className="bg-gray-200 px-20 py-24 rounded-lg w-[50%]"></div>
                                    <div className="bg-gray-200 ml-6 mt-4 px-16 py-16 rounded-lg w-[20%]"></div>
                                </div>
                                <div>
                                    <div className="bg-gray-200 mt-4 px-20 py-16 rounded-lg w-[30%]">
                                        <div className="h-32"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-full">
                            <div className="flex rounded-full gap-6 mt-4 bg-[#EFF1FD] p-2 md:w-[0%] lg:w-[60%]">
                                <div className="rounded-full px-4 py-1  bg-white text-black text-center cursor-pointer">
                                    <h4 className="text-xs">PREMIER JOUR</h4>
                                    <h4 className="text-xs font-bold">22 Mars 2024</h4>
                                </div>
                                <div className="rounded-full px-4 py-1 text-black text-center hover:bg-white cursor-pointer">
                                    <h4 className="text-xs">DEUXIÈME JOUR</h4>
                                    <h4 className="text-xs font-bold">23 Mars 2024</h4>
                                </div>
                                <div className="rounded-full px-4 py-1 text-black text-center hover:bg-white cursor-pointer">
                                    <h4 className="text-xs">TROISIÈME JOUR</h4>
                                    <h4 className="text-xs font-bold">24 Mars 2024</h4>
                                </div>
                            </div>



                            <div className="flex col gap- mt-6 text-black">
                                <div className="flex flex-col justify-between">
                                    <p className="mt-6 text-sm w-20">09-00</p>
                                    <p className="mb- text-sm">10-00</p>
                                    <p className="py- text-sm">11-00</p>
                                    <p className="py- text-sm">12-00</p>
                                    <p className="mb-14 text-sm">13-00</p>
                                </div>

                                <div className="flex flex-col items-center py-5 text-white hidden md:block sm:block">
                                    <div className="rounded-full px-2 bg-[#FD2284] ">1</div>
                                    <div className="border-l-2 border-[#FD2284] py-[35px]  ml-3"></div>
                                    <div className="rounded-full px-2 bg-[#FD2284] ">2</div>
                                    <div className="border-l-2 border-[#FD2284] py-[33px]  ml-3"></div>
                                    <div className="rounded-full px-2 bg-[#FD2284] ">3</div>
                                    <div className="border-l-2 border-[#FD2284] py-[27px]  ml-3"></div>
                                    <div className="rounded-full px-2 bg-[#FD2284] ">4</div>
                                    <div className="border-l-2 border-[#FD2284] py-[42px]  ml-3"></div>
                                    <div className="rounded-full px-2 bg-[#FD2284] ">5</div>
                                </div>

                                <div className="flex flex-col justify-between py-5 text-black px-10">
                                    <div className="md:mb-0">
                                        <p className=''>Inscription</p>
                                        <p className="text-[12px] text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="py-8 md:mt-0">
                                        <p>Présentation</p>
                                        <p className="text-[12px] text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className=" md:mt-0">
                                        <p>Atelier</p>
                                        <p className="text-[12px] text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="py-8 md:mt-0">
                                        <p>Discussion</p>
                                        <p className="text-[12px] text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="md:mt-0">
                                        <p>Clôture</p>
                                        <p className="text-[12px] text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>


    )
}

export default Schedule;