import express from "express";

const app = express();

const PORT = 5570;

app.listen(PORT, () => console.log("listening on port " + PORT));
