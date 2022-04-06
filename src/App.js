import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Formulario from './Pages/Formulario';
import Tabela from './Pages/Tabela';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/formulario" element={<Formulario/>}/>
          <Route path="/tabela" element={<Tabela/>}/>
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
