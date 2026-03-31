import React from "react";

const CustomerTicketsSection = () => {
  return (
    <div className="max-w-450 mx-auto py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {/* Left Column - Customer Tickets */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Customer Tickets
          </h2>

          <div className=" overflow-hidden grid  lg:grid-cols-2 gap-4">
            {/* Ticket 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">
                    Login Issues - Can't Access Account
                  </p>
                  <div>
                    <div className="flex w-fit items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Open
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Customer is unable to log in to their account. They've tried
                    resetting their password multiple times but still...
                  </p>
                  <div className="flex items-center gap-3 mt-4 text-xs">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                      #1001
                    </span>
                    <span className="text-red-600 font-semibold">
                      HIGH PRIORITY
                    </span>
                    <span className="text-gray-500">John Smith</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">1/15/2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">
                    Payment Failed - Card Declined
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    Customer attempted to pay using Visa ending 1234 but the
                    payment keeps failing despite sufficient balance.
                  </p>
                  <div className="flex items-center gap-3 mt-4 text-xs">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                      #1002
                    </span>
                    <span className="text-red-600 font-semibold">
                      HIGH PRIORITY
                    </span>
                    <span className="text-gray-500">Sarah Johnson</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">1/16/2024</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Open
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Task Status */}
        <div className=" overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Task Status
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <p className="text-gray-600 mb-6">
              Select a ticket to add to Task Status
            </p>

            <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center">
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
