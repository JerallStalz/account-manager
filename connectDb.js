const mongoose = require("mongoose");
const URI = process.env.URI;

const connectDb = () => {
  mongoose.connect(URI);
  mongoose.connection.on("connected", () =>
    console.log("Db successfully connected")
  );
  mongoose.connection.on("disconnect", () =>
    console.log("Db successfully disconnected")
  );
  mongoose.connection.on("error", (err) =>
    console.log(`There is an error: ${err}`)
  );
};
module.exports = connectDb;
