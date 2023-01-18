const AddTask = () => {
  return (
    <form className="container mx-auto bg-gray-900 lg:max-w-4xl flex justify-between p-10 ">
      <input
        required
        type="text"
        placeholder="what things to do?"
        className="bg-transparent outline-none border-b-2 py-2 px-5 border-gray-400 focus:border-teal-600"
      />
      <button
        type="submit"
        className=" bg-teal-900/30  border-2 border-teal-600 px-5 py-2 rounded text-teal-500 hover:bg-teal-600 hover:text-gray-900 duration-300 "
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
