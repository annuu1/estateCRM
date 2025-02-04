import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import FollowUps from './pages/FollowUps';
import Visits from './pages/Visits';
import FollowUpForm from './components/FollowUpForm';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= { <h1>I am home</h1> } />
        <Route path='followups' element={ <FollowUps /> } ></Route>
        <Route path='visits' element={ <Visits /> } ></Route>
        <Route path='addFollowup' element={ <FollowUpForm /> } ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;