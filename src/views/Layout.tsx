import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"

const Layout: React.FC = () => {
  return (
    <div className="flex md:flex-col">
      <Header/>

      <main className="w-full md:h-screen overflow-scroll md:flex">
        <Sidebar/>
        <div className="w-full p-5">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default Layout