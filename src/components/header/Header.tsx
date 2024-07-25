import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import UserAvatar from './Avatar'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 w-full h-5/6 rounded-lg bg-gradient-to-r from-purple-800 to-blue-800">
      <div className="flex items-center gap-2">
        <UserAvatar/>
      </div>

      <div className="flex items-center gap-2">
        <BuildingStorefrontIcon className="h-16" />
        <p>Primaria</p>
      </div>

    </div>

  )
}

export default Header