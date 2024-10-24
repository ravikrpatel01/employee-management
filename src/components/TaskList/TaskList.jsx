import React, { useRef } from "react";
import AcceptedTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  const taskListRef = useRef(null);

  const handleScroll = (e) => {
    if (taskListRef.current) {
      e.preventDefault();
      taskListRef.current.scrollLeft += e.deltaY;
    }
  };
  return (
    <div
      id="tasklist"
      ref={taskListRef}
      onWheel={handleScroll}
      className=" mt-10 overflow-x-auto flex items-center rounded-md justify-start gap-5 flex-nowrap h-[50%] py-5 w-full"
      style={{ scrollBehavior: "smooth" }}
    > 
      {data.tasks.map((elem,idx)=> {
        if(elem.newTask) {
          return <NewTask key={idx} data={elem}/>
        }

        if(elem.active) {
          return <AcceptedTask key={idx} data={elem}/>
        }
        
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  );
};

export default TaskList;
