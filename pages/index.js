import { useTask } from "../context/taskContext";
import Layout from "../components/Layout";
import { VscTrash } from "react-icons/vsc";
import { useRouter } from "next/router";
export default function Home() {
  const { tasks, deleteTask } = useTask();
  const { push } = useRouter();
  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>No hay tareas</h2>
        ) : (
          <div className="w-7/12 bg">
            {tasks.map((task, i) => (
              <div
                key={task.id}
                className="bg-gray-700 hover:bg-gray-500 cursor-pointer px-20 py-5 m-2 flex justify-start items-center"
                onClick={() => {
                  push("/edit/" + task.id);
                }}
              >
                <span className="text-5xl mr-5">{i}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                  }}
                  className="bg-red-800 hover:bg-red-600 px-3 py-2 rounded inline-flex items-center"
                >
                  <VscTrash className="mr-2" />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
