const mongoose = require("mongoose");
var validator = require("validator");

const blogSchema = new mongoose.Schema({
  PhoneNumber: {
    type: String,
    required: true,
    unique: [true],
    trim: true,
  },
  Coin: {
    type: Number,
    required: true,
  },
});

const blog1 = new mongoose.model("collections", blogSchema);

const blogSchema2 = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true],
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const blog2 = new mongoose.model("collections2", blogSchema2);

const blogSchema3 = new mongoose.Schema({
  Upi: {
    type: String,
  },
  Pack: [],
});

const blog3 = new mongoose.model("collections3", blogSchema3);

module.exports = { blog1, blog2, blog3 };
