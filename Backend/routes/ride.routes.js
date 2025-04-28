const express = require('express');
const rideController = require('../controllers/ride.controller');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['Sedan', 'Hatchback', 'SUV', 'Mini', 'Bike', 'Auto Rickshaw', 'Electric']).withMessage('Invalid vehicle type'),
    rideController.createRide
)

module.exports = router;