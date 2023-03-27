const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// Deposit Money into acoount
const deposit = asyncHandler(async (req, res) => {
  console.log("Request Body: ", req.body);
  const sender = await Admin.findById(req.body.senderId);
  const Receiver = await Admin.findById(req.body.ReceiverId);
  const amount = Number(Admin.findById(req.body.amount));

  console.log(sender);
  console.log(Receiver);
  console.log(amount);
  });

const withdraw = asyncHandler(async (req, res) => {
  console.log("Request Body: ", req.body);


  });

const transfer = asyncHandler(async (req, res) => {
  console.log("Request Body: ", req.body);


  });

  module.exports = {deposit, withdraw, transfer};