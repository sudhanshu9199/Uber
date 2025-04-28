/* ride.service.js */
const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination, vehicleType) {
    if (!pickup || !destination || !vehicleType) {
        throw new Error('Pickup, destination, and vehicle type are required to calculate fare');
    }

    const distanceAndTime = await mapService.getDistanceAndTime(pickup, destination);
    const distanceInKm = distanceAndTime.distance / 1000; // assuming distance is in meters
    const durationInMinutes = distanceAndTime.duration / 60; // assuming duration is in seconds

    const fareRates = {
        'Sedan': { baseFare: 50, perKm: 11, perMinute: 1.8 },         // For comfortable travel but affordable
        'Hatchback': { baseFare: 40, perKm: 9, perMinute: 1.5 },      // Very common for families and solo travelers
        'SUV': { baseFare: 80, perKm: 16, perMinute: 2.8 },           // Higher end but adjusted down a bit
        'Mini': { baseFare: 35, perKm: 7, perMinute: 1.2 },           // Very budget friendly, for students etc.
        'Bike': { baseFare: 15, perKm: 4.5, perMinute: 0.9 },         // Extremely cheap and fast for solo
        'Auto Rickshaw': { baseFare: 20, perKm: 5, perMinute: 1 },    // Autos are lifelines of small-medium cities
        'Electric Car': { baseFare: 45, perKm: 9, perMinute: 1.6 },   // Incentivizing eco-friendly travel
    };

    const rates = fareRates[vehicleType];
    if (!rates) {
        throw new Error('Invalid vehicle type');
    }

    const fare = rates.baseFare + (rates.perKm * distanceInKm) + (rates.perMinute * durationInMinutes);

    return fare; // no rounding
}

function getOtp(num){
    if (num <= 0){
        throw new Error('Number must be greater than 0');
    }
    // Calculate the maximum value based on num digits
    const max = Math.pow(10, num) - 1;
    const min = Math.pow(10, num - 1);

    // Generate a random number within the range [min, max]
    const otp = crypto.randomInt(min, max + 1);

    return otp.toString();

}

async function createRide (user, pickup, destination, vehicleType) {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, destination, and vehicle type are required to create a ride');
    }
    const fare = await getFare(pickup, destination, vehicleType);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare,
        vehicleType
    });
    await ride.save();
    return ride;
}


module.exports = { getFare, createRide, getOtp };