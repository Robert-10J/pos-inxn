import { Button } from '@material-tailwind/react'

const AddButton = ({ label } : { label: string }) => {
  return (
    <div className='flex items-center gap-4'>
      <Button className='rounded-lg w-20' color='green'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15">
          <path fill="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip="evenodd" />
        </svg>
      </Button>

      <p className='text-xl font-medium'>{label}</p>
    </div>
  )
}

export default AddButton