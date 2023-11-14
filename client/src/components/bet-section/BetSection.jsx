import './BetSection.css'

const BetSection = ({bet}) => {
  return (
    <section className="bets-card">
      <div className="bets-card__fixture">
        <img src={`/assets/team-badges/${bet.home_team.split(' ').join('').toLowerCase()}.png`} alt={`${bet.home_team}'s badge`} />
        <h3>{bet.home_team} v {bet.away_team}</h3>
        <img src={`/assets/team-badges/${bet.away_team.split(' ').join('').toLowerCase()}.png`} alt={`${bet.away_team}'s badge`} />
      </div>
      
      <p>Result: {bet.bet.name}</p>
      <p>Odds: {bet.bet.price}</p>
    </section>
  )
};

export default BetSection;