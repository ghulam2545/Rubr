const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    const main_file = path.join(__dirname + "/index.html");
    res.sendFile(main_file);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
