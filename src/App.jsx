import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import FullItem from './pages/FullItem';
import FAQ from './pages/FAQ';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/sneakers/:id" element={<FullItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
