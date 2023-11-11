const RiskLabel = ({ value }) => {
  if (value == 0) {
    return <h1>Low Risk</h1>
  } else if (value == 1) {
    return <h1>Medium Risk</h1>
  } else if (value == 2) {
    return <h1>High Risk</h1>
  }
};

export default RiskLabel;