const express = require('express');
const router = express.Router();
const DeliveryService = require('../services/deliveryService');

router.post('/calculate-delivery-cost', (req, res) => {
    try {
        const order = req.body;
        const deliveryService = new DeliveryService();
        const cost = deliveryService.calculateMinDeliveryCost(order);
        
        res.json({ minimumCost: cost });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;