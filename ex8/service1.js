const express = require('express');
const app = express();
const PORT = 3001;

app.get('', (req, res) => {
    res.send('Response from Service 1');
});

app.listen(PORT, () => {
    console.log(`Service 1 running on port ${PORT}`);
});
