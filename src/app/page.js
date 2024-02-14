import Sidebar from "./components/Sidebar/sidebar";
import Tab from "./components/Tab/tab";
import Navbar from "./components/Navbar/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-full">
        <aside>
          {/* <Sidebar /> */}
        </aside>
        <main className="flex-grow p-4">
          <Tab />
        </main>
      </div>
    </>
  );
}
