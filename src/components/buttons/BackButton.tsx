import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

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
      <ArrowLeftIcon className='w-12 text-purple-700'/>
    </Link>
  )
}

export default BackButton