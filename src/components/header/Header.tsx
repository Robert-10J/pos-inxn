import { BuildingStorefrontIcon, UserCircleIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="h-28 flex items-center px-1 font-bold text-4xl text-white">
      <div className="flex justify-between items-center p-5 w-full h-5/6 rounded-lg bg-gradient-to-r from-purple-800 to-blue-800">

        <div className="flex items-center gap-2">
          <UserCircleIcon className="h-16"/>
          <p>Administrador</p>
        </div>

        <div className="flex items-center gap-2">
          <BuildingStorefrontIcon className="h-16"/>
          <p>Primaria</p>
        </div>

      </div>
    </header>
  )
}

export default Header