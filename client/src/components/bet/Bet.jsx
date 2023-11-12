import { useState } from 'react';

import BetSection from '../bet-section/BetSection';
import BetForm from '../betform/BetForm';

const Bet = () => {
  const [betToggle, setBetToggle] = useState(false);
  const [bet, setBet] = useState([]);
  const [betForm, setBetForm] = useState({stake: 0, risk: 0, gameAmount: 0});

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
        <p>Winning amount: £{bet.reduce((acc, current) => acc * current.bet.price, bet[0].stake).toFixed(2)}</p>
        <button onClick={() => {
          setBetToggle(false);
        }}>Go Back</button>
      </section>
    )
  }
};

export default Bet;