const express = require("express");
const basePath = process.env.BASE_PATH || "/person/dittnav/varslinger";
const port = process.env.PORT || 7800;

const app = express();
app.use("/static", express.static("./build/static"));
app.use("/assets", express.static("./build/"));

app.get(`${basePath}/isAlive|isReady`, (req, res) => {
  res.sendStatus(200);
});

console.log(`Starting on port ${port} with basePath ${basePath}`);
app.listen(port);
