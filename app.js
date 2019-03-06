const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("[Unhandled Exception] Node NOT Exiting...");
});

process.on('unhandledRejection', (err) => {
    console.error(err);
    console.log("[Unhandled Rejection] Node NOT Exiting...");
});

//Test endpoints
app.get('/', function (req, res) {
    res.send({
        version: "1.0.0",
        name: "node-http-unit-test"
    });
})

app.get('/user', function (req, res) {
    res.send({
        version: "1.0.0",
        name: "node-http-unit-test"
    });
})

app.post('/user', function (req, res) {
    res.send({
        version: "1.0.0",
        name: "node-http-unit-test"
    });
})

app.put('/user', function (req, res) {
    res.send({
        version: "1.0.0",
        name: "node-http-unit-test"
    });
})

app.delete('/user/:id', function (req, res) {
    res.send({
        version: "1.0.0",
        name: "node-http-unit-test"
    });
})

app.listen(3000, () => {
    console.log(`server started on port 3000`);
});

module.exports = app;



