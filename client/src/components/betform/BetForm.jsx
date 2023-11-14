import { useState, useEffect } from 'react';

import BetRange from "../bet-range/BetRange"

import apiService from '../../apiservice'
import { sortByHighestOdds, createBet } from '../../helpers/betlogic'
import './BetForm.css'

const BetForm = ({betForm, setBetForm, setBetToggle, setBet}) => {
  const [sortedOdds, setSortedOdds] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await apiService.getOdds();
      setSortedOdds(sortByHighestOdds(data[0].oddsData));
    }
    )();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBetForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRangeChange = (value) => {
    setBetForm((prevState) => ({
      ...prevState,
      risk: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBet(createBet(betForm, sortedOdds));
    setBetToggle(true)
  }

  return (
    <section className="bet-form-container">
      <h3 className="light-text">Get started</h3>
      <h2>Configure your bet</h2>
      <form className="bet-form" onSubmit={handleSubmit}>
        <div className="bet-form__container">
          <div className="left">
            <div className="bet-form__icon">
              <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2 11L4.80662 7.84255C5.5657 6.98859 6.65372 6.5 7.79627 6.5L8 6.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 19.5003L7.5 19.5L11.5 16.5003C11.5 16.5003 12.3091 15.9528 13.5 15.0001C16 13.0002 13.5 9.83352 11 11.4997C8.96409 12.8565 7 14.0003 7 14.0003" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 13.5V7C8 5.89543 8.89543 5 10 5H20C21.1046 5 22 5.89543 22 7V13C22 14.1046 21.1046 15 20 15H13.5" stroke="#000000" strokeWidth="1.5"></path><path d="M15 12C13.8954 12 13 11.1046 13 10C13 8.89543 13.8954 8 15 8C16.1046 8 17 8.89543 17 10C17 11.1046 16.1046 12 15 12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.5 10.01L19.51 9.99889" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5 10.01L10.51 9.99889" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <div className="right">
            <label htmlFor="stake">Set your stake</label>
            <p>Pick how much money you would like to stake on this accumulator.</p>
            <input value={betForm.stake} name="stake" type="number" min="1.00" max="10000.00" step="0.01" onChange={handleChange} />
          </div>
        </div>
        <div className="bet-form__container">
          <div className="left">
            <div className="bet-form__icon">
              <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="#000000" strokeWidth="1.5"></path><path d="M7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 8C16.2239 8 16 7.77614 16 7.5C16 7.22386 16.2239 7 16.5 7C16.7761 7 17 7.22386 17 7.5C17 7.77614 16.7761 8 16.5 8Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12C12.5 12.2761 12.2761 12.5 12 12.5Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.5 17C7.22386 17 7 16.7761 7 16.5C7 16.2239 7.22386 16 7.5 16C7.77614 16 8 16.2239 8 16.5C8 16.7761 7.77614 17 7.5 17Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 17C16.2239 17 16 16.7761 16 16.5C16 16.2239 16.2239 16 16.5 16C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <div className="right">
            <label htmlFor="risk">Pick the risk</label>
            <p>Pick how risky you would like the accumulator to be.</p>
            <BetRange value={betForm.risk} handleRangeChange={handleRangeChange} />
          </div>
        </div>
        <div className="bet-form__container">
          <div className="left">
            <div className="bet-form__icon">
              <svg width="24px" strokeWidth="1.5" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5 19.5V5C5 3.89543 5.89543 3 7 3H18.4C18.7314 3 19 3.26863 19 3.6V21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path><path d="M9 7L15 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path><path d="M6.5 15L19 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path><path d="M6.5 18L19 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path><path d="M6.5 21L19 21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path><path d="M6.5 18C5.5 18 5 17.3284 5 16.5C5 15.6716 5.5 15 6.5 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.5 21C5.5 21 5 20.3284 5 19.5C5 18.6716 5.5 18 6.5 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          <div className="right">
            <label htmlFor="gameAmount">How many games?</label>
            <p>Pick how many games you would like to add to your accumulator.</p>
            <input value={betForm.gameAmount} name="gameAmount" type="number" min="1" max={sortedOdds.length} step="1" onChange={handleChange} />
          </div>
        </div>
        <button>Create the bet</button>
      </form>
    </section>
  )
};

export default BetForm;