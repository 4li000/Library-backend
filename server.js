const express = require("express");


const app = express();
require('dotenv').config();
require("./config/database")


app.listen(3000, () => {
    console.log("Listening on port 3000");
});