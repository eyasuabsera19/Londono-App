const express = require('express');
const axios = require('axios');
const app = express();
app.use(require('cors')());

app.get('/status', async (req, res) => {
  const tflKey = process.env.TFL_APP_KEY;
  const response = await axios.get(`https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=${tflKey}`);
  res.json(response.data);
});

app.listen(process.env.PORT || 5000);
