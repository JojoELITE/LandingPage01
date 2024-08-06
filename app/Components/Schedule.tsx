import React from 'react'

function Schedule() {
    return (
        <div className='flex flex-col sm:flex-row md:flex-row bg-[#F9FAFF] p-10 gap-10'>
            <div>
                <div className=''>
                    <h6 className='text-[8px] mt-4 text-[#FD2284]'>A PROPOS DE LA CONFÉRENCE</h6>
                    <h2 className="text-xl font-bold text-black">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                    <p className="mt-2 text-black text-[6px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, esse nam nostrum <br />dolor veniam placeat sit blanditiis brarchitecto qui vero odio cumque vitae <br /> minima laudantium rem id? Labore, sapiente recusandae.
                    </p>

                    <button className="border border-[#FD2284] hover:bg-[#FD2284] hover:text-white text-[#FD2284] text-xs py-0.5 px-3 mt-10 rounded-full">
                        Contactez-nous
                    </button>
                </div>

                <div className='flex gap-4 items-center py-6'>
                    <div>
                        <div>
                            <div className="bg-gray-200 px-14 py-16 rounded-lg w-[50%]">
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-200 ml-4 mt-4 px-12 py-10  rounded-lg w-[20%]">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="bg-gray-200 mt-4 px-12 py-6 rounded-lg w-[30%]">
                                <div className="h-32"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex  rounded-full gap-6 w-2/3 mt-4 bg-[#EFF1FD] p-1'>
                    <div className='rounded-full  px-4 py-1 bg-white text-black text-center'>
                        <h4 className='text-[8px]'>PREMIER JOUR</h4>
                        <h4 className='text-[8px] font-bold '>22 Mars 2024</h4>
                    </div>
                    <div className='px- py-1  text-black text-center'>
                        <h4 className='text-[8px]'>PREMIER JOUR</h4>
                        <h4 className='text-[8px] font-bold '>22 Mars 2024</h4>
                    </div>
                    <div className='px- py-1  text-black text-center'>
                        <h4 className='text-[8px]'>PREMIER JOUR</h4>
                        <h4 className='text-[8px] font-bold '>22 Mars 2024</h4>
                    </div>
                </div>


                <div className='flex gap-8 mt-6 text-black'>
                    <div className=''>
                        <p className='py-5 text-sm'>09-00</p>
                        <p className='py-3 text-sm'>09-00</p>
                        <p className='py-7 text-sm'>09-00</p>
                        <p className='py-2 text-sm'>09-00</p>
                        <p className='py-7 text-sm'>09-00</p>

                    </div>


                    <div className='py-4 text-white'>
                        <div className='rounded-full px-2 bg-[#FD2284] text-center'>1</div>
                        <div className="border-l-2 border-[#FD2284] py-4 ml-3"></div>
                        <div className='rounded-full px-2 bg-[#FD2284] text-center'>2</div>
                        <div className="border-l-2 border-[#FD2284] py-4 ml-3"></div>
                        <div className='rounded-full px-2 bg-[#FD2284] text-center'>3</div>
                        <div className="border-l-2 border-[#FD2284] py-4 ml-3"></div>
                        <div className='rounded-full px-2 bg-[#FD2284] text-center'>4</div>
                        <div className="border-l-2 border-[#FD2284] py-4 ml-3"></div>
                        <div className='rounded-full px-2 bg-[#FD2284] text-center'>5</div>

                    </div>


                    <div className='py-4 text-black'>
                        <div>
                            <p>Inscription</p>
                            <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat <br /> sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='mt-2'>
                            <p>Inscription</p>
                            <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat <br /> sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='mt-2'>
                            <p>Inscription</p>
                            <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat <br /> sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='mt-2'>
                            <p>Inscription</p>
                            <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat <br /> sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='mt-2'>
                            <p>Inscription</p>
                            <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt placeat <br /> sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Schedule;