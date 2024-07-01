import { OPTIONS_SIDEBAR } from "../../constants"
import LinkItem from "./LinkItem"

const Sidebar = () => {
  return (
    <aside className="shadow-lg md:h-screen w-1/6">
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
    </aside>
  )
}

export default Sidebar