const path = require("path");
const express = require("express");

const PORT = 5050;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("Server started on port" + " " + PORT));
