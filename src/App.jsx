import React from 'react';

import Index from './components/pages/incio.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        

      </Routes>
    </>
  );
}

export default App
