import ListShop from '../components/buttons/ListShop'
import AddButton from '../components/buttons/AddButton'
import BackButton from '../components/buttons/BackButton'
import SearchInput from '../components/inputs/SearchInput'
import FilterInput from '../components/inputs/FilterInput'
import { TableBody } from '../components/tables/TableBody'
import { FILTERS, HEAD_TABLE_PRODUCTS, TABLE_ROWS } from '../constants'

const Products = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <div className='sticky top-0 z-50 w-full bg-gray-100 my-4'>
        <div className='flex justify-start items-center gap-x-[31rem] py-3 h-12'>
          <BackButton />
          <h2 className='font-bold text-4xl text-center'>Productos</h2>
        </div>

        <div className='flex justify-between items-center h-20 mt-5 px-10'>
          <div className="w-1/2">
            <AddButton label={'Agregar Producto'} />
          </div>
          <div className="w-1/2">
            <SearchInput/>
          </div>
        </div>

        <div className='flex items-center justify-between my-5 gap-x-5'>
          <p className='px-12 text-lg'>Filtros:</p>
          <div>
            <FilterInput label={'Categoría'} options={FILTERS} />
          </div>
          
          <div>
            <FilterInput label={'Sucursales'} options={FILTERS} />
          </div>

          <div className='mr-4'>
            <ListShop/>
          </div>
        </div>
      </div>

      <div>
        <TableBody
          dataRowHead={HEAD_TABLE_PRODUCTS}
          dataRowsBody={TABLE_ROWS}
        />
      </div>
    </div>
  )
}

export default Products