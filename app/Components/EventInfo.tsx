import React from 'react';

const aboutData = {
    title: "Bienvenue à la Conférence Numérique 2024",
    description: "La Digital Technology Conference vous convie à la conférence des technologies émergentes qui se tiendra du 22 au 24 mars 2024. Cette conférence vous donnera un aperçu des technologies émergentes les plus récentes et de leurs impacts sur le secteur technologique.",
    contactButton: {
        text: "Contactez-nous",
        link: ""
    },
    statistics: [
        {
            id: 1,
            color: "#FD2586",
            count: "10.000",
            description: "Conférence Billets <br /> confirmés"
        },
        {
            id: 2,
            color: "#FB6238",
            count: "8+",
            description: "Partenaires propulsés haut-parleurs"
        },
        {
            id: 3,
            color: "#5B26E1",
            count: "40+",
            description: "Des participants de différents pays"
        },
        {
            id: 4,
            color: "#0166FF",
            count: "100+",
            description: "Sponsors de grandes <br />  entreprises"
        }
    ],
    image: "/assets/Overlay.png"
};

function About() {
    return (
        <div id='about'>
            <main className="container mx-auto">
                <section className="flex flex-col md:flex-row p-16 gap-16">
                    <div className="grid-cols-1 md:grid-cols-2 hidden md:block sm:block">
                        <div className="flex gap-4 mt-8">
                            <div>
                                <div className="bg-gray-200 px-20 py-32 rounded-lg w-[50%]"></div>
                                <div className="bg-gray-200 ml-8 mt-4 px-16 py-20 rounded-lg w-[20%]"></div>
                            </div>
                            <div>
                                <div className="bg-gray-200 mt-20 px-20 py-20 rounded-lg w-[30%]">
                                    <div className="h-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 py-0 lg:py-20">
                        <h6 className='text-sm text-[#FD2284]'>{aboutData.title}</h6>
                        <h2 className="text-xl lg:text-3xl mt-2 text-black font-medium">BIENVENUE À LA <br />CONFÉRENCE <br />NUMÉRIQUE 2024</h2>
                        <p className="mt-4 text-sm lg:text-xl text-gray-500">
                            {aboutData.description}
                        </p>
                        <button className="mt-6 text-pink-500 py-2 px-4 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                            <a href={aboutData.contactButton.link}>{aboutData.contactButton.text}</a>
                        </button>
                    </div>
                </section>

                <section className="bg-blue-50 bg-cover bg-center" style={{ backgroundImage: `url(${aboutData.image})` }}>
                    <div className="flex flex-wrap p-6">
                        {aboutData.statistics.map(stat => (
                            <div key={stat.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div
                                    className="border-2 border-gray-600 px-4 py-16 rounded-lg transform transition duration-500 hover:scale-110"
                                    style={{ backgroundColor: stat.color }}
                                >
                                    <h2 className="title-font font-medium text-3xl text-white">{stat.count}</h2>
                                    <p className="text-white"
                                        dangerouslySetInnerHTML={{ __html: stat.description}}>

                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About;
