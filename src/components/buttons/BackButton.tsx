import { createElement } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Link 
      to={'..'}
      onClick={ e => {
        e.preventDefault()
        navigate(-1)
      }}
    >
      {createElement(ArrowLeftIcon, { className: 'w-12 text-purple-700', strokeWidth: 5 })}
    </Link>
  )
}

export default BackButton