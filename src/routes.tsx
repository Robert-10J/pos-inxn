import { createBrowserRouter } from 'react-router-dom';
import Layout from './views/Layout';
import Sales from './pages/Sales';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/productos', element: <Products/> },
      { path: '/categorias', element: <Categories/> },
      { path: '/ventas', element: <Sales/> }
    ]
  }
])