const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/users", (req, res) => {
    var users = [
        {name: "Jacob", age: 23},
        {name: "Josh", age: 24},
        {name: "Jack", age: 23}
    ];
    res.send(users);
});

app.listen(3000);

module.exports.app = app;