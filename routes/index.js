const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

router.post("/login", (req, res) => {
  console.log(req);

  const users = [
    { login: "Mio", password: "123" },
    { login: "Mint", password: "321" },
  ];

  let user = users.find((el) => {
    return el.login === req.body.login && el.password === req.body.password;
  });

  return user
    ? res.status(200).json({ message: "login complete" })
    : res.status(400).json({ message: "incorrect login or password" });
});

module.exports = router;
