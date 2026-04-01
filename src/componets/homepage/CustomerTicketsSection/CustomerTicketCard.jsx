import React from "react";

const CustomerTicketCard = ({ticket}) => {
  return (

    // {/* Ticket  */}
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-gray-900 flex  justify-between items-center">
            {ticket.title}
            <div className="flex items-center gap-2 w-fit bg-emerald-100 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
               {ticket.status}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2 ">
             {ticket.description}
          </p>
          <div className="flex flex-col lg:flex-row justify-self-start items-center gap-3 mt-4 text-xs">
            <div className="flex gap-2 justify-center items-center">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                # {ticket.id}
              </span>
              <span className="text-red-600 font-semibold"> {ticket.priority}</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <span className="text-gray-500">{ticket.customer}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{ticket.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketCard;
