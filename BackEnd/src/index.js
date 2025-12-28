const {connection} = require("./db/mongoose");
const dotenv = require('dotenv');
dotenv.config();

connection();