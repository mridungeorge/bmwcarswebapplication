import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes'; // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // For parsing application/json

// Updated MongoDB connection without useUnifiedTopology
mongoose.connect('mongodb://127.0.0.1:27017/dbproj')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', authRoutes); // This sets up your login route at /api/login
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
