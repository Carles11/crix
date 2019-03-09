const express = require("express");
const path = require("path");
const app = express();
const port = 5000 || 5001

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
} )

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

