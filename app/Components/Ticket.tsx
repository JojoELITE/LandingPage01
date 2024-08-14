import React from 'react';

const ticketsByType = {
    classique: {
        id: 1,
        price: '50.000 FCFA',
        title: 'Classique',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea iusto accusamus vitae commodi blanditiis voluptatibus animi quod nesciunt nihil! Facere corporis nisi id rerum soluta atque natus obcaecati dignissimos?',
        buttonText: 'Obtenez votre billet',
        buttonColor: 'bg-pink-600',
        buttonHoverColor: 'hover:bg-pink-700',
        borderColor: 'border-white',
        bgColor: 'bg-blue-100',
        textColor: 'text-pink-600',
    },
    premium: {
        id: 2,
        price: '15.000 FCFA',
        title: 'Premium',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea iusto accusamus vitae commodi blanditiis voluptatibus animi quod nesciunt nihil! Facere corporis nisi id rerum soluta atque natus obcaecati dignissimos?',
        buttonText: 'Obtenez votre billet',
        buttonColor: 'bg-purple-600',
        buttonHoverColor: 'hover:bg-purple-700',
        borderColor: 'border-white',
        bgColor: 'bg-violet-600',
        textColor: 'text-orange-600',
    },
    vip: {
        id: 3,
        price: '50.000 FCFA',
        title: 'VIP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea iusto accusamus vitae commodi blanditiis voluptatibus animi quod nesciunt nihil! Facere corporis nisi id rerum soluta atque natus obcaecati dignissimos?',
        buttonText: 'Obtenez votre billet',
        buttonColor: 'bg-pink-600',
        buttonHoverColor: 'hover:bg-pink-700',
        borderColor: 'border-white',
        bgColor: 'bg-blue-100',
        textColor: 'text-purple-600',
    },
};

const Pricing = () => {
    return (
        <section id='tickets'  className="container mx-auto bg-blue-100 flex flex-col justify-center items-center py-10 bg-gray-50">
            <div>
                <h2 className="text-lg font-semibold text-pink-600 mb-4 text-center">CHOISISSEZ VOS TICKETS</h2>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">OBTENEZ VOTRE BILLET ICI</h1>

                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4 py-5">

                    {Object.values(ticketsByType).map(ticket => (
                        <div key={ticket.id} className="w-full md:w-64">
                            <div className={`border-dashed border-2 ${ticket.borderColor} rounded-lg ${ticket.bgColor} p-3 text-center`}>
                                <h3 className={`${ticket.textColor} font-semibold mb-2`}>{ticket.title}</h3>
                                <p className="text-3xl font-bold mb-4">{ticket.price}</p>
                            </div>
                            <div className={`rounded-lg bg-white p-6 ${ticket.bgColor === 'bg-red-500' ? 'bg-red-100' : 'text-purple-600'}`}>
                                <p className={`${ticket.bgColor === 'bg-blue-100' ? 'text-black' : 'text-'}`}>
                                    {ticket.description}
                                </p>
                                <div className='flex justify-center mt-6'>
                                    <button className={`${ticket.buttonColor} text-white py-2 px-4 rounded-full ${ticket.buttonHoverColor}`}>
                                        {ticket.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                </div>
            </div>
        </section>
    );
};

export default Pricing;
