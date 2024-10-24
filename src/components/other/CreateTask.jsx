import React, { useState } from "react";

const CreateTask = ({ data }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      title: title,
      description: description,
      date: date,
      category: category,
    });

    console.log(newTask);

    const data = JSON.parse(localStorage.getItem("employees"));

    // console.log(data);

    if (data && Array.isArray(data)) {
      data.forEach((elem) => {
        if (assignTo === elem.fullName) {
          if (!elem.tasks) {
            elem.tasks = [];
          }
          elem.tasks.push(newTask);
        }
      });
      
      localStorage.setItem("employees", JSON.stringify(data));
    }

    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          className="flex flex-wrap w-full items-start justify-between"
          action=""
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded border-[1px] border-emerald-200 outline-none bg-transparent"
                type="text"
                placeholder="Make UI design"
                name="taskTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded border-[1px] border-emerald-200 outline-none bg-transparent"
                type="date"
                name="taskDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded border-[1px] border-emerald-200 outline-none bg-transparent"
                type="text"
                name="taskAssign"
                placeholder="Employee name"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded border-[1px] border-emerald-200 outline-none bg-transparent"
                name="taskCategory"
                type="text"
                placeholder="Design, Dev, etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Decription</h3>
              <textarea
                className="w-full h-44 text-sm py-2 px-2 rounded border-[1px] border-emerald-200 outline-none bg-transparent"
                name="description"
                id=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button className="bg-emerald-500 w-full px-5 py-2 rounded-sm mt-3.5 transition-all hover:bg-emerald-600">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
