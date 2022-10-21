require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectDb = require("./connectDb");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(express.json());
connectDb();

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, function (err) {
  if (err) return console.log(`There is an error on server listening: ${err}`);
  console.log(`Server running on port: ${port}`);
});
