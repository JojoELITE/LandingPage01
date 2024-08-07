import React from 'react';

const TicketSection = () => {
  return (
    <div>
      <main className="container mx-auto">
        <div className="bg-blue-100">
          <div className="text-center py-6">
            <h6 className="text-xs mt-4 text-[#FD2284]">CHOISISSEZ UN TICKET</h6>
            <h2 className="text-3xl text-black">OBTENEZ VOTRE BILLET ICI</h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center p-6 lg:p-16 gap-6">
            <div className="w-full lg:w-1/3">
              <div className="border-4 border-white bg-blue-100 rounded-lg text-center p-6">
                <button className="bg-pink-50 text-pink-500 py-0.5 px-4 rounded-full">
                  Classique
                </button>
                <h2 className="text-2xl mt-2 text-black">5.000FCFA</h2>
              </div>

              
              <div className="bg-white rounded-lg p-3 ">
                <p className="text-[16px] text-black p-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#FD2284] text-white text-xs py-2 px-4 rounded-full mt-2">
                    Obtenir un billet
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="border-4 border-white bg-blue-100 rounded-lg text-center p-6">
                <button className="bg-orange-500 text-white py-0.5 px-4 rounded-full">
                  Premium
                </button>
                <h2 className="text-2xl mt-2 text-black">15.000FCFA</h2>
              </div>
              <div className="bg-indigo-500 rounded-lg p-3">
                <p className="text-[16px] text-white p-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                </p>
                <div className="flex justify-center">
                  <button className="bg-white text-indigo-500 text-xs py-2 px-4 rounded-full mt-2">
                    Obtenir un billet
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="border-4 border-white bg-blue-100 rounded-lg text-center p-6">
                <button className="bg-blue-200 text-indigo-500 py-0.5 px-4 rounded-full">
                  VIP
                </button>
                <h2 className="text-2xl mt-2 text-black">50.000FCFA</h2>
              </div>
              <div className="bg-white rounded-lg p-3 ">
                <p className="text-[16px] text-black p-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse excepturi, magni, repellendus?
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#FD2284] text-white text-xs py-2 px-4 rounded-full mt-2">
                    Obtenir un billet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketSection;
