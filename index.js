const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ by: "there" });
});

const PORT = process.env.PORT || "127.0.0.1";

app.listen(PORT, "0.0.0.0");
