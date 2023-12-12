import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoiceGroupPage from './components/ChoiceGroup/ChoiceGroupPage';
import YourDetailsPage from './components/ChoiceGroup/YourDetailsPage';
import YourRepresentativePage from './components/ChoiceGroup/YourRepresentativePage';
import './App.css';
import IncidentAdd from './components/ChoiceGroup/IncidentAdd';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoiceGroupPage />} />
        <Route path="/yourDetails" element={<YourDetailsPage />} />
        <Route path="/your-representative" element={<YourRepresentativePage />} /> 
        <Route path='/Incident' element={<IncidentAdd/>}/>
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;

