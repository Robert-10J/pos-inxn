import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Products from "./pages/Products";
import IndexPage from "./pages/IndexPage";
import Categories from "./pages/Categories";
import Sales from "./pages/Sales";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/productos" element={<Products/>} />
          <Route path="/categorias" element={<Categories/>} />
          <Route path="/ventas" element={<Sales/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}