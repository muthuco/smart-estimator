const express = require('express');
const app = express();
const estimateRoutes = require('./routes/estimate');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/estimate', estimateRoutes);

app.get('/', (req, res) => {
  res.send('Smart Estimator API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
