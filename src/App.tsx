import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoiceGroupPage from './components/ChoiceGroup/ChoiceGroupPage';
import YourDetailsPage from './components/ChoiceGroup/YourDetailsPage';
import YourRepresentativePage from './components/ChoiceGroup/YourRepresentativePage';
import './App.css';
import IncidentAdd from './components/ChoiceGroup/IncidentAdd';
import Complaint from './components/ChoiceGroup/Complaint';
import ComplaintCont from './components/ChoiceGroup/ComplaintCont';
import ComplaintContAgain from './components/ChoiceGroup/ComplaintContAgain';
import FinalSub from './components/ChoiceGroup/FinalSub';
import Success from './components/ChoiceGroup/Success';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoiceGroupPage />} />
        <Route path="/yourDetails" element={<YourDetailsPage />} />
        <Route path="/your-representative" element={<YourRepresentativePage />} /> 
        <Route path='/incident' element={<IncidentAdd/>}/>
        <Route path='/complaint' element={<Complaint/>}/>
        <Route path='/complaint-cont' element={<ComplaintCont/>}/>
        <Route path='/cont-again' element={<ComplaintContAgain/>}/>
        <Route path='/final-sub' element={<FinalSub/>}/>
        <Route path='/success-page' element={<Success/>}/>
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;

