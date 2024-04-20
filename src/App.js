import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from "./pages/NotFoundPage";
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
}

export default App;
