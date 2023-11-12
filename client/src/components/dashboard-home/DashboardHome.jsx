import './DashboardHome.css'

const DashboardHome = () => {
  return (
    <section className="dashboard-home-container">
      <div className="dashboard-home__chart">
        <h3>Your Statistics</h3>
        <p>How have you got on?</p>
      </div>
      <div className="dashboard-home__ongoing">
        <h3>Ongoing Bets</h3>
        <p>Your pending bets.</p>
      </div>
      <div className="dashboard-home__featured">
        <h3>Featured Bets</h3>
        <p>Some of our favourite bets.</p>
      </div>
    </section>
  )
}

export default DashboardHome;