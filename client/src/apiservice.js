const BASE_URL = 'http://localhost:3000';

const apiService = {}

apiService.getOdds = () => {
  return fetch(`${BASE_URL}/odds`).then((res) => res.json()).catch((error) => console.log(error));
}

apiService.getBets = () => {
  return fetch(`${BASE_URL}/bets`).then((res) => res.json()).catch((error) => console.log(error));
}

apiService.getUsersBets = (id) => {
  return fetch(`${BASE_URL}/bets/${id}`).then((res) => res.json()).catch((error) => console.log(error));
}

apiService.createBet = (bet) => {
  return fetch(`${BASE_URL}/bets`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bet)
  }).then((res) => res).catch((error) => console.log(error));
}

export default apiService;