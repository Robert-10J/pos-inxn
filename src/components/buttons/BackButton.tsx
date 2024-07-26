import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { createElement } from 'react'

const BackButton = () => {
  return (
    <a href="#buttons-with-link">
      {createElement(ArrowLeftIcon, { className: 'w-12 text-purple-700', strokeWidth: 5 })}
    </a>
  )
}

export default BackButton