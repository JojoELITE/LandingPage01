import React from 'react'

function About() {
    return (
        <div>

            <main className="container mx-auto bg-white p-16">
                <section className="flex flex-col md:flex-row  lg:gap-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:block sm:block">
                        <video  className='h-[90%]' width="" height="" controls>
                            <source src="/videos/event.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h6 className='text-sm mt-0 lg:mt-8 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                        <h2 className="text-3xl mt-2 text-black ">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                        <p className="mt-4 text-[18px] text-gray-500">
                            La Digital Technology Conference vous convie à la conférence des technologies émergentes qui se tiendra du 22 au 24 mars 2024. Cette conférence vous donnera un aperçu des technologies émergentes les plus récentes et de leurs impacts sur le secteur technologique.
                        </p>
                        <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                            Contactez-nous
                        </button>
                    </div>
                </section>

                <section className=" py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                        <div className="bg-pink-500 text-white py-10 rounded-lg px-8 ">10,000 <br />Conférence <br />Billets confirmés</div>
                        <div className="bg-orange-500 text-white py-10 rounded-lg px-8">8+ <br />Partenaires propulsés <br />haut-parleurs</div>
                        <div className="bg-purple-500 text-white py-10 rounded-lg px-8">40+ <br />Des particants de différents <br /> pays</div>
                        <div className="bg-blue-500 text-white py-10 rounded-lg px-8">100+ <br />Sponsors de grandes <br />entreprises</div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default About;