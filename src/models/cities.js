import mongoose from "mongoose";
const citySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    lowercase: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  }
});

const City = mongoose.model('city', citySchema);
export default City
