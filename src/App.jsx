import React, { Suspense } from 'react';
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
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Contacts />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/sneakers/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullItem />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
