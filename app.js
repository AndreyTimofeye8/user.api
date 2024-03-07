require("./modules/db.connection");
const { PORT } = require("./config/config");

const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(express.static("photos"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/", userRoutes);

module.exports = app;
