import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import data from './data/mock-data'
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

const BetSection = ({bet}) => {
  return (
    <section className="bets">
      <p>{bet.teams}</p>
      <p>Result: {bet.bet.name}</p>
      <p>{bet.bet.price}</p>
    </section>
  )
}

const BetForm = () => {
  const [betForm, setBetForm] = useState({risk: 0});
  const [sortedOdds, setSortedOdds] = useState([]);
  const [bet, setBet] = useState([]);

  useEffect(() => {
    setSortedOdds(sortByHighestOdds(data))
  },[])

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
        gameStartTime: betOdds.commence_time,
        teams: `${betOdds.home_team} v ${betOdds.away_team}`,
        bet: selectedBet,
        stake: stake
      }
    });
    const betToBeReturned = [];
    const numberCheck = [];
    while (betToBeReturned.length < gameAmount) {
      let randomNumber = parseInt(Math.abs(Math.floor(Math.random() * bet.length - 1)));
      if (!numberCheck.includes(randomNumber)) {
        numberCheck.push(randomNumber);
        betToBeReturned.push(bet[randomNumber]);
      }
    }
    return betToBeReturned;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBetForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBet(createBet(betForm, sortedOdds));
  }

  return (
    <>
    <form className="bet-form" onSubmit={handleSubmit}>
      <div className="bet-form__stake">
        <label htmlFor="stake">Stake</label>
        <input name="stake" type="number" min="0.00" max="10000.00" step="0.01" onChange={handleChange} />
      </div>
      <div className="bet-form__risk">
        <label htmlFor="risk">Risk</label>
        <select name="risk" onChange={handleChange}>
          <option value="0">Low Risk</option>
          <option value="1">Medium Risk</option>
          <option value="2">High Risk</option>
        </select>
      </div>
      <div className="bet-form__games">
        <label htmlFor="gameAmount">Game count</label>
        <input name="gameAmount" type="number" min="1" max={sortedOdds.length} step="1" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
    {bet.length > 0 && (
      bet.map((newBet, i) => {
        return <BetSection key={i} bet={newBet} />
      })
    )}
    {bet.length > 0 && (
      <p>Winning amount: £{bet.reduce((acc, current) => acc * current.bet.price, bet[0].stake).toFixed(2)}</p>
    )}
    </>
  )
}

const NoMatch = () => {
  return (
    <h1>404</h1>
  )
};

export default App;
