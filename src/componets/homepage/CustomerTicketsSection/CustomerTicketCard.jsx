import React from "react";
import { toast } from "react-toastify";

const CustomerTicketCard = ({ ticket, tickets, setTickets }) => {
  const handleTicketClick = () => {
    const existTicket = tickets.find((item) => item.id === ticket.id);
    if (existTicket) {
      toast.error("Task already added");
      return;
    }
    setTickets([...tickets, ticket]);
    toast.success("Ticket added");
  };

  return (
    // {/* Ticket  */}
    <div
      onClick={handleTicketClick}
      className="group bg-white rounded-3xl h-full shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
    >
      <div className="p-7">
        <div className="flex justify-between items-start gap-4">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {ticket.title}
              </h3>

              {/* Status Badge */}
              <div
                className={`flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-2xl whitespace-nowrap transition-all duration-300
              ${ticket.status === "Open" && "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"}
              ${ticket.status === "Closed" && "bg-red-100 text-red-700 group-hover:bg-red-200"}
              ${ticket.status === "In Progress" && "bg-amber-100 text-amber-700 group-hover:bg-amber-200"}
            `}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ring-2 ring-white
                ${ticket.status === "Open" && "bg-emerald-500"}
                ${ticket.status === "Closed" && "bg-red-500"}
                ${ticket.status === "In Progress" && "bg-amber-500"}
              `}
                ></div>
                {ticket.status}
              </div>
            </div>

            <p className="text-gray-600 text-[15px] mt-3 line-clamp-2 leading-relaxed">
              {ticket.description}
            </p>

            {/* Bottom Info */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-xl
                ${ticket.priority === "High" && "bg-red-100 text-red-700"}
                ${ticket.priority === "Medium" && "bg-amber-100 text-amber-700"}
                ${ticket.priority === "Low" && "bg-green-100 text-green-700"}
              `}
                >
                  #{ticket.id}
                </span>
                <span
                  className={`font-medium text-xs uppercase tracking-wider
                ${ticket.priority === "High" && "text-red-600"}
                ${ticket.priority === "Medium" && "text-amber-600"}
                ${ticket.priority === "Low" && "text-green-600"}
              `}
                >
                  {ticket.priority}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <span>{ticket.customer}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">Ticket</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Accent Bar */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default CustomerTicketCard;
