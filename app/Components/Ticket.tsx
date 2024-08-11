import React from 'react';

const TicketSection = () => {
    return (

        <div id='tickets'>
            <main className="container mx-auto">

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 p-6 lg:p-52">

                    <div className="text-center ">
                        <h6 className="text-xl lg:text-3xl text-pink-500 uppercase">Choisissez vos billets</h6>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 py-10">
                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Classique</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">5.000FCFA</span> / Mois
                            </p>



                            <p className="text-[16px] text-white ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                            </p>

                            <a target="_blank" rel="noopener noreferrer"
                                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 mt-10 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                href="#"><span className="relative text-sm font-semibold text-black"> Obtenir un billet</span></a>
                        </div>



                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Premium</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">15.000FCFA</span> / Mois
                            </p>


                            <p className="text-[16px] text-white ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                            </p>

                            <a target="_blank" rel="noopener noreferrer"
                                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 mt-10 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                href="#"><span className="relative text-sm font-semibold text-black">Obtenir un billet</span></a>
                        </div>



                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">VIP</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">50.000FCFA</span> / Mois
                            </p>

                            <p className="text-[16px] text-white ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                            </p>



                            <a target="_blank" rel="noopener noreferrer"
                                className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 mt-10 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                href="#"><span className="relative text-sm font-semibold text-black">Obtenir un billet</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TicketSection;
