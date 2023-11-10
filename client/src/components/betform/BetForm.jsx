import { useState, useEffect } from 'react';

import BetSection from "../bet-section/BetSection";

import data from '../../data/mock-data';
import { sortByHighestOdds, createBet } from '../../helpers/betlogic'

const BetForm = () => {
  const [betForm, setBetForm] = useState({risk: 0});
  const [sortedOdds, setSortedOdds] = useState([]);
  const [bet, setBet] = useState([]);

  useEffect(() => {
    setSortedOdds(sortByHighestOdds(data));
  },[]);

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
};

export default BetForm