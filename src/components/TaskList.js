import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div className="flex flex-col gap-3 bg-gray-900 container mx-auto p-10 lg:max-w-4xl min-h-[300px] ">
      <TaskItem />
    </div>
  );
};

export default TaskList;
