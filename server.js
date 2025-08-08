const express = require ("express");
const app = express();
const PORT = 5000;
const data = require("./data.json");

app.get("/api/profile", function (req, res) {
    res.json(data);
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);

});
