const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const app = express()

const db = require("./models")

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port 8080`);
});