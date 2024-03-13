import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  model: String,
  series: String,
  price: Number,
});

const Car = mongoose.model('Car', carSchema);

export default Car;
