"use client";
import { useReducer, useState } from "react";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

const TaskManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded-l text-black"
            placeholder="Enter a task"
          />
          <button
            onClick={handleAddTask}
            className="py-2 px-4 bg-blue-500 text-white rounded-r hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
        <ul className="list-disc">
          {state.tasks.map((task) => (
            <li
              key={task.id}
              className="p-2 border-b border-gray-200 flex justify-between items-center"
            >
              <span className={task.completed ? "line-through" : ""}>
                {task.text}
              </span>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                  className="py-1 px-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_TASK", payload: task.id })
                  }
                  className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
