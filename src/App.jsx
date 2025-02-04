import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import FollowUps from './pages/FollowUps';
import Visits from './pages/Visits';
import FollowUpForm from './components/FollowUpForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= { <Dashboard /> } />
        <Route path='followups' element={ <FollowUps /> } ></Route>
        <Route path='visits' element={ <Visits /> } ></Route>
        <Route path='addFollowup' element={ <FollowUpForm /> } ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;