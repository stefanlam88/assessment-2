const express = require('express');
const app = express();
const cartRouter = require('./routes/cart');

// Use cart routes
app.use('/cart/api/v1.0', cartRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
