/* captain.controller.js */
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if(isCaptainAlreadyExist){
        return res.status(400).json({ message: 'Captain already exist' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');

    if(!captain){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: 'Invalid email or password'});
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ message: 'Login successful', captain, token });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    // get token if needed for logging or further operations
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({ token });
     // Clear the token cookie
    res.clearCookie('token');
    // Send success response
    res.status(200).json({ message: 'Logout successfully' });
}

/* {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ZlN2E5YjRmMzQ0ZDE4MGM3ZWI1MzQiLCJpYXQiOjE3NDQ3MzA3NzksImV4cCI6MTc0NDgxNzE3OX0.MvFaYKWjZ5D8dkZglTOAdvoRMawFR7wUWQeyVK2Uv6E",
    "captain": {
        "fullname": {
            "firstname": "test_captain_firstname",
            "lastname": "test_captain_lastname"
        },
        "email": "test_email@gmail.com",
        "password": "$2b$10$vTIo4MkWFdVnoCC2WG2LOeZveNv6iO1S4aBDGV8Grzg67gMgKUIaG",
        "status": "inactive",
        "vehicle": {
            "color": "red",
            "plate": "MP 04 XY 6204",
            "capacity": 3,
            "vehicleType": "car"
        },
        "_id": "67fe7a9b4f344d180c7eb534",
        "__v": 0
    }
} */