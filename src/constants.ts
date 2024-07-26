import {
  Cog6ToothIcon,  PowerIcon, UserGroupIcon,
  CubeIcon, PresentationChartBarIcon, Square3Stack3DIcon
} from '@heroicons/react/24/solid'
import type { OptionsMenus } from './types'

export const BG_COLOR = 'bg-gradient-to-r from-purple-800 to-blue-800 text-white font-semibold'
export const TEXT_COLOR = 'bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-transparent bg-clip-text'

// Options user menu
export const OPTIONS_USER: OptionsMenus[] = [
  {
    id: 1,
    option: 'Usuarios',
    link: '/usuarios'
  },
  {
    id: 2,
    option: 'Configuración',
    link: '/configuracion'
  },
  {
    id: 3,
    option: 'Cerrar Sesión',
    link: '/logout'
  },
]

// Options to side bar menu
export const OPTIONS_SIDEBAR: OptionsMenus[] = [
  {
    id: 1,
    option: 'Productos',
    link: '/productos',
    icon: CubeIcon
  },
  {
    id: 2,
    option: 'Categorias',
    link: '/categorias',
    icon: Square3Stack3DIcon
  },
  {
    id: 3,
    option: 'Ventas',
    link: '/ventas',
    icon: PresentationChartBarIcon
  }
]

// Options to head table sales
export const HEAD_TABLE_SALES: OptionsMenus[] = [
  {
    id: 1,
    option: 'Código',
  },
  {
    id: 2,
    option: 'Descripción',
  },
  {
    id: 3,
    option: 'Cantidad',
  },
  {
    id: 4,
    option: 'Precio',
  },
  {
    id: 5,
    option: 'Total',
  },
  {
    id: 6,
    option: 'Acciones',
  },
]

//Options to head table sales information
export const HEAD_TABLE_CATEGORIES_INFO: OptionsMenus[] = [
  {
    id: 1,
    option: 'No. Venta',
  },
  {
    id: 2,
    option: 'Fecha Venta',
  },
  {
    id: 3,
    option: 'Hora Venta',
  },
  {
    id: 4,
    option: 'Vendedor',
  },
  {
    id: 5,
    option: 'Productos',
  },
  {
    id: 6,
    option: 'Total venta',
  },
]

// Options to head table products
export const HEAD_TABLE_PRODUCTS: OptionsMenus[] = [
  {
    id: 1,
    option: '#',
  },
  {
    id: 2,
    option: 'Producto',
  },
  {
    id: 3,
    option: 'Precio unitario',
  },
  {
    id: 4,
    option: 'Piezas disponibles',
  },
  {
    id: 5,
    option: 'Paquetes disponibles',
  },
  {
    id: 6,
    option: 'Categoría',
  },
  {
    id: 7,
    option: 'Sucursal',
  },
  {
    id: 8,
    option: 'Acciones',
  },
]

// Options to head table categories
export const HEAD_TABLE_CATEGORIES: OptionsMenus[] = [
  {
    id: 1,
    option: '#',
  },
  {
    id: 2,
    option: 'Categoría',
  },
  {
    id: 3,
    option: 'Fecha de creación',
  },
  {
    id: 4,
    option: 'Hora de creación',
  },
  {
    id: 5,
    option: 'Acciones',
  },
]

// profile menu component
export const PROFILE_MENU_ITEMS = [
  {
    label: 'Usuarios',
    icon: UserGroupIcon,
  },
  {
    label: 'Configuración',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Cerrar Sesión',
    icon: PowerIcon,
  },
]
