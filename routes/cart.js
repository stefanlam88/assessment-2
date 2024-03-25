const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch cart details
router.get('/fetch', async (req, res) => {
    try {
        // Fetch cart details from dummy API
        const cartResponse = await axios.get('https://dummyjson.com/carts/2');
        const { userId } = cartResponse.data; // Extract userId from response

        // Fetch user details using userId
        const userResponse = await axios.get(`https://dummyjson.com/users/${userId}`);

        // Rebuild final JSON payload
        const payload = {
            cart: cartResponse.data,
            user: userResponse.data
        };

        // Send consolidated payload as API response
        res.json(payload);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;