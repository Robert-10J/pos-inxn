import BackButton from '../buttons/BackButton'

const HeaderPage = ({ label }: { label: string }) => {
  return (
    <div className='flex justify-start items-center gap-x-10 py-3 h-12'>
      <BackButton />
      <h2 className='font-bold text-3xl text-center uppercase'>{label}</h2>
    </div>

  )
}

export default HeaderPage