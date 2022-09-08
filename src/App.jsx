import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products/Products';
import { Orders } from './pages/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
