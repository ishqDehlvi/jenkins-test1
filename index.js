const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello duniya");
});

module.exports = app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on http://localhost:4000`)
);
