const express = require('express');
const app = express();
const PORT = 3002;

app.get('', (req, res) => {
    res.send('Response from Service 2');
});

app.listen(PORT, () => {
    console.log(`Service 2 running on port ${PORT}`);
});
