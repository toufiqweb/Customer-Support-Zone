import React, { use } from "react";
import CustomerTicketCard from "./CustomerTicketCard";

const CustomerTicketsSection = ({ promiseCustomerTicket , tickets , setTickets  }) => {
  const customerTickets = use(promiseCustomerTicket);

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-450 mx-auto py-20 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
          {/* Left Column - Customer Tickets */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Customer Tickets
            </h2>

            <div className=" grid  xl:grid-cols-2 gap-4">
              {customerTickets.map((ticket) => (
                <CustomerTicketCard key={ticket.id} ticket={ticket}  tickets={tickets} setTickets={setTickets}/>
              ))}
            </div>
          </div>

          {/* Right Column - Task Status */}
          <div className=" col-span-1 space-y-5 overflow-hidden p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Task Status
            </h2>

            <div className="card bg-base-100 shadow-sm ">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl ">Card title!</h2>

                <button className="btn w-full text-white text-lg btn-success">
                  Complete
                </button>
              </div>
            </div>

             <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Resolved Task
            </h2>

            <div className="card bg-gray-200 shadow-sm ">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Card title!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsSection;
