import './styles/App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogSize from './pages/DogSize';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/dogsize" element={<DogSize/>} />
				</Routes>
		</BrowserRouter>
  );
}

export default App;
