import React from 'react'
import Image from 'next/image';

function About() {
  return (

    <section className='p-10 bg-white'>

        <div></div>

        <div className='flex gap-2'>

            <div className='rounded-lg bg-[#FD2284]'>
                10.000
            </div>

            <div className='rounded-lg bg-[#FB6238]'>
                10.000
            </div>

            <div className='rounded-lg bg-[#5B26E1]'>
                10.000
            </div>

            <div className='rounded-lg bg-[#0166FF]'>
                10.000
            </div>

        </div>

        <div className='py-20'>
                <Image
                    src="/assets/TemplateOne.png"
                    alt="image"
                    width={200}
                    height={550}
                />
            </div>

        
    </section>
  )
}

export default About;