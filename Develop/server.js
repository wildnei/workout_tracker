const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static("public"));

