const BetSection = ({bet}) => {
  console.log(bet)
  return (
    <section className="bets-card">
      <p>{bet.teams}</p>
      <p>Result: {bet.bet.name}</p>
      <p>{bet.bet.price}</p>
    </section>
  )
};

export default BetSection;