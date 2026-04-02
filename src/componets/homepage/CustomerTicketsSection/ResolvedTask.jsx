import React from "react";

const ResolvedTask = ({ item }) => {
  return (
    <div className="card bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out rounded-2xl overflow-hidden group">
      <div className="card-body p-4 lg:p-6 items-center text-center">
        
        <h2 className="card-title text-md lg:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {item.title}
        </h2>

        {/*  description */}
        {/* <p className="text-gray-500 mt-2 text-sm line-clamp-2">Your description here</p> */}
      </div>

      {/* Optional bottom accent line with hover animation */}
      <div className="h-1 bg-linear-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ResolvedTask;
