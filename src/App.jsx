import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import FullItem from './pages/FullItem';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Cart from './pages/Cart';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sneakers/:id" element={<FullItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
