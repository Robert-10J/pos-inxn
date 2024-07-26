import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react'
import RowTableHead from './RowTableHead'
import RowTableBody from './RowTableBody'
 
export function TableBody({ dataRowHead, dataRowsBody }) {
  return (
    <Card className='h-full w-full'>
      <CardBody className='overflow-scroll px-0'>
        <table className='-mt-7 w-full min-w-max table-auto text-left'>
          <thead>
            <RowTableHead itemsHead={dataRowHead}/>
          </thead>
          <tbody>
            <RowTableBody rowBody={dataRowsBody}/>
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1 of 10
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}