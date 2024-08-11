import React from 'react'

import VoirPlusUsers from './VoirPlusUsers';

const users = [
    {
        fullName: "John",
        job: "Software Engineer",
        image: "/assets/spek3.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
    {
        fullName: "Jane",
        job: "Product Manager",
        image: "/assets/spek4.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
    {
        fullName: "Emily",
        job: "UX Designer",
        image: "/assets/spek3.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
    {
        fullName: "Jean Pierre",
        job: "Chanteuse",
        image: "/assets/spek4.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
    {
        fullName: "Johnson",
        job: "UX Designer",
        image: "/assets/spek3.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
    {
        fullName: "Pierre",
        job: "Chanteuse",
        image: "/assets/spek4.jpg", // Assurez-vous que cette image existe
        link: "#",
        link1: "##",
        link2: "###",
        link3: "####",
        link4: "######",
    },
];


function Speakers() {
    return (

        <div id='speakers'>

            <main className="container mx-auto">

                <section className="text-white ">

                    <div className="area container mx-auto">
                        <ul className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className=" ">
                        <div className="text-center p-20">
                            <h2 className="text-xl lg:text-3xl uppercase mt-2">Les Speakers</h2>
                            <p className="mt-2 text-xs lg:text-xl ">
                                Plus de 40 conférenciers inspirants, rencontrez les meilleurs <br /> spécialistes des produits du monde entier et faites la fête <br /> ensemble après l'événement !
                            </p>
                        </div>

                        <VoirPlusUsers users={users} initialCount={3} />

                    </div>
                </section>
            </main>
        </div>

    )
}

export default Speakers;