const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { copperWeight, copperRate, tapeCost, otherMaterials } = req.body;
  
    // Validation
    if (
      typeof copperWeight !== 'number' ||
      typeof copperRate !== 'number' ||
      typeof tapeCost !== 'number'
    ) {
      return res.status(400).json({
        error: 'copperWeight, copperRate, and tapeCost are required and must be numbers'
      });
    }
  
    const estimate = (copperWeight * copperRate) + tapeCost + (otherMaterials || 0);
    res.json({ estimate });
  });  

module.exports = router;
