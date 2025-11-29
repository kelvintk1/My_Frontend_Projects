import './App.css'
import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/startPage'
import ResultPage from './pages/ResultPage'
import QuestionsPage from './pages/QuestionsPage'
import DarkVeil from './components/DarkVeil';
import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen min-w-full overflow-hidden">
      {/* Background WebGL canvas */}
      <DarkVeil className="fixed inset-0 w-screen h-screen z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
