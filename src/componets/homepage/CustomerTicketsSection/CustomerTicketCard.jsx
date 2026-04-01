import React from "react";

const CustomerTicketCard = ({ ticket }) => {
  return (
    // {/* Ticket  */}
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-gray-900 flex  justify-between items-center">
            {ticket.title}
            <div className={`flex items-center gap-2 w-fit  text-xs font-medium px-4 py-1.5 rounded-full 
             ${ticket.status === "Open" && "bg-emerald-100 text-emerald-700"} 
              ${ticket.status === "Closed" && "bg-red-100 text-red-700"}
              ${ticket.status === "In Progress" && "bg-yellow-100 text-yellow-700 "}
             `}>
              <div
                className={`w-2 h-2 rounded-full
              ${ticket.status === "Open" && "bg-emerald-500 "  } 
              ${ticket.status === "Closed" && "bg-red-500 "}
              ${ticket.status === "In Progress" && "bg-yellow-500 "} 
            `}
              ></div>
              {ticket.status}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2 ">{ticket.description}</p>
          <div className="flex flex-col lg:flex-row justify-self-start items-center gap-3 mt-4 text-xs">
            <div className="flex gap-2 justify-center items-center">
              <span className={` px-3 py-1 rounded-full font-medium 
              ${ticket.priority === "High" && "bg-red-100 text-red-700 "  } 
              ${ticket.priority === "Medium" && "bg-yellow-100 text-yellow-700 "}
              ${ticket.priority === "Low" && "bg-green-100 text-green-700"} `}>
                # {ticket.id}
              </span>
              <span className={` font-semibold
              ${ticket.priority === "High" && "text-red-500 "  } 
              ${ticket.priority === "Medium" && "text-yellow-500 "}
              ${ticket.priority === "Low" && "text-green-500"} `}>
               
                {ticket.priority}
              </span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <span className="text-gray-500">{ticket.customer}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{ticket.priority}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketCard;
