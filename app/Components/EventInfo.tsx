import React from 'react'


const photo = [
    {

        image: "/assets/speakers.png",
    },

];

function About() {
    return (
        <div>

            <main className="container mx-auto  px-16 py-20">
                <section className="flex flex-col md:flex-row  gap-10">

                    <div>
                        <img
                            src={photo[0].image}
                            alt="Description de l'image"
                            className="w-[1500px] h-[500px] object-contain"
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1 py-20">
                        <h6 className='text-sm text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                        <h2 className="text-xl lg:text-3xl mt-2 text-black ">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                        <p className="mt-4 text-sm lg:text-xl text-gray-500">
                            La Digital Technology Conference vous convie à la conférence des technologies émergentes qui se tiendra du 22 au 24 mars 2024. Cette conférence vous donnera un aperçu des technologies émergentes les plus récentes et de leurs impacts sur le secteur technologique.
                        </p>
                        <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                            Contactez-nous
                        </button>
                    </div>
                </section>

                <section className="py-12 mt-6 bg-blue-50 bg-cover bg-center h-58"
                    style={{ backgroundImage: "url('/assets/Overlay.png')" }}>

                    <div className="flex flex-wrap p-6 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-16 rounded-lg transform transition duration-500 hover:scale-110">
                               
                                <h2 className="title-font font-medium text-3xl text-gray-900">10.000</h2>
                                <p className="leading-relaxed">Conférence Billets confirmés</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-16 rounded-lg transform transition duration-500 hover:scale-110">
                             
                                <h2 className="title-font font-medium text-3xl text-gray-900">8K</h2>
                                <p className="leading-relaxed">Partenaires propulsés haut-parleurs</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-16 rounded-lg transform transition duration-500 hover:scale-110">
                              
                                <h2 className="title-font font-medium text-3xl text-gray-900">48+</h2>
                                <p className="leading-relaxed">Des participants de différents pays</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-16 rounded-lg transform transition duration-500 hover:scale-110">
                              
                                <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
                                <p className="leading-relaxed">Sponsors de grandes entreprises</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default About;