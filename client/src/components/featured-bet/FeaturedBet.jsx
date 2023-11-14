const FeaturedBet = ({featuredBet}) => {
  const { games, likes } = featuredBet
  return (
    <div className="featured-bet-container">
      <div className="bets-card__fixture">
      {
        games.map((game) => {
          return (
            <>
            <img src={`/assets/team-badges/${game.home_team.split(' ').join('').toLowerCase()}.png`} alt={`${game.home_team}'s badge`} />
            <h5>{game.home_team} v {game.away_team}</h5>
            <p>{game.bet.name}</p>
            <img src={`/assets/team-badges/${game.away_team.split(' ').join('').toLowerCase()}.png`} alt={`${game.away_team}'s badge`} />
            </>
          
          )
        })
      }
      <p>Likes: {likes}</p>
      </div>
    </div>
  )
}

export default FeaturedBet;