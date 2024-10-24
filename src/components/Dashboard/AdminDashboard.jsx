import React, { useContext } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({data}) => {
  const authData = useContext(AuthContext);
  
  return (
    <div className=" h-screen w-full px-5 py-4">
      <Header data={data} />
      <CreateTask data={data}/>
      <AllTasks data={data}/>
    </div>
  );
};

export default AdminDashboard;
