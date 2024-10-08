export interface DataLogin {
  username: string
  password: string
}

export interface OptionsMenus {
  id: number
  option: string
  link?: string
  icon?: React.ReactHTMLElement
}

export interface HeadTables {
  id: number
  headTitle: string
}

interface Filters {
  id: number
  option: string
}

export type RegisterUrl = '/productos/registrarProducto' | '/categorias/registrarCategoria'