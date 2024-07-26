import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import { OptionsMenus } from '../../types'

interface Props {
  itemsHead: OptionsMenus[]
}

const RowTableHead: React.FC<Props> = ({ itemsHead }) => {
  return (
    <>
      <tr>
        {itemsHead.map(({option, id}) => (
          <th
            key={id}
            className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
          >
            <Typography
              variant='small'
              color='blue-gray'
              className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
            >
              {option}{' '}
              {id !== itemsHead.length - 1 && (
                <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
              )}
            </Typography>
          </th>
        ))}
      </tr>
    </>
  )
}

export default RowTableHead