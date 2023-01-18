import { FiEdit, FiTrash } from "react-icons/fi";
const TaskItem = () => {
  return (
    <div>
      <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-900 hover:to-gray-800 group">
        <div className="task-item-left flex gap-3">
          <span>
            <input type="checkbox" className="accent-teal-500" />
          </span>
          <p className={" group-hover:text-teal-500 "}>hello</p>
        </div>
        <div className="task-item-right flex gap-3 text-gray-500 ">
          <button>
            <FiEdit className="hover:text-teal-500 outline-none cursor-pointer duration-300 " />
          </button>
          <button>
            <span>
              <FiTrash className="hover:text-red-500" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
