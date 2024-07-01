import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}