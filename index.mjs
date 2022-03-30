import express from "express";
import router from "./routes.mjs"

const port = 3000;
const host = "127.0.0.1";

var app = express()
app.use(express.json({ extended: false }));
app.use(router)

app.listen(port, host);
console.log("\x1b[36m%s\x1b[0m", `\nListening at http://${host}:${port}`);


