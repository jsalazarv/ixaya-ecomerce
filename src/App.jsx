import './App.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Orders } from './pages/Orders/Orders';
import { Navbar } from './components/Navbar/Navbar';
import { Checkout } from './pages/Checkout/Checkout';
import { OrderDetail } from './pages/OrderDetail/OrderDetail';
import { Footer } from './components/Footer/Footer';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <div className="general-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer phrase="Coded with" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
