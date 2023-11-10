const BetSection = ({bet}) => {
  return (
    <section className="bets">
      <p>{bet.teams}</p>
      <p>Result: {bet.bet.name}</p>
      <p>{bet.bet.price}</p>
    </section>
  )
};

export default BetSection;