import AddButton from '../components/buttons/AddButton'
import BackButton from '../components/buttons/BackButton'
import SearchInput from '../components/inputs/SearchInput'
import { TableBody } from '../components/tables/TableBody'
import { HEAD_TABLE_CATEGORIES, TABLE_ROWS } from '../constants'

const Categories = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <div className='sticky top-0 z-50 w-full bg-gray-100 my-4'>
        <div className='flex justify-start items-center gap-x-[31rem] py-3 h-12'>
          <BackButton />
          <h2 className='font-bold text-3xl text-center uppercase'>Categorías</h2>
        </div>

        <div className='flex justify-end items-center h-20 mt-5 px-10'>
          <div className="w-1/2">
            <AddButton label={'Agregar Categoría'} />
          </div>
          <div className="w-1/2">
            <SearchInput />
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

export default Categories