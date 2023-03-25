const express = require('express');
const dotenv = require("dotenv").config();

const adminRoutes = require('./routes/adminRoute');
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")

connectDb();

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use("/user", adminRoutes);
server.use(errorHandler);


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});