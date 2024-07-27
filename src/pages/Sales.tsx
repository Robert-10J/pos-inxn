import HeaderPage from '../components/header/HeaderPage'
import FilterInput from '../components/inputs/FilterInput'
import { TableBody } from '../components/tables/TableBody'
import { FILTERS, HEAD_TABLE_CATEGORIES, TABLE_ROWS } from '../constants'

const Sales = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='sticky top-0 z-50 w-full bg-gray-100 my-4'>
        <div className='flex justify-start items-center gap-x-[31rem] py-3 h-12'>
        <HeaderPage label={'Ventas'}/>
        </div>
      </div>

      <div className='flex items-center justify-between my-5 gap-x-5'>
        <p className='px-12 text-lg'>Filtros:</p>

        <div className='flex justify-start items-center gap-x-5 w-full'>
          <div>
            <FilterInput label={'Productos'} options={FILTERS} />
          </div>

          <div className='mr-4'>
            <FilterInput label={'Categoría'} options={FILTERS} />
          </div>
        </div>
      </div>

      <div>
        <TableBody
          dataRowHead={HEAD_TABLE_CATEGORIES}
          dataRowsBody={TABLE_ROWS}
        />
      </div>
    </div>
  )
}

export default Sales