import React from "react";
import waveImg from "../../assets/vector1.png";

const TicketStatus = ({tickets , resolvedTickets}) => {
  return (
    <section className="py-10 md:py-16 bg-gray-100">
      <div className="max-w-450 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* In process Card */}
          <div className="relative overflow-hidden min-h-60 flex justify-center items-center rounded-2xl p-6 md:p-8 text-white bg-linear-to-r from-purple-600 to-indigo-500">
            {/* Wave Image */}
            <img
              src={waveImg}
              alt="wave"
              className="absolute -left-30 sm:left-0 top-0 bottom-0"
            />

            <img
              src={waveImg}
              alt="wave"
              className=" absolute -right-30 sm:right-0 top-0 transform scale-x-[-1] bottom-0"
            />

            <div className="relative z-10 text-center">
              <p className=" text-lg md:text-2xl opacity-90">In-Progress</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">{tickets.length}</h2>
            </div>
          </div>

          {/* Resolved Card */}
          <div className="relative overflow-hidden min-h-60 flex justify-center items-center rounded-2xl p-6 md:p-8 text-white bg-linear-to-r from-green-500 to-teal-600">
            {/* Wave Image */}
            <img
              src={waveImg}
              alt="wave"
              className="absolute -left-30 sm:left-0 top-0 bottom-0"
            />

            <img
              src={waveImg}
              alt="wave"
              className=" absolute -right-30 sm:right-0 top-0 transform scale-x-[-1] bottom-0"
            />

            <div className="relative z-10 text-center">
              <p className="text-lg md:text-2xl">Resolved</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">{resolvedTickets.length}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketStatus;
