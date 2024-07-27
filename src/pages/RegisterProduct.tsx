import { Button, Input, Option, Select } from '@material-tailwind/react'
import HeaderPage from '../components/header/HeaderPage'

const RegisterProduct = () => {
  return (
    <div className='my-5 h-full'>
      <HeaderPage label={'Agregar Producto'} />

      <form
        action=""
        className='mt-10 mx-10'
      >
        <div className="flex flex-col">
          <div className='flex items-center gap-x-5'>
            <div className='w-1/4'>
              <Input
                label='Código'
                color='pink'
                size='lg'
                crossOrigin={''}
              />
            </div>

            <div className='w-1/2'>
              <Input
                label='Nombre del producto'
                color='pink'
                size='lg'
                crossOrigin={''}
              />
            </div>
          </div>

          <div className='flex items-center justify-start gap-x-20 mt-10'>
            <div>
              <Select label='Categoría'>
                <Option>Elige:</Option>
              </Select>
            </div>
            <div>
              <Select label='Presentación'>
                <Option>Elige:</Option>
              </Select>
            </div>
            <div>
              <Input
                label='Cantidad de piezas'
                color='pink'
                size='lg'
                crossOrigin={''}
              />
            </div>
          </div>

          <div className='flex items-center justify-start gap-x-20 mt-10'>
            <div>
              <Input
                label='Precio por pieza'
                color='pink'
                size='lg'
                crossOrigin={''}
              />
            </div>

            <div>
              <Input
                label='Fecha de registro'
                color='pink'
                size='lg'
                crossOrigin={''}
                type='date'
              />
            </div>
          </div>

          <div className='flex items-center justify-between gap-x-10 mt-10'>
            <div className="w-1/2">
              <Button
                color='purple'
                size='lg'
                className='w-full'
              >
                Registrar
              </Button>
            </div>
            <div className="w-1/2">
              <Button
                color='red'
                size='lg'
                className='w-full'
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default RegisterProduct