const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// GET users
// GET
const getUsers = asyncHandler(async (req, res) => {
  const users = await Admin.find();
  res.status(200).json(users);
});

// CREATE user
// POST
const createUser = asyncHandler(async (req, res) => {
  console.log("Request Body: ", req.body);
  const { name, deposit, credit } = req.body;
  if (!name || !deposit || !credit) {
    res.status(400);
    throw new Error("Missing Fields");
  }

  const user = await Admin.create({ name, deposit, credit });
  res.status(201).json(user);
});

// Get user
// GET
const getUser = asyncHandler(async (req, res) => {
  const user = await Admin.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(user);
});

// Update user
// PUT
const updateUser = asyncHandler(async (req, res) => {
  const user = await Admin.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedUser = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

// Delete user
// DELETE
const deleteUser = asyncHandler(async (req, res) => {
  const user = await Admin.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Admin.findByIdAndRemove(req.params.id);
  res.status(200).json(user);
});

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
