import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/login'
import ListaEventos from './pages/ListaEventos/listaEventos'
import Homepage from './pages/Homepage/homepage'
import Contato from './pages/Contato/contato'

import './index.css'

function App() {
    return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ListaEventos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
       </BrowserRouter>
    )
}

export default App