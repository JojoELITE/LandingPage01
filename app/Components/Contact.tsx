import React from 'react';
import Link from 'next/link';
import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';

const contactData = {
    header: {
        title: 'PRÊT À COMMENCER',
        description: 'Si vous souhaitez poser des questions, nous répondrons à toutes vos questions'
    },
    form: {
        placeholder: 'Entrez votre mail'
    },
    socialLinks: [
        { href: '#', icon: <Facebook fill="black" stroke="none" size={18} /> },
        { href: '#', icon: <Instagram color="black" size={18} /> },
        { href: '#', icon: <Twitter fill="black" stroke="none" size={18} /> }
    ],
    faq: [
        { question: "Qu'est-ce qu'Eventi", link: '#' },
        { question: "Comment s'inscrire à Eventi ?", link: '#' },
        { question: "Comment acheter des billets à Eventi ?", link: '#' }
    ]
};

function Contact() {
    return (
        <div id='contact'>
            <main className="container mx-auto flex flex-col lg:flex-row bg-blue-50 p-6 lg:p-16 gap-6 lg:gap-10 bg-cover bg-center h-58"
                style={{ backgroundImage: "url('/assets/Overlay.png')" }}>
                
                <section className="text-black w-full lg:w-1/2">
                    <div className="container mx-auto">
                        <h2 className="text-xl lg:text-3xl">{contactData.header.title}</h2>
                        <p className="text-black text-sm lg:text-xl">
                            {contactData.header.description}
                        </p>
                    </div>

                    <form className="w-full max-w-sm bg-white rounded-full mt-5">
                        <div className="flex items-center py-2 px-3">
                            <input 
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder={contactData.form.placeholder} 
                                id="email"
                                name="email" 
                                aria-label="Full name" 
                            />
                            <button 
                                className="flex-shrink-0 bg-pink-500 text-sm border-4 text-white py-1 px-2 w-10 h-10 rounded-full" 
                                type="button">
                                <ChevronRight color="white" size={18} />
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center gap-2 mt-5">
                        {contactData.socialLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="text-black w-full lg:w-1/2">
                    <p className="font-bold">
                        Peut-être que votre question a
                        <br />
                        trouvé une réponse. Vérifiez ceci.
                    </p>

                    {contactData.faq.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center justify-between py-2 lg:py-4 gap-6 lg:gap-24 ${index % 2 === 0 ? 'py-2 lg:py-4' : ''}`}
                        >
                            <p className="text-sm lg:text-xl">{item.question}</p>
                            <Link href={item.link}>
                                <ChevronRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Contact;
