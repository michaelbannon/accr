import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";

import FeaturedBet from '../featured-bet/FeaturedBet';

import apiService from '../../apiservice';

import './YourBets.css'

const YourBets = () => {
  const [userBets, setUserBets] = useState([]);
  const userContext = useOutletContext();

  

  useEffect(() => {
    (async function () {
      const response = await apiService.getUsersBets(userContext[2]._id);
      setUserBets(response);
    })();
  },[])

  return (
    <section className="dashboard-home-container">
      <section className="your-bets-container">
        {
          userBets.map((featuredBet, list) => {
            return <FeaturedBet key={list} featuredBet={featuredBet} />
          })
        }
      </section>
    </section>
  )
}

export default YourBets;