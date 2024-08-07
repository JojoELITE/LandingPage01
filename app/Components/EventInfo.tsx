import React from 'react'

function About() {
    return (

        /* <section className='p-20 bg-white'>
 
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
                     <h2 className="text-xl font-bold text-black">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                     <p className="mt-2 text-black text-[8px]">
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, esse nam nostrum <br />dolor veniam placeat sit blanditiis brarchitecto qui vero odio cumque vitae <br /> minima laudantium rem id? Labore, sapiente recusandae.
                     </p>
 
                     <button className="border border-[#FD2284] hover:bg-[#FD2284] hover:text-white text-[#FD2284] text-[8px] py-0.5 px-3 mt-4 rounded-full">
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
 
         </section>*/

        <div>
            <main className="container mx-auto bg-white p-12">
                <section className="flex flex-col md:flex-row gap-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        <div className="flex gap-4">
                            <div>
                                <div className="bg-gray-200 px-20 py-28 rounded-lg w-[50%]"></div>
                                <div className="bg-gray-200 ml-6 mt-4 px-16 py-14 rounded-lg w-[20%]"></div>
                            </div>
                            <div>
                                <div className="bg-gray-200 mt-8 px-20 py-20 rounded-lg w-[30%]">
                                    <div className="h-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h6 className='text-xs mt-8 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                        <h2 className="text-3xl mt-4 text-black font-bold">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                        <p className="mt-4 text-[18px] text-black">
                            La Digital Technology Conference vous convie à la conférence des technologies émergentes qui se tiendra du 22 au 24 mars 2024. Cette conférence vous donnera un aperçu des technologies émergentes les plus récentes et de leurs impacts sur le secteur technologique.
                        </p>
                        <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full">
                            Contactez-nous
                        </button>
                    </div>
                </section>

                <section className=" py-20">
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