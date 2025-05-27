const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { copperWeight, copperRate, tapeCost, otherMaterials } = req.body;
  const estimate = (copperWeight * copperRate) + tapeCost + (otherMaterials || 0);
  res.json({ estimate });
});

module.exports = router;
