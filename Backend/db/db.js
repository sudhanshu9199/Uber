const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    } catch(err){
        console.error('MongoDB connection error: ',err);
    }
};

connectDB(); // ✅ Calls the function to initiate the connection
module.exports = connectDB; // Export the connectDB function for use in other files