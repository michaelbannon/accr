import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import BetSection from '../bet-section/BetSection';
import BetForm from '../betform/BetForm';

import './Bet.css'

import apiService from '../../apiservice';

const Bet = () => {
  const [betToggle, setBetToggle] = useState(false);
  const [bet, setBet] = useState([]);
  const [betForm, setBetForm] = useState({stake: 0, risk: 0, gameAmount: 0});

  const navigate = useNavigate();

  const saveBet = async () => {
    const dbBet = {
      userId: '6550d977770788fb6bea7d6d',
      games: bet,
      risk: bet[0].risk[0],
      stake: bet[0].stake[0],
      likes: 2
    }
    await apiService.createBet(dbBet);
    navigate("/dashboard/your-bets");
  }

  if (betToggle == false) {
    return <BetForm betForm={betForm} setBetForm={setBetForm} setBetToggle={setBetToggle} setBet={setBet} />
  } else {
    return (
      <section className="bet-form-container">
        <h3 className="light-text">Get started</h3>
        <h2>Configure your bet</h2>
        {
          bet.map((newBet, i) => {
            return <BetSection key={i} bet={newBet} />
          })
        }
        <h3 className="winning-header">Winning amount: £{bet.reduce((acc, current) => acc * current.bet.price, bet[0].stake).toFixed(2)}</h3>
        <div className="completed-bet-buttons">
          <button className="button-secondary"
            onClick={() => {
              setBetToggle(false);
            }}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              saveBet();
            }}
          >
            Create Bet
          </button>
        </div>
      </section>
    )
  }
};

export default Bet;