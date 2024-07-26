import { Link, useLocation } from 'react-router-dom'
import { OptionsMenus } from '../../types'
import { BG_COLOR } from '../../constants'

const LinkItem = ({ id, option, link, icon: Icon }: OptionsMenus) => {

  const url = useLocation()
  const isActive = url.pathname === link

  return (
    <li 
      className={`flex items-center justify-self-end gap-1 py-5 px-2 hover:bg-purple-900 hover:text-white
        ${ isActive ? BG_COLOR : '' }  
      `}
      key={id}
    >
      <Icon className="w-8" />
      <Link 
        to={link || '#'}
        className="text-xl w-full"
      >
        {option}
      </Link>
    </li>
  )
}

export default LinkItem