import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import MapView from './pages/MapView';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">🏘️ Township Directory</h1>
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/chatbot" className="text-blue-600 hover:underline">Chatbot</Link>
            <Link to="/map" className="text-blue-600 hover:underline">Map</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/map" element={<MapView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="text-center text-xs p-4 text-gray-500">
        PWA: <span className="text-green-600">✓ Installed</span> | Vite + React + Tailwind © 2025
      </footer>
    </div>
  );
}



