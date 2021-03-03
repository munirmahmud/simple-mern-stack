import express from "express";
const app = express();
const port = 9000;

app.get("/", (_req, res) => res.send("Home Page"));

app.listen(port, () => console.log(`Server started http://localhost:${port}`));
