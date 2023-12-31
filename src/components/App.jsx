 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Catalog from 'Pages/Catalog/Catalog';
import Favorites from 'Pages/Favorites/Favorites';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />}></Route>
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
