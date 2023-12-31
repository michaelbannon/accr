const sortByHighestOdds = (data) => {
  const sortedOdds = [];
  data.forEach((game) => {
    const sortedGame = {...game};
    sortedGame.bookmakers[0].markets[0].outcomes.sort((a, b) => b.price - a.price);
    sortedOdds.push(sortedGame);
  });
  return sortedOdds;
};

const createBet = (betFormObj, sortedOdds) => {
  const { stake, risk, gameAmount } = betFormObj;
  const riskEval = [2, 1, 0];
  const bet = sortedOdds.map((betOdds) => {
    const selectedBet = betOdds.bookmakers[0].markets[0].outcomes[riskEval[risk]];
    return {
      gameId: betOdds.id,
      gameStartTime: betOdds.commence_time,
      home_team: betOdds.home_team,
      away_team: betOdds.away_team,
      bet: selectedBet,
      stake: stake,
      risk: risk
    }
  });
  const betToBeReturned = [];
  const numberCheck = [];
  if (gameAmount == bet.length) {
    return bet;
  }
  while (betToBeReturned.length < gameAmount) {
    let randomNumber = parseInt(Math.abs(Math.floor(Math.random() * bet.length - 1)));
    if (!numberCheck.includes(randomNumber)) {
      numberCheck.push(randomNumber);
      betToBeReturned.push(bet[randomNumber]);
    }
  }
  return betToBeReturned;
};

export {
  sortByHighestOdds,
  createBet
}