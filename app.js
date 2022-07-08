const path = require("path");
const express = require("express");
const morgan = require("morgan");

const PORT = 5050;

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", require("./routes"));

app.listen(PORT, () => console.log("Server started on port" + "  " + PORT));
