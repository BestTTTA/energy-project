"use client";
import { useSidebar } from "./useSidebar";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <div className="flex flex-row items-center lg:relative absolute" aria-label="Sidebar">
      <div
        className={`transition-all duration-500 ease-in-out border-2 ${
          isSidebarOpen ? "w-60 h-screen bg-white z-30" : "w-0 h-screen bg-white z-30"
        }`}
      ></div>
      <button
        onClick={toggleSidebar}
        className="w-4 h-10 border-2 bg-white hover:bg-blue-500 rounded-r-lg"
      >
        {isSidebarOpen ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;
