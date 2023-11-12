import { Routes, Route, Link } from "react-router-dom";

import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import DashboardHome from "./components/dashboard-home/DashboardHome";
import Bet from './components/bet/Bet';
import NoMatch from './components/no-match/NoMatch';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="bet" element={<Bet />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
};

export default App;
