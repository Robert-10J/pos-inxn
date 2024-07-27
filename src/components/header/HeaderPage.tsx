import BackButton from '../buttons/BackButton'

const HeaderPage = ({ label }: { label: string }) => {
  return (
    <>
      <BackButton />
      <h2 className='font-bold text-3xl text-center uppercase'>{label}</h2>
    </>
  )
}

export default HeaderPage