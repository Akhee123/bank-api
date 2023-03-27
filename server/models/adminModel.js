const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  passport:{
    type: String,
    required: [true, "Please add user name"],
    unique : [true, "Please add passport number"],
  },
  name: {
    type: String,
    required: [true, "Please add user name"],
  },
  deposit:{
    type: Number,
    required: [true, "Please enter deposit amount"],
  },
  credit:{
    type: Number,
    required: [true, "Please enter credit amount"],
  },
});

module.exports = mongoose.model("Admin", adminSchema, "bankUsers");