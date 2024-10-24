import React from "react";

const NewTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[25%] p-5 bg-yellow-300 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-base">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-5">
        {data.description}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-400 py-1 px-2 text-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
