import React from "react";

const TaskStatus = ({
  item,
  tickets,
  setTickets,
  resolvedTickets,
  setResolvedTickets,
}) => {
  const handleCompleteBtn = () => {
    setResolvedTickets([...resolvedTickets, item]);

    const filterTickets = tickets.filter((ticket) => item.id !== ticket.id);
    setTickets(filterTickets);
  };

  return (
    <div className="group bg-white shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-out rounded-3xl overflow-hidden border border-gray-100 hover:border-green-200">
      <div className="card-body p-8 items-center text-center">
        <h2 className="card-title text-2xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-6">
          {item.title}
        </h2>

        <button
          onClick={handleCompleteBtn}
          className="btn w-full text-lg font-medium text-white bg-green-500 hover:bg-green-600 active:bg-green-700 
                 transition-all duration-300 ease-out 
                 hover:scale-105 active:scale-95 
                 shadow-md hover:shadow-lg 
                 rounded-2xl py-3"
        >
          Complete
        </button>
      </div>

      {/* Optional bottom accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default TaskStatus;
