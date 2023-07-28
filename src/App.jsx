import './styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogSize from './pages/DogSize';
import IA from './pages/IA';
import IAsize from './pages/IAsize';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/dogsize" element={<DogSize/>} />
					<Route path="/ia" element={<IA/>} />
					<Route path="/iasize" element={<IAsize/>} />
				</Routes>
		</BrowserRouter>
  );
}

export default App;
