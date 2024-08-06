import React from 'react'

function About() {
    return (

        <section className='p-10 bg-white'>

            <div className='flex flex-col sm:flex-row md:flex-row gap-12 py-4'>

                <div className='flex gap-4'>
                    <div>
                        <div>
                            <div className="bg-gray-200 px-14 py-20 rounded-lg w-[50%]">
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-200 ml-4 mt-4 px-12 py-10  rounded-lg w-[20%]">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="bg-gray-200 mt-4 px-12 py-12 rounded-lg w-[30%]">
                                <div className="h-32"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                    <h2 className="text-3xl font-bold text-black">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                    <p className="mt-2 text-black text-[8px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, esse nam nostrum <br />dolor veniam placeat sit blanditiis brarchitecto qui vero odio cumque vitae <br /> minima laudantium rem id? Labore, sapiente recusandae.
                    </p>

                    <button className="border border-[#FD2284] hover:bg-[#FD2284] hover:text-white text-[#FD2284] text-xs py-0.5 px-3 mt-10 rounded-full">
                        Contactez-nous
                    </button>
                </div>
            </div>



            <div className="mt-8 flex flex-col sm:flex-row md:flex-row justify-between gap-6">
                <div className="bg-[#FD2284] rounded-lg sm:w-full md:w-full lg:w-1/4 ">
                    <div className="h-24 "></div>
                    <p className='px-2'>10.000 <br />
                        <span className='text-[8px]'> Conférence <br />Billets confirmés</span>
                    </p>
                </div>
                <div className="bg-[#FB6238] rounded-lg sm:w-full md:w-full lg:w-1/4">
                    <div className="h-24"></div>
                    <p className='px-2'>8+ <br />
                        <span className='text-[8px]'>Partenaires propulsés <br /> haut-parleurs</span>
                    </p>
                </div>
                <div className="bg-[#5B26E1] p-4 rounded-lg sm:w-full md:w-full lg:w-1/4">
                    <div className="h-24"></div>
                    <p className='px-2'>40+ <br />
                        <span className='text-[8px]'>Des participants de différents <br /> pays</span>
                    </p>
                </div>
                <div className="bg-[#0166FF] p-4 rounded-lg sm:w-full md:w-full lg:w-1/4">
                    <div className="h-24"></div>
                    <p className='px-2'>100+ <br />
                        <span className='text-[8px]'>Sponsors de grands <br /> entreprise</span>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About;