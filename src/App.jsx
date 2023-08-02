import './styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogSize from './pages/DogSize';
import IA from './pages/IA';
import IAsize from './pages/IAsize';
import IAproductos from './pages/IAproductos';
import IAmedidas from './pages/IAmedidas';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/dogsize" element={<DogSize/>} />
					<Route path="/ia" element={<IA/>} />
					<Route path="/iasize" element={<IAsize/>} />
					<Route path="/iaproductos" element={<IAproductos/>} />
					<Route path="/iamedidas" element={<IAmedidas/>} />
				</Routes>
		</BrowserRouter>
  );
}

export default App;
