const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => res.send("Home Page"));

app.listen(port, () => console.log(`Server started http://localhost:${port}`));