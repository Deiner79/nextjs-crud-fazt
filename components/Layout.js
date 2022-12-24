import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTask } from "../context/taskContext";
const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTask();
  return (
    <div className="bg-gray-900 h-screen">
      <header className="bg-gray-700 flex items-center text-white px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg">Task App</h1>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">
          {tasks.length} Tasks
        </span>
        <div className="flex-grow text-right">
          <button
            onClick={() => router.push("/New")}
            className=" bg-green-800 hover:bg-green-500 transition-all duration-400 font-bold px-5 py-2 rounded inline-flex items-center"
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>
      <main className="px-28 text-white">{children}</main>
    </div>
  );
};

export default Layout;
