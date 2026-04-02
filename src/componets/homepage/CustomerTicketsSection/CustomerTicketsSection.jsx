import React, { use } from "react";
import CustomerTicketCard from "./CustomerTicketCard";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const CustomerTicketsSection = ({
  promiseCustomerTicket,
  tickets,
  setTickets,
  resolvedTickets,
  setResolvedTickets,
}) => {
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
                <CustomerTicketCard
                  key={ticket.id}
                  ticket={ticket}
                  tickets={tickets}
                  setTickets={setTickets}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Task Status */}
          <div className=" col-span-1 space-y-5 overflow-hidden p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Task Status
            </h2>

            {tickets.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 py-10 px-6 lg:py-16 lg:px-10">
                <div className="flex flex-col items-center text-center">
                  {/* Large Icon */}
                  <div className="w-24 h-24 bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                    <span className="text-6xl opacity-80">📋</span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                    No tasks yet
                  </h2>

                  <p className="text-gray-500 text-[14px] lg:text-[17px] leading-relaxed max-w-md">
                    Your task list is currently empty. <br />
                    When you add new tasks, they will appear here.
                  </p>
                </div>
              </div>
            ) : (
              tickets.map((item) => (
                <TaskStatus
                  key={item.id}
                  item={item}
                  tickets={tickets}
                  setTickets={setTickets}
                  resolvedTickets={resolvedTickets}
                  setResolvedTickets={setResolvedTickets}
                />
              ))
            )}

            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
              Resolved Task
            </h2>

            {resolvedTickets.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6  lg:p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-5xl">🏆</span>
                  </div>

                  <h2 className="card-title text-2xl font-semibold text-gray-800 mb-3">
                    Resolved Task is empty
                  </h2>

                  <p className="text-gray-500 text-[14px] lg:text-[17px] max-w-xs">
                    No resolved tasks found. <br />
                    When you complete tasks, they will show up here.
                  </p>
                </div>
              </div>
            ) : (
              resolvedTickets.map((item) => (
                <ResolvedTask key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsSection;
