import { Input } from '@material-tailwind/react'
import AddButton from '../components/buttons/AddButton'
import BackButton from '../components/buttons/BackButton'
import { TableBody } from '../components/tables/TableBody'

// chevron-left
const Products = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <div className='flex justify-start items-center gap-x-[31rem] py-3 h-12'>
        <BackButton />
        <h2 className='font-bold text-4xl text-center'>Productos</h2>
      </div>

      <div className='flex justify-between items-center h-20 mt-5 px-10'>
        <div className="w-1/2">
          <AddButton label={'Agregar Producto'}/>
        </div>
        <div className="w-1/2">
          <Input label="Buscar" placeholder="Buscar" crossOrigin={false} color='purple'size='lg'/>
        </div>
      </div>

      <div>

      </div>
      
      <div>
        <TableBody />
      </div>
    </div>
  )
}

export default Products