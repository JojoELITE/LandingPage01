import React, { useState } from 'react';

const eventsByDay = {
    day1: [
        {
            id: 1,
            time: '10h00 - 12h00',
            location: 'SAMBA TECH',
            title: 'Introduction à un événement dans le monde des affaires',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Frederick Taylor', role: 'UX Designer', image: '/assets/spek3.jpg' },
                    { name: 'Tony Mendoza', role: 'Developer', image: '/assets/spek4.jpg' },
                ],
        },
    ],



    day2: [
        {
            id: 2,
            time: '10h00 - 12h00',
            location: 'ECOLE 241',
            title: 'Conférence , introduction sur la technologie numérique',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Bryan Credle', role: 'Technology Officer', image: '/assets/spek3.jpg' },
                    { name: 'Helena Falcon', role: 'Operations Officer', image: '/assets/spek4.jpg' },
                ],
        },
    ],


    day3: [
        {
            id: 3,
            time: '10h00 - 12h00',
            location: 'SAFRIMAT',
            title: 'Conférence internationale sur le sommet technologique',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Karin Dnox', role: 'Software Engineer', image: '/assets/spek3.jpg' },
                    { name: 'David Russell', role: 'Product Designer', image: '/assets/spek4.jpg' },
                ],
        },
    ],
};



const eventsByDay2 = {
    day1: [
        {
            id: 1,
            time: '15h00 - 17h00',
            location: 'SAMBA TECH',
            title: 'Introduction à un événement dans le monde des affaires',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Frederick Taylor', role: 'UX Designer', image: '/assets/spek3.jpg' },
                    { name: 'Tony Mendoza', role: 'Developer', image: '/assets/spek4.jpg' },
                ],
        },
    ],



    day2: [
        {
            id: 2,
            time: '15h00 - 17h00',
            location: 'ECOLE 241',
            title: 'Conférence , introduction sur la technologie numérique',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Bryan Credle', role: 'Technology Officer', image: '/assets/spek3.jpg' },
                    { name: 'Helena Falcon', role: 'Operations Officer', image: '/assets/spek4.jpg' },
                ],
        },
    ],


    day3: [
        {
            id: 3,
            time: '15h00 - 17h00',
            location: 'SAFRIMAT',
            title: 'Conférence internationale sur le sommet technologique',
            description:
                "Il existe de nombreuses variantes de passages disponibles, mais la majorité ont subi des modifications sous une forme ou une autre.", speakers: [
                    { name: 'Karin Dnox', role: 'Software Engineer', image: '/assets/spek3.jpg' },
                    { name: 'David Russell', role: 'Product Designer', image: '/assets/spek4.jpg' },
                ],
        },
    ],
};


const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'day3'>('day1');

    const handleDayChange = (day: 'day1' | 'day2' | 'day3') => {
        setSelectedDay(day);
    };

    return (
        <section id='schedule' className="">

            <div className='md:col lg:flex gap-6  py- px-20'>
                <div className="md:w-1/2">
                    <h6 className="text-sm mt-4 text-[#FD2284] uppercase">HORAIRE DE L'ÉVÉNEMENT</h6>
                    <h2 className="text-xl lg:text-3xl text-black uppercase">
                        LISTE DES <br />ÉVÉNEMENTS <br />PRÉVUS
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm lg:text-xl">
                        Inscrivez-vous à notre série de webinaires et de sessions interactives pour en savoir plus sur les dernières technologies et innovations.
                    </p>

                    <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                        Télécharger le calendrier
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hidden md:block sm:block">
                        <div className="flex gap-4 mt-8">
                            <div>
                                <div className="bg-gray-200 px-20 py-16 rounded-lg w-[50%]"></div>
                                <div className="bg-gray-200 ml-8 mt-4 px-16 py-14 rounded-lg w-[20%]"></div>
                            </div>
                            <div>
                                <div className="bg-gray-200 mt-14 px-20 py-4 rounded-lg w-[30%]">
                                    <div className="h-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-10 lg:mt-0">
                    <div className="text-center ">
                        <div className="space-x-4">
                            <button
                                onClick={() => handleDayChange('day1')}
                                className={`px-6 py-2 rounded-full ${selectedDay === 'day1' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Jour 01 <br /> 08/10/2024
                            </button>
                            <button
                                onClick={() => handleDayChange('day2')}
                                className={`px-6 py-2 rounded-full ${selectedDay === 'day2' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Jour 02 <br /> 09/10/2024
                            </button>
                            <button
                                onClick={() => handleDayChange('day3')}
                                className={`px-6 py-2 rounded-full ${selectedDay === 'day3' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                Jour 03 <br /> 10/10/2024
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className="">
                            {eventsByDay[selectedDay].map((event, index) => (
                                <div key={event.id} className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6">
                                    <div className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full text-lg font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="w-full py-10">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="block text-gray-700">{event.time}</span>
                                                <span className="block text-pink-500">{event.location}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-2">{event.title}</h3>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                        <div className="flex items-center space-x-4 mt-4">
                                            {event.speakers.map((speaker) => (
                                                <div key={speaker.name} className="flex items-center space-x-2">
                                                    <img
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="text-gray-800 font-semibold">{speaker.name}</p>
                                                        <p className="text-gray-600 text-sm">{speaker.role}</p>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                        <div className="">
                            {eventsByDay2[selectedDay].map((event, index) => (
                                <div key={event.id} className="flex items-center space-x-4 bg-white shadow-lg rounded-lg mt-6">
                                    <div className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full text-lg font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="w-full py-10">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="block text-gray-700">{event.time}</span>
                                                <span className="block text-pink-500">{event.location}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-2">{event.title}</h3>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                        <div className="flex items-center space-x-4 mt-4">
                                            {event.speakers.map((speaker) => (
                                                <div key={speaker.name} className="flex items-center space-x-2">
                                                    <img
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="text-gray-800 font-semibold">{speaker.name}</p>
                                                        <p className="text-gray-600 text-sm">{speaker.role}</p>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </div>




        </section>
    );
};

export default Schedule;
