import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoiceGroupPage from './components/ChoiceGroup/ChoiceGroupPage';
import YourDetailsPage from './components/ChoiceGroup/YourDetailsPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoiceGroupPage />} />
        <Route path="/yourdetails" element={<YourDetailsPage />} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;

