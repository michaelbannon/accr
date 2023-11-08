import { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
};

const Home = () => {
  return (
    <h1>Homepage</h1>
  )
};

const Dashboard = () => {
  return (
    <h1>Dashboard</h1>
  )
};

const NoMatch = () => {
  return (
    <h1>404</h1>
  )
}

export default App;
