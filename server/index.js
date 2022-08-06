const path = require("path");
const express = require("express");
const frontendSetup = require("./middlewares/frontendSetup");

const app = express();

app.get("/api", (req, res) => {
  res.send("API URL");
});

frontendSetup(app, {
  outputPath: path.resolve(process.cwd(), "dist"),
  publicPath: "/",
});

const PORT = parseInt(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
