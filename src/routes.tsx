import { createBrowserRouter } from 'react-router-dom';
import Layout from './views/Layout';
import Sales from './pages/Sales';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ErrorPage from './pages/ErrorPage';
import RegisterProduct from './pages/RegisterProduct';
import RegisterCategory from './pages/RegisterCategory';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/productos', element: <Products/> },
      { path: '/productos/registrarProducto', element: <RegisterProduct/> },
      { path: '/categorias', element: <Categories/> },
      { path: '/categorias/registrarCategoria', element: <RegisterCategory/> },
      { path: '/ventas', element: <Sales/> }
    ]
  }
])