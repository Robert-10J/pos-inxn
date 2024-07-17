import { Link } from 'react-router-dom'
import { OptionsMenus } from '../../types'

const LinkItem = ({ id, option, link, icon: Icon }: OptionsMenus) => {
  return (
    <li className="flex items-center justify-self-end gap-1 py-5 px-2 hover:bg-purple-900 hover:text-white" key={id}>
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