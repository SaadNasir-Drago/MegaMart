const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
// Create an Express application
const app = express();
// Define a port
const PORT = 4000;

// MongoDB connection string
const MONGO_URI = 'mongodb+srv://snasir2194:root@cluster0.tvbae.mongodb.net/snasir2194'; // Replace with your MongoDB URI and database name

//CORS middleware
app.use(cors())

// Middleware: Parses incoming JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define a Mongoose schema and model for the 'products' collection
const productSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  image: String,
  price: Number,
  originalPrice: Number,
  save: Number
});

const Product = mongoose.model('Product', productSchema, 'mobile_phones'); // 'products' is the collection name

// Define a GET route to fetch all products
app.get('/products', async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});
        console.log(products)
        res.status(200).send(products); // Send the fetched products as a response
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

// Define a default GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
