require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

console.log(process.env.PORT);
app.use(express.json());

app.listen(port, function (err) {
  if (err) console.log(`There is an error on server listening: ${err}`);
  console.log(`Server running on port: ${port}`);
});
