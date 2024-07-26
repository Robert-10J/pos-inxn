import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Layout: React.FC = () => {
  return (
    <div className='flex md:flex-col h-screen'>
      <header className="h-24 mt-1 px-1 flex items-center font-bold text-4xl text-white">
       <Header/>
      </header>

      <div className='h-full flex'>
        <aside className='shadow-lg max-h-full w-1/6 mt-1'>
          <Sidebar/>
        </aside>
        
        <main className='w-5/6 h-full px-4 overflow-scroll'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout