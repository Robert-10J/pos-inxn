import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import type { RegisterUrl } from '../../types'
import { PlusIcon } from '@heroicons/react/24/solid'

interface Props {
  label: string
  url: RegisterUrl
}

const AddButton: React.FC<Props> = ({ label, url  }) => {
  return (
    <Link 
      to={url}
      className='flex items-center gap-4'
    >
      <Button className='rounded-lg w-20' color='green'>
        <PlusIcon />
      </Button>
      <p className='text-xl font-medium'>{label}</p>
    </Link>
  )
}

export default AddButton