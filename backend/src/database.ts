import mongoose from 'mongoose';

const connectionString = 'mongodb://127.0.0.1:27017/dbproj'; // Your MongoDB connection string

mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
