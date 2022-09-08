import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Orders } from './pages/Orders/Orders';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
