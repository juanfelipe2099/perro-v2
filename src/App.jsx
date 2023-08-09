import './styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IA from './pages/IA';
import IAsize from './pages/IAsize';
import IAproductos from './pages/IAproductos';
import IAmedidas from './pages/IAmedidas';
import IAGorras from './pages/IAGorras';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<IA/>} />
					<Route path="/iasize" element={<IAsize/>} />
					<Route path="/iaproductos" element={<IAproductos/>} />
					<Route path="/iamedidas" element={<IAmedidas/>} />
					<Route path="/iagorras" element={<IAGorras/>} />
				</Routes>
		</BrowserRouter>
  );
}

export default App;
