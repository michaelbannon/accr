import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import data from './data/mock-data'
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="betform" element={<BetForm />} />
      </Route>
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
    <>
      <h1>Dashboard</h1>
      <Outlet/>
    </>
  )
};

const sortByHighestOdds = (data) => {
  const sortedOdds = [];
  data.forEach((game) => {
    const sortedGame = {...game};
    sortedGame.bookmakers[0].markets[0].outcomes.sort((a, b) => b.price - a.price);
    sortedOdds.push(sortedGame);
  })
  return sortedOdds
}

const createBet = (betFormObj, sortedOdds) => {
  const { stake, risk, gameAmount } = betFormObj;
  const riskEval = [2, 1, 0];
  const bet = sortedOdds.map((betOdds) => {
    const selectedBet = betOdds.bookmakers[0].markets[0].outcomes[riskEval[risk]];
    return {
	    teams: `${betOdds.home_team} v ${betOdds.away_team}`,
	    bet: selectedBet
	  }
  });
  const betLength = bet.length - 1;
  let randomStartPoint = bet.length;
  while ((randomStartPoint + gameAmount) > betLength) {
    randomStartPoint = Math.floor(Math.random() * betLength);
  }
  return bet.slice(randomStartPoint, randomStartPoint + gameAmount);
}

const BetForm = () => {
  const [betForm, setBetForm] = useState({});
  const [sortedOdds, setSortedOdds] = useState([]);

  useEffect(() => {
    setSortedOdds(sortByHighestOdds(data))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBetForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const testObj = {
      stake: 10,
      risk: 2,
      gameAmount: 4
    }
  }

  return (
    <form className="bet-form" onSubmit={handleSubmit}>
      <div className="bet-form__stake">
        <label htmlFor="stake">Stake</label>
        <input name="stake" type="number" min="0.00" max="10000.00" step="0.01" />
      </div>
      <div className="bet-form__risk">
        <label htmlFor="risk">Risk</label>
        
      </div>
      <button>Submit</button>
    </form>
    
  )
}

const NoMatch = () => {
  return (
    <h1>404</h1>
  )
};

export default App;
