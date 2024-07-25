import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='h-screen flex justify-center items-center'>
      <p className='text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-transparent bg-clip-text'>
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage