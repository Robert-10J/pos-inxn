import { OptionsMenus } from "./types";

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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg`
  },
  {
    id: 2,
    option: 'Categorias',
    link: '/categorias',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>`
  },
  {
    id: 3,
    option: 'Ventas',
    link: '/ventas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>`
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

