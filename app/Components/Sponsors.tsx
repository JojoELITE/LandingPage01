import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Sponsors() {
    return (
        <div>
            <section className="bg-blue-100 text-black p-4 md:p-16">
                <div className="container mx-auto">
                    <div className=' text-center '>
                        <h6 className='text-xs text-[#FD2284]'>NOS SPONSORS</h6>
                        <h2 className="text-3xl  text-black">PLUS DE 100 SPONSORS D'UNE GRANDE ENTREPRISE</h2>

                    </div>

                    <div className="mt-8 md:p-6">
                        <div className="flex flex-wrap justify-center gap-8 mb-4">
                            <Link href="#" className="flex-shrink-0">
                                <Image className='w-32' src="/logo/vide.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-32' src="/logo/code.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-32' src="/logo/graph.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-36' src="/logo/photo.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-32' src="/logo/vide.png" alt="Logo" width={100} height={50} />
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="#" className="">
                                <Image className='w-32' src="/logo/vide.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-36' src="/logo/code.png" alt="Logo" width={100} height={50} />
                            </Link>

                            <Link href="#" className="">
                                <Image className='w-32' src="/logo/graph.png" alt="Logo" width={100} height={50} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
