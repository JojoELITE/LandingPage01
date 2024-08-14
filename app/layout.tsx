import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";


const footerData = {
  copyright: '© 2024 Eventi. Tous droits réservés.',
  links: [
      { href: '#', text: 'Politique de confidentialité' },
      { href: '#', text: 'Termes & Conditions' }
  ]
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <header className="sticky top-0 z-50">

          <Header />

        </header>


        {children}


        <footer className="bg-white text-black p-16">
            <div className="container mx-auto text-center flex flex-col md:flex-row gap-3 md:justify-between">
                <p className="mb-4 md:mb-0 ml-0 lg:ml-16">{footerData.copyright}</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mr-0 lg:mr-16">
                    {footerData.links.map((link, index) => (
                        <a key={index} href={link.href} className="hover:underline">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </footer>



      </body>
    </html >
  );
}
