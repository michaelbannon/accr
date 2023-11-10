import { Routes, Route, Link } from "react-router-dom";

import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import BetForm from './components/betform/BetForm';
import NoMatch from './components/no-match/NoMatch';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="bet-form" element={<BetForm />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
};

export default App;
