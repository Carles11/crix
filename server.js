const express = require("express");
const path = require("path");
const app = express();
const port = process.env.NODE_ENV || 3001

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "dist")))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
} )

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

