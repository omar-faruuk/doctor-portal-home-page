import logo from './logo.svg';
import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatients from './Components/Dashboard/Dashboard/AllPatients/AllPatients';
import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';

export const userContex = createContext();

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  
  return (
    <userContex.Provider value={[logedInUser, setLogedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard/appointment' element={<Dashboard />} />
          <Route path='dashboard/adddoctor' element={<AddDoctor />} />
          <Route path='/dashboard' element={<DashboardMain />} />
          <Route path='dashboard/patients' element={<AllPatients />} />
          <Route path='appointment' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </userContex.Provider>
  );
}

export default App;
