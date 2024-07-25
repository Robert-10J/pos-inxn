import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Layout: React.FC = () => {
  return (
    <div className='flex md:flex-col h-screen'>
      <header className="h-28 flex items-center px-1 font-bold text-4xl text-white">
       <Header/>
      </header>

      <div className='h-full flex'>
        <aside className='shadow-lg max-h-full w-1/6'>
          <Sidebar/>
        </aside>
        
        <main className='w-5/6 h-full p-3'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout