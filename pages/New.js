import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useTask } from "../context/taskContext";
import { useRouter } from "next/router";
const TaskFormPage = () => {
  const [Task, setTask] = useState({
    title: "",
    description: "",
  });
  const { createTask, updateTask, tasks } = useTask();
  const { push, query } = useRouter();
  const handleChange = (e) => {
    setTask({ ...Task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.id) {
      createTask(Task.title, Task.description);
    } else {
      updateTask(query.id, Task);
    }

    push("/");
  };
  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);
  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <form className="bg-gray-700 p-10 h-2/4 mt-3" onSubmit={handleSubmit}>
          <h1 className="text-bold font-black text-3xl mb-7">
            {query.id ? "Update Task" : "New Task"}
          </h1>
          <input
            value={Task.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Escribe un titulo"
            className="w-full px-4 py-3 mb-5 bg-gray-800 focus:text-gray-100 focus:outline-none"
          ></input>
          <textarea
            value={Task.description}
            name="description"
            onChange={handleChange}
            className="w-full px-4 py-3 mb-5 bg-gray-800 focus:text-gray-100 focus:outline-none"
            rows="2"
            placeholder="Escribe una descripcion"
          ></textarea>
          <button
            disabled={!Task.title}
            className=" bg-green-800 hover:bg-green-500 transition-all duration-400 font-bold px-5 py-2 rounded disabled:opacity-30"
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default TaskFormPage;
