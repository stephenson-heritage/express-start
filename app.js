const express = require('express');
const app = express();

const port = 80;

app.get('/', (req, res) => {
    res.send("Hello Dorld!");
});

app.get('/:val', (req, res) => {
    let html = "<html><head><title>Home!</title></head><body>";
    html += `Bye ${req.params.val}`;
    html += "</body></html>";

    res.send(html);
});

app.listen(port, () => { console.log(`Listening on port ${port}`) });