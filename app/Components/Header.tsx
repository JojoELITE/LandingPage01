import React from 'react'

function Header() {
    return (

        <nav className='flex justify-between p-10 cursor-pointer bg-[#291D5D]'>

            <div>
                Logo
            </div>

            <div className='flex items-center gap-6 '>
                <ul className='flex gap-6 text-sm'>
                    <li className=''>Schedule</li>
                    <li className=''>Speakers</li>
                    <li className=''>Ticket</li>
                    <li className=''>Contact</li>
                </ul>

                <button className="border border-white hover:bg-white hover:text-[#291D5D] text-white text-sm py-0.5 px-4 rounded-full">
                    Contact
                </button>

            </div>

        </nav>



    )
}

export default Header