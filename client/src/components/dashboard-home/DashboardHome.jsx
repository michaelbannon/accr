import { useOutletContext } from "react-router-dom";

import FeaturedBet from "../featured-bet/FeaturedBet";

import './DashboardHome.css'

const DashboardHome = () => {
  const [dbBets, setDbBets] = useOutletContext();

  return (
    <section className="dashboard-home-container">
      <div className="dashboard-home__chart">
        <h3 className="larger-heading">Your Statistics</h3>
        <p>How have you got on?</p>
      </div>
      <div className="dashboard-home__ongoing">
        <h3 className="larger-heading">Recent Bets</h3>
        <p>Your recent bets.</p>
      </div>
      <div className="dashboard-home__featured">
        <h3 className="larger-heading">Featured Bets</h3>
        <p>Some of our favourite bets.</p>
        <div className="featured-grid">
          {dbBets.slice(0,3).map((featuredBet, list) => {
            return <FeaturedBet key={list} featuredBet={featuredBet} />
          })}
        </div>
      </div>
    </section>
  )
}

export default DashboardHome;