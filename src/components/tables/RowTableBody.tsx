import { Avatar, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { TABLE_ROWS } from '../../constants';
import { PencilIcon } from '@heroicons/react/24/solid';

const RowTableBody = ({ rowBody }) => {
  return (
    <>
      {rowBody.map(
        ({ img, name, email, job, org, online, date }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast
            ? 'p-4'
            : 'p-4 border-b border-blue-gray-50';

          return (
            <tr key={name}>
              <td className={classes}>
                <div className='flex items-center gap-3'>
                  <Avatar src={img} alt={name} size='sm' />
                  <div className='flex flex-col'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal opacity-70'
                    >
                      {email}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className='flex flex-col'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {job}
                  </Typography>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal opacity-70'
                  >
                    {org}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <div className='w-max'>
                  <Chip
                    variant='ghost'
                    size='sm'
                    value={online ? 'online' : 'offline'}
                    color={online ? 'green' : 'blue-gray'}
                  />
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal'
                >
                  {date}
                </Typography>
              </td>
              <td className={classes}>
                <Tooltip content='Edit User'>
                  <IconButton variant='text'>
                    <PencilIcon className='h-4 w-4' />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        },
      )}
    </>
  )
}

export default RowTableBody