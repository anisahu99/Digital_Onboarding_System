const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  address: { type: String, required: true },
  qrCodeURL: { type: String },
});

module.exports = mongoose.model("Hotel", hotelSchema);
