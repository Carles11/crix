const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000 || 5001;
const ENV = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"), (err) => {
        if (err) {
            res.status(500).send(err)
        }
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${String(PORT)} in (${ENV}).`);
});

