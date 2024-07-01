import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"

const IndexPage: React.FC = () => {
  return (
    <main className="md:min-w-full md:h-screen bg-red-200">
      <Header/>
      <Sidebar/>
    </main>
  )
}

export default IndexPage