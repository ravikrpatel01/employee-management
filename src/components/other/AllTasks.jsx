import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  return (
    <div
      
      className="bg-[#1c1c1c] p-5 rounded mt-5"
    >
      <div className="bg-red-900 py-2 mb-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 font-semibold">Employee Name</h2>
        <h3 className="w-1/5 font-semibold">New Task</h3>
        <h5 className="w-1/5 font-semibold">Active</h5>
        <h5 className="w-1/5 font-semibold">Completed</h5>
        <h5 className="w-1/5 font-semibold">Failed</h5>
      </div>
      <div id="alltasks" className="">
        {authData.employeesData.map((employee) => {
          return (
            <div
              key={employee.id}
              className="bg-transparent border-[1px] border-emerald-800 py-2 mb-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 ">{employee.fullName}</h2>
              <h3 className="w-1/5 text-yellow-400 text-lg">{employee.taskCount.newTask}</h3>
              <h5 className="w-1/5 text-blue-200 text-lg" >{employee.taskCount.active}</h5>
              <h5 className="w-1/5 text-white-600 text-lg">{employee.taskCount.completed}</h5>
              <h5 className="w-1/5 text-red-800 text-lg" >{employee.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
