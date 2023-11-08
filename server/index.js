const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port} 🤙`);
});