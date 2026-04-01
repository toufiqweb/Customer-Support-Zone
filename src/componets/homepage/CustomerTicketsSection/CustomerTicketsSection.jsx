import React, { use } from "react";
import CustomerTicketCard from "./CustomerTicketCard";

const CustomerTicketsSection = ({promiseCustomerTicket}) => {

  const customerTickets = use(promiseCustomerTicket)

  return (
    <div className="max-w-450 mx-auto py-20 px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {/* Left Column - Customer Tickets */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Customer Tickets
          </h2>

          <div className=" grid  xl:grid-cols-2 gap-4">
           

            {
              customerTickets.map(ticket => <CustomerTicketCard key={ticket.id} ticket={ticket}/>)
            }
          </div>
        </div>

        {/* Right Column - Task Status */}
        <div className="bg-red-600 col-span-1 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Task Status
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
            <p className="text-gray-600 mb-6">
              Select a ticket to add to Task Status
            </p>

            <div className="border border-dashed border-gray-300 rounded-2xl p-x2 py-5 lg:p-12 text-center">
              <div className="text-gray-400 text-lg font-medium mb-1">
                Resolved Task
              </div>
              <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsSection;
