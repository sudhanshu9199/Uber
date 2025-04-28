/* maps.service.js */
const axios = require('axios');

const API_KEY = process.env.GOOGLE_MAPS_API;

module.exports.getAddressCoordinate = async (address) => {
  try {
    // URL for Google Maps Geocoding API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;
    
    // Make the GET request to Google Maps API
    const response = await axios.get(url);
    
    // Check if the response is successful and has results
    if (response.data.status === 'OK') {
      // Extract latitude and longitude from the first result
      const { lat, lng } = response.data.results[0].geometry.location;
      
      // Return the coordinates as an object
      return {
        lat: lat,
        lng: lng
      };
    } else {
      throw new Error('Address not found or invalid.');
    }
  } catch (error) {
    // Handle errors (network issues, invalid API key, etc.)
    console.error('Error getting coordinates:', error);
    throw new Error('Unable to get coordinates for the given address.');
  }
};

module.exports.getDistanceAndTime = async (origin, destination) => {
  if(!origin || !destination) {
    throw new Error('Origin and destination are required.');
  }
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      const element = response.data.rows[0].elements[0];
      
      if (element.status === 'OK') {
        const { distance, duration } = element;
        return {
          distance: distance.value,
          duration: duration.value
        };
      } else {
        throw new Error('No route found between origin and destination.');
      }
    } else {
      throw new Error('Unable to get distance and time.');
    }
  } catch (error) {
    console.error('Error getting distance and time:', error);
    throw new Error('Unable to get distance and time for the given locations.');
  }
}

module.exports.getSuggestions = async (input) => {
  if (!input) {
    throw new Error('query is required.');
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.predictions.map(prediction => prediction.description);
    } else {
      throw new Error('Unable to get suggestions.');
    }
  } catch (error) {
    console.error('Error getting suggestions:', error);
    throw new Error('Unable to get suggestions for the given input.');
  }
}