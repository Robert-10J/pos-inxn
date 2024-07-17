import { OPTIONS_SIDEBAR } from '../../constants'
import LinkItem from './LinkItem'

const Sidebar = () => {
  return (
    <nav>
      <ul>
        {OPTIONS_SIDEBAR.map(option => (
          <LinkItem
            key={option.id}
            id={option.id}
            option={option.option}
            icon={option.icon}
            link={option.link}
          />
        ))}
      </ul>
    </nav>

  )
}

export default Sidebar